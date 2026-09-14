// ============================================
// EQRA — SPA Hash Router
// ============================================

export class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    this.params = {};
    this.query = {};
    this.beforeHooks = [];
    this.afterHooks = [];
    
    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('load', () => this.resolve());
  }

  /**
   * Register a route pattern with its handler
   * @param {string} pattern - Route pattern like '/:lang/quran/:surah'
   * @param {Function} handler - Async function(params, query) => HTML string
   */
  on(pattern, handler) {
    this.routes.set(pattern, handler);
    return this;
  }

  /** Navigate to a new hash route */
  navigate(path) {
    window.location.hash = path.startsWith('/') ? path : `/${path}`;
  }

  /** Add before-navigation hook */
  before(hook) {
    this.beforeHooks.push(hook);
    return this;
  }

  /** Add after-navigation hook */
  after(hook) {
    this.afterHooks.push(hook);
    return this;
  }

  /** Parse hash into path, params, query */
  parse(hash) {
    const raw = hash.replace(/^#\/?/, '/');
    const [pathPart, queryPart] = raw.split('?');
    const path = pathPart.replace(/\/+$/, '') || '/';
    
    const query = {};
    if (queryPart) {
      new URLSearchParams(queryPart).forEach((v, k) => { query[k] = v; });
    }
    
    return { path, query };
  }

  /** Match a URL path against a route pattern */
  match(pattern, path) {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);

    // Exact length match (no wildcard support for now)
    if (patternParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
      } else if (patternParts[i] !== pathParts[i]) {
        return null;
      }
    }
    return params;
  }

  /** Resolve current hash to a route handler */
  async resolve() {
    const { path, query } = this.parse(window.location.hash);

    // Run before hooks
    for (const hook of this.beforeHooks) {
      const result = await hook(path, query);
      if (result === false) return;
    }

    // Find matching route
    let matched = false;
    for (const [pattern, handler] of this.routes) {
      const params = this.match(pattern, path);
      if (params !== null) {
        this.currentRoute = pattern;
        this.params = params;
        this.query = query;
        
        try {
          await handler(params, query);
        } catch (err) {
          console.error(`[Router] Error in handler for ${pattern}:`, err);
        }
        
        matched = true;
        break;
      }
    }

    // 404 fallback
    if (!matched) {
      const notFound = this.routes.get('*');
      if (notFound) {
        await notFound({ path }, query);
      }
    }

    // Run after hooks
    for (const hook of this.afterHooks) {
      await hook(path, query, this.params);
    }
  }

  /** Get current language from URL */
  get lang() {
    return this.params.lang || 'bn';
  }
}

export const router = new Router();
