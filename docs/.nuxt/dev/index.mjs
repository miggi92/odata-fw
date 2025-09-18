import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getRequestHost, getRequestProtocol, getQuery as getQuery$1, removeResponseHeader, setHeader, readBody, getRouterParam, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, sendError, getRouterParams, getResponseStatusText, H3Error } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@vue+shared@3.5.21/node_modules/@vue/shared/dist/shared.cjs.js';
import defu, { defuFn, defu as defu$1 } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { html as html$1 } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/satori-html@0.3.2/node_modules/satori-html/dist/index.js';
import sizeOf from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/image-size@2.0.2/node_modules/image-size/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, withBase, joinRelativeURL, withoutTrailingSlash, withoutProtocol, hasProtocol, withHttps, withLeadingSlash, withoutLeadingSlash, decodePath } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import consola, { consola as consola$1, createConsola } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import { execa } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/execa@9.6.0/node_modules/execa/index.js';
import playwrightCore from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/playwright-core@1.55.0/node_modules/playwright-core/index.mjs';
import { isVNode, toValue, isRef } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/vue@3.5.21_typescript@5.9.2/node_modules/vue/index.mjs';
import { stringify as stringify$1 } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/minimark@0.2.0/node_modules/minimark/dist/stringify.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/vue-bundle-renderer@2.1.2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { stringify, parse, uneval } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/devalue@5.3.2/node_modules/devalue/index.js';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/unhead@2.0.14/node_modules/unhead/dist/server.mjs';
import { createStorage, prefixStorage, normalizeKey } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/unstorage@1.17.1_@netlify+b_759b95addce6e69d7bbd1e082a58d04a/node_modules/unstorage/dist/index.mjs';
import lruCacheDriver from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/unstorage@1.17.1_@netlify+b_759b95addce6e69d7bbd1e082a58d04a/node_modules/unstorage/drivers/lru-cache.mjs';
import { klona } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase, pascalCase } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { createGenerator } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@unocss+core@66.5.1/node_modules/@unocss/core/dist/index.mjs';
import presetWind from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@unocss+preset-wind3@66.5.1/node_modules/@unocss/preset-wind3/dist/index.mjs';
import { digest, hash as hash$1 } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { createHooks } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/node-mock-http@1.0.3/node_modules/node-mock-http/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/unstorage@1.17.1_@netlify+b_759b95addce6e69d7bbd1e082a58d04a/node_modules/unstorage/drivers/fs.mjs';
import { readFile } from 'node:fs/promises';
import { ErrorParser } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/youch-core@0.3.3/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/youch@4.1.0-beta.11/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/source-map@0.7.6/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import { toHast } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/minimark@0.2.0/node_modules/minimark/dist/hast.mjs';
import devalue from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+devalue@2.0.2/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1, basename, isAbsolute } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@iconify+utils@3.0.1/node_modules/@iconify/utils/lib/index.js';
import { collections } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.nuxt/nuxt-icon-server-bundle.mjs';
import { renderToString } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/vue@3.5.21_typescript@5.9.2/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/unhead@2.0.14/node_modules/unhead/dist/utils.mjs';
import localAdapter from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/db0@0.3.2_better-sqlite3@12.2.0/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/ipx@2.1.1_@netlify+blobs@9._a634e1c7c669fe2189c48f824236382e/node_modules/ipx/dist/index.mjs';
import { createUnhead } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/unhead@2.0.14/node_modules/unhead/dist/index.mjs';
import { Resvg } from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@resvg+resvg-js@2.6.2/node_modules/@resvg/resvg-js/index.js';
import _satori from 'file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/satori@0.15.2/node_modules/satori/dist/index.js';

const serverAssets = [{"baseName":"nuxt-og-image:fonts","dir":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.nuxt/cache/nuxt-og-image/_fonts"},{"baseName":"server","dir":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/server/assets"}];

const assets$2 = createStorage();

for (const asset of serverAssets) {
  assets$2.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$2);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  ui: {
    colors: {
      primary: "green",
      neutral: "slate"
    },
    footer: {
      slots: {
        root: "border-t border-default",
        left: "text-sm text-muted"
      }
    }
  },
  seo: {
    siteName: "Nuxt Docs Template"
  },
  header: {
    title: "",
    to: "/",
    logo: {
      alt: "",
      light: "",
      dark: ""
    },
    search: true,
    colorMode: true,
    links: [{
      "icon": "i-simple-icons-github",
      "to": "https://github.com/nuxt-ui-templates/docs",
      "target": "_blank",
      "aria-label": "GitHub"
    }]
  },
  footer: {
    credits: `Built with Nuxt UI \u2022 \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()}`,
    colorMode: false,
    links: [{
      "icon": "i-simple-icons-discord",
      "to": "https://go.nuxt.com/discord",
      "target": "_blank",
      "aria-label": "Nuxt on Discord"
    }, {
      "icon": "i-simple-icons-x",
      "to": "https://go.nuxt.com/x",
      "target": "_blank",
      "aria-label": "Nuxt on X"
    }, {
      "icon": "i-simple-icons-github",
      "to": "https://github.com/nuxt/ui",
      "target": "_blank",
      "aria-label": "Nuxt UI on GitHub"
    }]
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Community",
      edit: "https://github.com/nuxt-ui-templates/docs/edit/main/content",
      links: [{
        icon: "i-lucide-star",
        label: "Star on GitHub",
        to: "https://github.com/nuxt/ui",
        target: "_blank"
      }, {
        icon: "i-lucide-book-open",
        label: "Nuxt UI docs",
        to: "https://ui4.nuxt.com/docs/getting-started/installation/nuxt",
        target: "_blank"
      }]
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "ui": {
    "colors": {
      "primary": "green",
      "secondary": "blue",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "slate"
    },
    "icons": {
      "arrowDown": "i-lucide-arrow-down",
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "arrowUp": "i-lucide-arrow-up",
      "caution": "i-lucide-circle-alert",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "copy": "i-lucide-copy",
      "copyCheck": "i-lucide-copy-check",
      "dark": "i-lucide-moon",
      "ellipsis": "i-lucide-ellipsis",
      "error": "i-lucide-circle-x",
      "external": "i-lucide-arrow-up-right",
      "eye": "i-lucide-eye",
      "eyeOff": "i-lucide-eye-off",
      "file": "i-lucide-file",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "hash": "i-lucide-hash",
      "info": "i-lucide-info",
      "light": "i-lucide-sun",
      "loading": "i-lucide-loader-circle",
      "menu": "i-lucide-menu",
      "minus": "i-lucide-minus",
      "panelClose": "i-lucide-panel-left-close",
      "panelOpen": "i-lucide-panel-left-open",
      "plus": "i-lucide-plus",
      "reload": "i-lucide-rotate-ccw",
      "search": "i-lucide-search",
      "stop": "i-lucide-square",
      "success": "i-lucide-circle-check",
      "system": "i-lucide-monitor",
      "tip": "i-lucide-lightbulb",
      "upload": "i-lucide-upload",
      "warning": "i-lucide-triangle-alert"
    }
  },
  "icon": {
    "provider": "iconify",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "components",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/__nuxt_content/**": {
        "robots": false
      },
      "/__nuxt_content/landing/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/docs/sql_dump.txt": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "content": {
      "wsUrl": "ws://localhost:4001/"
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "accordion": "ProseAccordion",
          "accordion-item": "ProseAccordionItem",
          "badge": "ProseBadge",
          "callout": "ProseCallout",
          "card": "ProseCard",
          "card-group": "ProseCardGroup",
          "caution": "ProseCaution",
          "code-collapse": "ProseCodeCollapse",
          "code-group": "ProseCodeGroup",
          "code-icon": "ProseCodeIcon",
          "code-preview": "ProseCodePreview",
          "code-tree": "ProseCodeTree",
          "collapsible": "ProseCollapsible",
          "field": "ProseField",
          "field-group": "ProseFieldGroup",
          "icon": "ProseIcon",
          "kbd": "ProseKbd",
          "note": "ProseNote",
          "steps": "ProseSteps",
          "tabs": "ProseTabs",
          "tabs-item": "ProseTabsItem",
          "tip": "ProseTip",
          "warning": "ProseWarning"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "content": {
    "databaseVersion": "v3.5.0",
    "version": "3.7.1",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "llms": {
    "domain": "https://docs-template.nuxt.dev/",
    "title": "Nuxt Docs Template",
    "description": "A template for building documentation with Nuxt UI and Nuxt Content.",
    "notes": [],
    "sections": [
      {
        "title": "Documentation Sets",
        "links": [
          {
            "title": "Nuxt Docs Template - Full Documentation",
            "description": "This is the full documentation for the Nuxt Docs Template.",
            "href": "https://docs-template.nuxt.dev//llms-full.txt"
          }
        ]
      },
      {
        "title": "Getting Started",
        "contentCollection": "docs",
        "contentFilters": [
          {
            "field": "path",
            "operator": "LIKE",
            "value": "/getting-started%"
          }
        ]
      },
      {
        "title": "Essentials",
        "contentCollection": "docs",
        "contentFilters": [
          {
            "field": "path",
            "operator": "LIKE",
            "value": "/essentials%"
          }
        ]
      }
    ]
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "docs",
        "env": "development"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "odata-fw-docs"
      }
    ],
    "version": "3.2.8",
    "debug": false,
    "multiTenancy": []
  },
  "nuxt-og-image": {
    "version": "5.1.11",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "renderer": "satori",
      "component": "NuxtSeo",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "baseCacheKey": "/cache/nuxt-og-image/5.1.11",
    "fonts": [
      {
        "cacheKey": "Inter:undefined:400",
        "style": "normal",
        "weight": 400,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-400.ttf.base64"
      },
      {
        "cacheKey": "Inter:undefined:700",
        "style": "normal",
        "weight": 700,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-700.ttf.base64"
      }
    ],
    "hasNuxtIcon": true,
    "colorPreference": "light",
    "strictNuxtContentPaths": "",
    "isNuxtContentDocumentDriven": false,
    "componentDirs": [
      "OgImage",
      "og-image",
      "OgImageTemplate"
    ]
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _Q2NQYZmA_MxnIYOCCykCqGRVRONsJBTWdCpXWNCLEhE = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

const rootDir = "C:/Users/miguel.gebhardt/projects/github/odata-fw/docs";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt","class":"isolate"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _f8I004o8F96eSGjfEJy93XFpXaaykUysJTXJesI8Wu8 = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const checksums = {
  "landing": "v3.5.0--HctyFT_D_wlT2tGunvr1n_iuLuiaaKStldMhl6fByD8",
  "docs": "v3.5.0--Wxz2Jhlwbkm7uiSfVvjllELHjUWmNkhCY1oGEExwSts"
};
const checksumsStructure = {
  "landing": "tZyOKbtBW1Y6jgOgyl3rm-ghuJUJsbLCHIgBPzIXDfk",
  "docs": "34VO9dvAPvtpqIagDKzbpgcpKTSRhud0mLOnSKb5i1E"
};
const tables = {
  "landing": "_content_landing",
  "docs": "_content_docs",
  "info": "_content_info"
};
const contentManifest = {
  "landing": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "docs": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

const linkProps = ["href", "src", "to"];
const importExternalPackage = async (name) => await import(name);
async function createDocumentGenerator() {
  const visit = await importExternalPackage("unist-util-visit").then((res) => res.visit);
  const stringifyMarkdown = await importExternalPackage("@nuxtjs/mdc/runtime").then((res) => res.stringifyMarkdown);
  return generateDocument;
  async function generateDocument(doc, options) {
    const hastTree = refineDocumentBody(doc.body, options);
    let markdown = await stringifyMarkdown(hastTree, {});
    if (!markdown?.trim().startsWith("# ")) {
      const title = doc.title || doc.seo?.title || "";
      if (title) {
        markdown = `# ${title}

${markdown}`;
      }
    }
    return markdown;
  }
  function refineDocumentBody(body, options) {
    const hastTree = toHast(body);
    visit(hastTree, (node) => !!node.props?.to || !!node.props?.href || !!node.props?.src, (node) => {
      for (const prop of linkProps) {
        if (node.props?.[prop]) {
          node.props[prop] = withBase(node.props[prop], options.domain);
        }
      }
    });
    return hastTree;
  }
}
function prepareContentSections(sections) {
  const contentSections = sections.filter((section) => section.contentCollection);
  if (contentSections.length) {
    return;
  }
  const pageCollecitons = Object.keys(contentManifest).filter((c) => contentManifest[c].type === "page");
  const autoGeneratedSections = pageCollecitons.map((c) => ({
    __nuxt_content_auto_generate: true,
    title: pascalCase(c),
    contentCollection: c,
    contentFilters: [
      {
        field: "extension",
        operator: "=",
        value: "md"
      }
    ]
  }));
  sections.push(...autoGeneratedSections);
}

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts?.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = opts?.limit || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

async function fetchDatabase(event, collection) {
  return await $fetch(`/__nuxt_content/${collection}/sql_dump.txt`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    responseType: "text",
    headers: {
      "content-type": "text/plain",
      ...event?.node?.req?.headers?.cookie ? { cookie: event.node.req.headers.cookie } : {}
    },
    query: { v: checksums[String(collection)], t: Date.now()  }
  });
}
async function fetchQuery(event, collection, sql) {
  return await $fetch(`/__nuxt_content/${collection}/query`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    headers: {
      "content-type": "application/json",
      ...event?.node?.req?.headers?.cookie ? { cookie: event.node.req.headers.cookie } : {}
    },
    query: { v: checksums[String(collection)], t: Date.now()  },
    method: "POST",
    body: {
      sql
    }
  });
}

const queryCollection$1 = (event, collection) => {
  return collectionQueryBuilder(collection, (collection2, sql) => fetchQuery(event, collection2, sql));
};

const queryCollection = queryCollection$1;

const llmsHooks = createHooks();
llmsHooks.beforeEach(() => {
  const hooks = Object.values(llmsHooks._hooks || {});
  const hasRegisteredHook = hooks.some((hooksList) => Array.isArray(hooksList) && hooksList.length > 0);
  if (hasRegisteredHook) {
    console.warn("[nuxt-llms] `llmsHooks` are deprecated and will be removed in future versions. Use `useNitroApp().hooks.hook('llms:generate', (event, options) => {})` instead");
  }
});

function getNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  port = process.env.NITRO_PORT || process.env.PORT || "3000";
  let protocol = cert && key || false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (e) {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0] || false;
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    let idx;
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      idx = stack.push(entry);
    return () => {
      if (typeof idx !== "undefined") {
        stack.splice(idx - 1, 1);
      }
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0]?.toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

const logger$1 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function getSiteConfig(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$1.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function useNitroOrigin(e) {
  return getNitroOrigin(e);
}

function useSiteConfig(e, _options) {
  return getSiteConfig(e, _options);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
  return ext && fileExtensions.includes(ext.replace(".", ""));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const _0pCu0P552Gy4xEGAJl2eNoQSJg2rFMN6Rw63rHrRDU = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("llms:generate", async (event, options) => {
    prepareContentSections(options.sections);
    const sectionsToRemove = [];
    for (const index in options.sections) {
      const section = options.sections[index];
      if (!section.contentCollection) {
        continue;
      }
      const query = queryCollection(event, section.contentCollection).select("path", "title", "seo", "description").where("path", "NOT LIKE", "%/.navigation");
      const filters = section.contentFilters || [];
      for (const filter of filters) {
        query.where(filter.field, filter.operator, filter.value);
      }
      const docs = await query.all();
      if (docs.length === 0 && section.__nuxt_content_auto_generate) {
        sectionsToRemove.push(index);
        continue;
      }
      section.links ||= [];
      section.links.push(...docs.map((doc) => {
        return {
          title: doc.title || doc?.seo?.title || "",
          description: doc.description || doc?.seo?.description || "",
          href: withBase(doc.path, options.domain)
        };
      }));
    }
    sectionsToRemove.reverse().forEach((index) => {
      options.sections.splice(Number(index), 1);
    });
  });
  nitroApp.hooks.hook("llms:generate:full", async (event, options, contents) => {
    prepareContentSections(options.sections);
    const generateDocument = await createDocumentGenerator();
    for (const index in options.sections) {
      const section = options.sections[index];
      if (!section.contentCollection) {
        continue;
      }
      const query = queryCollection(event, section.contentCollection).where("path", "NOT LIKE", "%/.navigation");
      const filters = section.contentFilters || [];
      for (const filter of filters) {
        query.where(filter.field, filter.operator, filter.value);
      }
      const docs = await query.all();
      for (const doc of docs) {
        await nitroApp.hooks.callHook("content:llms:generate:document", event, doc, options);
        const markdown = await generateDocument(doc, options);
        contents.push(markdown);
      }
    }
  });
});

const _7cYULNymUzqDq0LbXQxcNGQOruPLnpEN0_GgJnOHyQ = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const fontCache = createStorage({
  driver: lruCacheDriver({ max: 10 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});

function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon"
  };
  for (const s in signatures) {
    if (data.startsWith(s)) {
      return signatures[s];
    }
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu$1(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => String(g[1]).toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function normaliseFontInput(fonts) {
  return fonts.map((f) => {
    if (typeof f === "string") {
      const vals = f.split(":");
      const includesStyle = vals.length === 3;
      let name, weight, style;
      if (includesStyle) {
        name = vals[0];
        style = vals[1];
        weight = vals[2];
      } else {
        name = vals[0];
        weight = vals[1];
      }
      return {
        cacheKey: f,
        name,
        weight: weight || 400,
        style: style || "normal",
        path: void 0
      };
    }
    return {
      cacheKey: f.key || `${f.name}:${f.style}:${f.weight}`,
      style: "normal",
      weight: 400,
      ...f
    };
  });
}

const theme = {};

function htmlDecodeQuotes(html) {
  return html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
}
function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#(\d+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  }).replace(/&amp;/g, "&");
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}

function fetchIsland(e, component, props) {
  const hashId = hash$1([component, props]).replaceAll("_", "-");
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

const logger = createConsola({
  defaults: {
    tag: "Nuxt OG Image"
  }
});

const componentNames = [{"hash":"qHB7UTDqYsOoKa5q1jSADKobukcDhAkU8Up4TA8E4FE","pascalName":"OgImageDocs","kebabName":"og-image-docs","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/app/components/OgImage/OgImageDocs.vue","category":"app"},{"hash":"TSsLEaYSNHiOdoSDkuHyg0tffqUe7fxSs-0dEDiwBuw","pascalName":"BrandedLogoDVue","kebabName":"branded-logo-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.d.vue.ts","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"SOHaoKfoo4fUkREsCFGw8ewxkl4-XkkHkug2VwYRtFM","pascalName":"BrandedLogo","kebabName":"branded-logo","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue","category":"community"},{"hash":"uLI51ek65D2H9ANn1bo-U4Sz9agbfBAuaVWpejfq2cI","pascalName":"FrameDVue","kebabName":"frame-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.d.vue.ts","category":"community","credits":"@arashsheyda <https://github.com/arashsheyda>"},{"hash":"tFoYPh0fXaZR3uXybAqFEOGnQuQsvz-E-Yq-CtrFlIY","pascalName":"Frame","kebabName":"frame","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue","category":"community"},{"hash":"KY4HdN0ICr8Fetf79gWEytJ3i4uNQDJJUcnlxKtKDr4","pascalName":"NuxtDVue","kebabName":"nuxt-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.d.vue.ts","category":"community"},{"hash":"NPQTTXYQ8toXx5OaJ1VlRUUcxy1SNOxg-FoM7C08ZPM","pascalName":"Nuxt","kebabName":"nuxt","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue","category":"community"},{"hash":"P-MXBD4anUhDUGpeI7NDfl81Z2uyyiGPidJS2NHymPA","pascalName":"NuxtSeoDVue","kebabName":"nuxt-seo-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.d.vue.ts","category":"community"},{"hash":"VAHSTZlVcPHzkozocV1iTnwc4-YttdoOkHsYfoSgDZ4","pascalName":"NuxtSeo","kebabName":"nuxt-seo","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue","category":"community"},{"hash":"KY4HdN0ICr8Fetf79gWEytJ3i4uNQDJJUcnlxKtKDr4","pascalName":"PergelDVue","kebabName":"pergel-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.d.vue.ts","category":"community"},{"hash":"8CNn4yU043gQFqO-sZNDPz9GKED-h7ahXJ-61c9ThHM","pascalName":"Pergel","kebabName":"pergel","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue","category":"community"},{"hash":"iV-6cePv5ka0uLfeLNbb5ZtIIggID-5d4v-asMzXuSc","pascalName":"SimpleBlogDVue","kebabName":"simple-blog-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.d.vue.ts","category":"community"},{"hash":"b-Juo-FXQepo6SOCnA478MTAqbXNZuve6-MzHgTKA7s","pascalName":"SimpleBlog","kebabName":"simple-blog","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue","category":"community"},{"hash":"DyqwkTE9c6-GRC7AJjw7vd99zMPNwt5L6VzDDLBZ5S0","pascalName":"UnJsDVue","kebabName":"un-js-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.d.vue.ts","category":"community","credits":"UnJS <https://unjs.io/>"},{"hash":"vRUm5ru-64PEHIGsBby6-vCgLBg7iUJfvFKL6VuCXtI","pascalName":"UnJs","kebabName":"un-js","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue","category":"community"},{"hash":"wV8blmc9tIdHoj1aylO8PlSvEGKMji3BRzVS68KDVA0","pascalName":"WaveDVue","kebabName":"wave-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.d.vue.ts","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"hq07GBU-Yd16ICfETt8SfSxfaYj3qBmDAiQkTcv89nw","pascalName":"Wave","kebabName":"wave","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue","category":"community"},{"hash":"sA3J89dfCZp-NHqCifUrYcOAHzCk9yi5v2VXIYwz2Hs","pascalName":"WithEmojiDVue","kebabName":"with-emoji-d-vue","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.d.vue.ts","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"zSwOodBXcjwS1qvFqGBJqitTEEnrvVfwQYkTeIxNpws","pascalName":"WithEmoji","kebabName":"with-emoji","path":"C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue","category":"community"}];

function normaliseOptions(_options) {
  const options = { ..._options };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = componentNames[0]?.pascalName;
  }
  return options;
}

function useOgImageRuntimeConfig(e) {
  const c = useRuntimeConfig(e);
  return {
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

const satoriRendererInstance = { instance: void 0 };
const chromiumRendererInstance = { instance: void 0 };
async function useSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await Promise.resolve().then(function () { return renderer$3; }).then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await Promise.resolve().then(function () { return renderer$2; }).then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = useSiteConfig(e, {
    resolveRefs: true
  });
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey(path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash$1([
      basePath,
      siteConfig.url,
      hash$1(getQuery$1(e))
    ])
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  const extension = path.split(".").pop();
  if (!extension) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  const query = getQuery$1(e);
  let queryParams = {};
  for (const k in query) {
    const v = String(query[k]);
    if (!v)
      continue;
    if (v.startsWith("{")) {
      try {
        queryParams[k] = JSON.parse(v);
      } catch (error) {
        {
          logger.error(`[Nuxt OG Image] Invalid JSON in ${k} parameter: ${error.message}`);
        }
      }
    } else {
      queryParams[k] = v;
    }
  }
  queryParams = separateProps(queryParams);
  let basePath = withoutTrailingSlash(
    path.replace(`/__og-image__/image`, "").replace(`/__og-image__/static`, "").replace(`/og.${extension}`, "")
  );
  if (queryParams._query && typeof queryParams._query === "object")
    basePath = withQuery(basePath, queryParams._query);
  const isDebugJsonPayload = extension === "json" && runtimeConfig.debug;
  const key = resolvePathCacheKey(e, basePath);
  let options = queryParams.options;
  if (!options) {
    if (!options) {
      const payload = await fetchPathHtmlAndExtractOptions(e, basePath, key);
      if (payload instanceof Error)
        return payload;
      options = payload;
    }
  }
  delete queryParams.options;
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath);
  if (typeof routeRules.ogImage === "undefined" && !options) {
    return createError({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu$1(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  let renderer;
  switch (options.renderer) {
    case "satori":
      renderer = await useSatoriRenderer();
      break;
    case "chromium":
      renderer = await useChromiumRenderer();
      break;
  }
  if (!renderer || renderer.__mock__) {
    throw createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer ${options.renderer} is not enabled.`
    });
  }
  const unocss = await createGenerator({ theme }, {
    presets: [
      presetWind()
    ]
  });
  const ctx = {
    unocss,
    e,
    key,
    renderer,
    isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normaliseOptions(options),
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}
const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function getPayloadFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  return match ? String(match[1]) : null;
}
function extractAndNormaliseOgImageOptions(html) {
  const _payload = getPayloadFromHtml(html);
  let options = false;
  try {
    const payload2 = parse(_payload || "{}");
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value && value !== 0)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
    console.warn("Failed to parse #nuxt-og-image-options", e, options);
  }
  if (options && typeof options?.props?.description === "undefined") {
    const description = html.match(/<meta[^>]+name="description"[^>]*>/)?.[0];
    if (description) {
      const [, content] = description.match(/content="([^"]+)"/) || [];
      if (content && !options.props.description)
        options.props.description = content;
    }
  }
  const payload = decodeObjectHtmlEntities(options || {});
  {
    const socialPreview = {};
    const socialMetaTags = html.match(/<meta[^>]+(property|name)="(twitter|og):([^"]+)"[^>]*>/g);
    if (socialMetaTags) {
      socialMetaTags.forEach((tag) => {
        const [, , type, key] = tag.match(/(property|name)="(twitter|og):([^"]+)"/);
        const value = tag.match(/content="([^"]+)"/)?.[1];
        if (!value)
          return;
        if (!socialPreview[type])
          socialPreview[type] = {};
        socialPreview[type][key] = value;
      });
    }
    payload.socialPreview = socialPreview;
  }
  return payload;
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 500) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  if (res._data) {
    return [res._data, null];
  } else if (res.text) {
    return [await res.text(), null];
  }
  return ["", null];
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  await htmlPayloadCache.getItem(key);
  let _payload = null;
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger.warn(err);
  } else {
    _payload = getPayloadFromHtml(html);
  }
  if (!_payload) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    _payload = getPayloadFromHtml(fallbackHtml);
    if (_payload) {
      html = fallbackHtml;
    }
  }
  if (!html) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  if (!_payload) {
    const payload2 = extractAndNormaliseOgImageOptions(html);
    if (payload2 && typeof payload2 === "object" && payload2.socialPreview?.og?.image) {
      const image = payload2.socialPreview.og.image;
      const p = {
        custom: true,
        url: typeof image === "string" ? image : image
      };
      if (typeof image === "object" && image["image:width"]) {
        p.width = image["image:width"];
      }
      if (typeof image === "object" && image["image:height"]) {
        p.height = image["image:height"];
      }
      return p;
    }
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] HTML response from ${path} is missing the #nuxt-og-image-options script tag. Make sure you have defined an og image for this page.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  return typeof payload === "object" ? payload : createError({
    statusCode: 500,
    statusMessage: "[Nuxt OG Image] Invalid payload type."
  });
}

const _zQbGUBHEYQiSNBI2qdy7lz_JSmRfbNtn4fOb7f5spoE = defineNitroPlugin(async (nitro) => {
  return;
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _RuQyoPaksTVLxD00kHPJDD44GCpeBlYFUsoD5tBbQPw = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _Q2NQYZmA_MxnIYOCCykCqGRVRONsJBTWdCpXWNCLEhE,
_f8I004o8F96eSGjfEJy93XFpXaaykUysJTXJesI8Wu8,
_0pCu0P552Gy4xEGAJl2eNoQSJg2rFMN6Rw63rHrRDU,
_7cYULNymUzqDq0LbXQxcNGQOruPLnpEN0_GgJnOHyQ,
_zQbGUBHEYQiSNBI2qdy7lz_JSmRfbNtn4fOb7f5spoE,
_RuQyoPaksTVLxD00kHPJDD44GCpeBlYFUsoD5tBbQPw
];

const assets$1 = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets$1[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _BAG2CJ = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _v5ApFN = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola$1.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola$1.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola$1.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _DcUmcp = eventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = getNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host;
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _8PLlpA = eventHandler(async (e) => {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const _vsu425 = eventHandler(async (event) => {
  const options = useRuntimeConfig(event).llms;
  const llms = JSON.parse(JSON.stringify(options));
  await useNitroApp().hooks.callHook("llms:generate", event, llms);
  await llmsHooks.callHook("generate", event, llms);
  const document = [
    `# ${llms.title || "Documentation"}`
  ];
  if (llms.description) {
    document.push(`> ${llms.description}`);
  }
  for (const section of llms.sections) {
    document.push(`## ${section.title}`);
    if (section.description) {
      document.push(section.description);
    }
    document.push(
      section.links?.map((link) => {
        return link.description ? `- [${link.title}](${link.href}): ${link.description}` : `- [${link.title}](${link.href})`;
      }).join("\n") || ""
    );
  }
  if (options.notes && options.notes.length) {
    document.push(
      "## Notes",
      (options.notes || []).map((note) => `- ${note}`).join("\n")
    );
  }
  setHeader(event, "Content-Type", "text/plain; charset=utf-8");
  return document.join("\n\n");
});

const _ihZK0W = eventHandler(async (event) => {
  const options = useRuntimeConfig(event).llms;
  const contents = [];
  const llms = JSON.parse(JSON.stringify(options));
  await useNitroApp().hooks.callHook("llms:generate:full", event, llms, contents);
  await llmsHooks.callHook("generate:full", event, llms, contents);
  setHeader(event, "Content-Type", "text/plain; charset=utf-8");
  return contents.join("\n\n");
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const createHeadCore = createUnhead;

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (error) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", error);
    throw error;
  });
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const _XEpplo = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection");
  setHeader(event, "Content-Type", "text/plain");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('file://C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/.nuxt/content/database.compressed.mjs').then((m) => m[collection]);
});

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  const binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const text = await new Response(decompressedStream).text();
  return JSON.parse(text);
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

let db;
function loadDatabaseAdapter(config) {
  const { database, localDatabase } = config;
  if (!db) {
    {
      db = localAdapter(refineDatabaseConfig(localDatabase));
    }
  }
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = {};
const integrityCheckPromise = {};
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity[String(collection)] !== false) {
    checkDatabaseIntegrity[String(collection)] = false;
    integrityCheckPromise[String(collection)] = integrityCheckPromise[String(collection)] || _checkAndImportDatabaseIntegrity(event, collection, checksums[String(collection)], checksumsStructure[String(collection)], config).then((isValid) => {
      checkDatabaseIntegrity[String(collection)] = !isValid;
    }).catch((error) => {
      console.error("Database integrity check failed", error);
      checkDatabaseIntegrity[String(collection)] = true;
      integrityCheckPromise[String(collection)] = null;
    });
  }
  if (integrityCheckPromise[String(collection)]) {
    await integrityCheckPromise[String(collection)];
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, String(collection)).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: "memory" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  return config;
}

const SQL_COMMANDS = /SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|\$/i;
const SQL_COUNT_REGEX = /COUNT\((DISTINCT )?([a-z_]\w+|\*)\)/i;
const SQL_SELECT_REGEX = /^SELECT (.*) FROM (\w+)( WHERE .*)? ORDER BY (["\w,\s]+) (ASC|DESC)( LIMIT \d+)?( OFFSET \d+)?$/;
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query");
  }
  const match = sql.match(SQL_SELECT_REGEX);
  if (!match) {
    throw new Error("Invalid query");
  }
  const [_, select, from, where, orderBy, order, limit, offset] = match;
  const columns = select?.trim().split(", ") || [];
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0]?.match(SQL_COUNT_REGEX) && !columns[0]?.match(/^"[a-z_]\w+"$/i)) {
      throw new Error("Invalid query");
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query");
  }
  if (from !== `_content_${collection}`) {
    throw new Error("Invalid query");
  }
  if (where) {
    if (!where.startsWith(" WHERE (") || !where.endsWith(")")) {
      throw new Error("Invalid query");
    }
    const noString = cleanupQuery(where, { removeString: true });
    if (noString.match(SQL_COMMANDS)) {
      throw new Error("Invalid query");
    }
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query");
  }
  return true;
}
function cleanupQuery(query, options = { removeString: false }) {
  let inString = false;
  let stringFence = "";
  let result = "";
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const prevChar = query[i - 1];
    const nextChar = query[i + 1];
    if (char === "'" || char === '"') {
      if (!options?.removeString) {
        result += char;
        continue;
      }
      if (inString) {
        if (char !== stringFence || nextChar === stringFence || prevChar === stringFence) {
          continue;
        }
        inString = false;
        stringFence = "";
        continue;
      } else {
        inString = true;
        stringFence = char;
        continue;
      }
    }
    if (!inString) {
      if (char === "-" && nextChar === "-") {
        return result;
      }
      if (char === "/" && nextChar === "*") {
        i += 2;
        while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
          i += 1;
        }
        i += 2;
        continue;
      }
      result += char;
    }
  }
  return result;
}

const _1wp0Bn = eventHandler(async (event) => {
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection");
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return loadDatabaseAdapter(conf).all(sql);
});

const _RKKr79 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_P0LvVT = () => Promise.resolve().then(function () { return ____slug__md_get$1; });
const _lazy_mdp1LE = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_WrvQUo = () => Promise.resolve().then(function () { return font$1; });
const _lazy_puU4mN = () => Promise.resolve().then(function () { return debug_json$1; });
const _lazy_VsB0Ge = () => Promise.resolve().then(function () { return image$1; });

const handlers = [
  { route: '', handler: _BAG2CJ, lazy: false, middleware: true, method: undefined },
  { route: '/raw/**:slug.md', handler: _lazy_P0LvVT, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_mdp1LE, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _v5ApFN, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/font/**', handler: _lazy_WrvQUo, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _DcUmcp, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _8PLlpA, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/debug.json', handler: _lazy_puU4mN, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_VsB0Ge, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_VsB0Ge, lazy: true, middleware: false, method: undefined },
  { route: '/llms.txt', handler: _vsu425, lazy: false, middleware: false, method: "get" },
  { route: '/llms-full.txt', handler: _ihZK0W, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/:collection/sql_dump.txt', handler: _XEpplo, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/:collection/query', handler: _1wp0Bn, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _RKKr79, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_mdp1LE, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_mdp1LE, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.absolute{position:absolute}.top-6{top:1.5rem}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.mb-8{margin-bottom:2rem}.inline-block{display:inline-block}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.border{border-width:1px}.border-b-0{border-bottom-width:0}.border-black\\/5{border-color:#0000000d}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-gray-50\\/50{background-color:#f5f5f580}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-12{padding-top:3rem}.text-6xl{font-size:3.75rem;line-height:1}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.hover\\:text-\\[\\#00DC82\\]:hover{--un-text-opacity:1;color:rgb(0 220 130/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.hover\\:underline:hover{text-decoration-line:underline}.underline-offset-3{text-underline-offset:3px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:border-white\\/10{border-color:#ffffff1a}.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:bg-white\\/5{background-color:#ffffff0d}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:right-6{right:1.5rem}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style></head><body class="antialiased bg-white dark:bg-[#020420] dark:text-white flex flex-col font-sans min-h-screen pt-12 px-10 text-black"><h1 class="font-medium mb-4 sm:text-8xl text-6xl">` + escapeHtml(messages.statusCode) + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + escapeHtml(messages.description) + '</p><a href="https://nuxt.com/docs/getting-started/error-handling?utm_source=nuxt-error-dev-page" target="_blank" class="absolute font-medium hover:text-[#00DC82] hover:underline inline-block mx-auto sm:right-6 text-sm top-6 underline-offset-3">Customize this page</a><div class="bg-gray-50/50 border border-b-0 border-black/5 dark:bg-white/5 dark:border-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + escapeHtml(messages.stack) + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const compatibility = {"chromium":"on-demand","satori":"node","resvg":"node","sharp":false,"css-inline":false};

const assets = prefixStorage(useStorage(), "/assets");
async function loadFont({ e, publicStoragePath }, font) {
  const { name, weight } = font;
  if (font.data)
    return font;
  if (font.key && await assets.hasItem(font.key)) {
    let fontData = await assets.getItem(font.key);
    if (fontData instanceof Uint8Array) {
      const decoder = new TextDecoder();
      fontData = decoder.decode(fontData);
    }
    font.data = Buffer.from(String(fontData), "base64");
    return font;
  }
  let data;
  if (font.path) {
    {
      const key = `${publicStoragePath}${font.path.replace("./", ":").replace("/", ":")}`;
      if (await useStorage().hasItem(key))
        data = await useStorage().getItemRaw(key) || void 0;
    }
  } else {
    data = await e.$fetch(`/__og-image__/font/${name}/${weight}.ttf`, {
      responseType: "arrayBuffer",
      query: {
        font
      }
    });
  }
  font.data = data;
  return font;
}

const cssInlineInstance = { instance: void 0 };
const sharpInstance = { instance: void 0 };
const resvgInstance = { instance: void 0 };
const satoriInstance = { instance: void 0 };
async function useResvg() {
  resvgInstance.instance = resvgInstance.instance || await Promise.resolve().then(function () { return node$3; }).then((m) => m.default);
  await resvgInstance.instance.initWasmPromise;
  return resvgInstance.instance.Resvg;
}
async function useSatori() {
  satoriInstance.instance = satoriInstance.instance || await Promise.resolve().then(function () { return node$1; }).then((m) => m.default);
  await satoriInstance.instance.initWasmPromise;
  return satoriInstance.instance.satori;
}
async function useSharp() {
  sharpInstance.instance = sharpInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  return sharpInstance.instance;
}
async function useCssInline() {
  cssInlineInstance.instance = cssInlineInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  await cssInlineInstance.instance.initWasmPromise;
  return cssInlineInstance.instance.cssInline;
}

function walkSatoriTree(e, node, plugins) {
  const promises = [];
  if (!node.props?.children || !Array.isArray(node.props.children))
    return promises;
  if (node.props.children.length === 0) {
    delete node.props.children;
    return promises;
  }
  for (const child of node.props.children || []) {
    if (child) {
      for (const plugin of plugins.flat()) {
        if (plugin.filter(child))
          promises.push(plugin.transform(child, e));
      }
      promises.push(
        ...walkSatoriTree(e, child, plugins)
      );
    }
  }
  return promises;
}
function defineSatoriTransformer(transformer) {
  return transformer;
}

const classes = defineSatoriTransformer([
  {
    filter: (node) => !!node.props?.class && !node.props?.tw,
    transform(node) {
      node.props.tw = node.props.class;
      node.props.tw = node.props.tw.replace(/icon|inline-style/g, "");
    }
  },
  {
    filter: (node) => !!node.props?.style?.display,
    transform(node) {
      if (["inline-block", "inline"].includes(node.props.style.display))
        delete node.props.style.display;
    }
  }
]);

function isEmojiFilter(node) {
  return node.type === "svg" && typeof node.props?.["data-emoji"] !== "undefined";
}
const emojis = defineSatoriTransformer([
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => ["div", "p"].includes(node.type) && Array.isArray(node.props?.children) && node.props.children.some(isEmojiFilter),
    transform: (node) => {
      node.props.style = node.props.style || {};
      node.props.style.display = "flex";
      node.props.style.alignItems = "center";
      node.props.children = node.props.children.map((child) => {
        if (typeof child === "string") {
          return {
            type: "div",
            props: {
              children: child
            }
          };
        }
        if (child.props.class?.includes("emoji"))
          delete child.props.class;
        return child;
      });
    }
  }
]);

const encoding = defineSatoriTransformer([
  // clean up
  {
    filter: (node) => node.props?.["data-v-inspector"],
    transform: (node) => {
      delete node.props["data-v-inspector"];
    }
  },
  {
    filter: (node) => typeof node.props?.children === "string",
    transform: (node) => {
      node.props.children = decodeHtml(node.props.children);
    }
  }
]);

const BLOCK_ELEMENTS = [
  "div",
  "p",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "hr",
  "table",
  "dl"
];
const INLINE_ELEMENTS = [
  "span",
  "a",
  "b",
  "i",
  "u",
  "em",
  "strong",
  "code",
  "abbr",
  "del",
  "ins",
  "mark",
  "sub",
  "sup",
  "small",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5"
];
const flex = defineSatoriTransformer({
  filter: (node) => [...INLINE_ELEMENTS, "div"].includes(node.type) && (Array.isArray(node.props?.children) && node.props?.children.length >= 1) && !node.props?.class?.includes("hidden"),
  transform: (node) => {
    node.props.style = node.props.style || {};
    if (node.props.style?.display && node.props.style?.display !== "flex") {
      return;
    }
    if (node.type === "div") {
      node.props.style.display = "flex";
      if (!node.props?.class?.includes("flex-") && Array.isArray(node.props.children) && node.props.children.some((child) => BLOCK_ELEMENTS.includes(child.type))) {
        node.props.style.flexDirection = "column";
        return;
      }
    }
    let flexWrap = node.props?.class?.includes("flex-wrap");
    if (!node.props?.class?.includes("flex-")) {
      node.props.style.flexWrap = "wrap";
      flexWrap = true;
    }
    if (flexWrap && !node.props?.class?.includes("gap")) {
      node.props.style.gap = "0.2em";
    }
  }
});

async function resolveLocalFilePathImage(publicStoragePath, src) {
  const normalizedSrc = withoutLeadingSlash(
    src.replace("_nuxt/@fs/", "").replace("_nuxt/", "").replace("./", "")
  );
  const key = `${publicStoragePath}:${normalizedSrc}`;
  if (await useStorage().hasItem(key))
    return await useStorage().getItemRaw(key);
}
const imageSrc = defineSatoriTransformer([
  // fix <img src="">
  {
    filter: (node) => node.type === "img" && node.props?.src,
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      let src = node.props.src;
      const isRelative = src.startsWith("/");
      let dimensions;
      let imageBuffer;
      if (src.endsWith(".webp")) {
        logger.warn("Using WebP images with Satori is not supported. Please consider switching image format or use the chromium renderer.", src);
      }
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "");
          imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
        }
        if (!imageBuffer) {
          imageBuffer = await e.$fetch(src, { responseType: "arrayBuffer" }).catch(() => {
          });
          if (!imageBuffer && true) {
            imageBuffer = await e.$fetch(src, {
              baseURL: useNitroOrigin(e),
              responseType: "arrayBuffer"
            }).catch(() => {
            });
          }
        }
        if (imageBuffer) {
          const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
          node.props.src = toBase64Image(buffer);
        }
      } else if (!src.startsWith("data:")) {
        src = decodeHtml(src);
        node.props.src = src;
        imageBuffer = await $fetch(src, {
          responseType: "arrayBuffer"
        }).catch(() => {
        });
      }
      if (imageBuffer && (!node.props.width || !node.props.height)) {
        try {
          const imageSize = sizeOf(imageBuffer);
          dimensions = { width: imageSize.width, height: imageSize.height };
        } catch {
        }
        if (dimensions?.width && dimensions?.height) {
          const naturalAspectRatio = dimensions.width / dimensions.height;
          if (node.props.width && !node.props.height) {
            node.props.height = Math.round(node.props.width / naturalAspectRatio);
          } else if (node.props.height && !node.props.width) {
            node.props.width = Math.round(node.props.height * naturalAspectRatio);
          } else if (!node.props.width && !node.props.height) {
            node.props.width = dimensions.width;
            node.props.height = dimensions.height;
          }
        }
      }
      if (typeof node.props.src === "string" && node.props.src.startsWith("/")) {
        if (imageBuffer) {
          const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
          node.props.src = toBase64Image(buffer);
        } else {
          node.props.src = `${withBase(src, `${useNitroOrigin(e)}`)}?${Date.now()}`;
        }
      }
    }
  },
  // fix style="background-image: url('')"
  {
    filter: (node) => node.props?.style?.backgroundImage?.includes("url("),
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      const backgroundImage = node.props.style.backgroundImage;
      const src = backgroundImage.replace(/^url\(['"]?/, "").replace(/['"]?\)$/, "");
      const isRelative = src?.startsWith("/");
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "/");
          const imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
          if (imageBuffer) {
            const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
            const base64 = toBase64Image(buffer);
            node.props.style.backgroundImage = `url(${base64})`;
          }
        }
      }
    }
  }
]);

const nuxtIcon = defineSatoriTransformer([
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => node.type === "span" && node.props?.class?.includes("iconify"),
    transform: (node, e) => {
      {
        logger.warn(`When using the Nuxt Icon components in \`${e.options.component}\` you must provide \`mode="svg"\` to ensure correct rendering.`);
      }
    }
  },
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => node.type === "svg" && node.props?.class?.includes("iconify"),
    transform: (node) => {
      node.props.class = String(node.props.class).split(" ").filter((c) => !c.startsWith("iconify")).join(" ");
    }
  }
]);

function safeSplit(s) {
  const [key, value] = s.split(":");
  return [String(key || "").trim(), String(value || "").trim()];
}
const unocss = defineSatoriTransformer({
  filter: (node) => !!node.props?.class,
  transform: async (node, ctx) => {
    const classes = node.props.class || "";
    const styles = node.props.style || {};
    const replacedClasses = /* @__PURE__ */ new Set();
    for (const token of classes.split(" ").filter((c) => c.trim())) {
      const parsedToken = await ctx.unocss.parseToken(token);
      if (parsedToken) {
        const inlineStyles = String(parsedToken?.[0]?.[2]).split(";").filter((s) => !!s?.trim());
        const vars = {
          "--color-gray-50": "249 250 251",
          "--color-gray-100": "243 244 246",
          "--color-gray-200": "229 231 235",
          "--color-gray-300": "209 213 219",
          "--color-gray-400": "156 163 175",
          "--color-gray-500": "107 114 128",
          "--color-gray-600": "75 85 99",
          "--color-gray-700": "55 65 81",
          "--color-gray-800": "31 41 55",
          "--color-gray-900": "17 24 39",
          "--color-gray-950": "3 7 18"
        };
        inlineStyles.filter((s) => s.startsWith("--")).forEach((s) => {
          const [key, value] = safeSplit(s);
          vars[key] = value;
        });
        inlineStyles.filter((s) => !s.startsWith("--")).forEach((s) => {
          const [key, value] = safeSplit(s);
          const camelCasedKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
          if (!styles[camelCasedKey])
            styles[camelCasedKey] = value.replace(/var\((.*?)\)/g, (_, k) => vars[k.trim()]);
          if (styles[camelCasedKey] && styles[camelCasedKey].includes("/")) {
            const [rgb, opacity] = styles[camelCasedKey].split("/");
            if (rgb && opacity) {
              if (opacity.trim() === "1)")
                styles[camelCasedKey] = rgb.replace(/(\d+) (\d+) (\d+).*/, (_, r, g, b) => `${r}, ${g}, ${b})`);
              else
                styles[camelCasedKey] = `${rgb.replace("rgb", "rgba").replaceAll(" ", ", ")}${opacity.trim()}`;
            }
          }
        });
        replacedClasses.add(token);
      }
    }
    node.props.class = classes.split(" ").filter((c) => !replacedClasses.has(c)).join(" ");
    node.props.tw = classes.split(" ").filter((c) => !replacedClasses.has(c)).join(" ");
    node.props.style = styles;
  }
});

const charMap = {
  "2049": "exclamation-question-mark",
  "2122": "trade-mark",
  "2139": "information",
  "2194": "left-right-arrow",
  "2195": "up-down-arrow",
  "2196": "up-left-arrow",
  "2197": "up-right-arrow",
  "2198": "down-right-arrow",
  "2199": "down-left-arrow",
  "2328": "keyboard",
  "2600": "sun",
  "2601": "cloud",
  "2602": "umbrella",
  "2603": "snowman",
  "2604": "comet",
  "2611": "check-box-with-check",
  "2614": "umbrella-with-rain-drops",
  "2615": "hot-beverage",
  "2618": "shamrock",
  "2620": "skull-and-crossbones",
  "2622": "radioactive",
  "2623": "biohazard",
  "2626": "orthodox-cross",
  "2638": "wheel-of-dharma",
  "2639": "frowning-face",
  "2640": "female-sign",
  "2642": "male-sign",
  "2648": "aries",
  "2649": "taurus",
  "2650": "sagittarius",
  "2651": "capricorn",
  "2652": "aquarius",
  "2653": "pisces",
  "2660": "spade-suit",
  "2663": "club-suit",
  "2665": "heart-suit",
  "2666": "diamond-suit",
  "2668": "hot-springs",
  "2692": "hammer-and-pick",
  "2693": "anchor",
  "2694": "crossed-swords",
  "2695": "medical-symbol",
  "2696": "balance-scale",
  "2697": "alembic",
  "2699": "gear",
  "2702": "scissors",
  "2705": "check-mark-button",
  "2708": "airplane",
  "2709": "envelope",
  "2712": "black-nib",
  "2714": "check-mark",
  "2716": "multiply",
  "2721": "star-of-david",
  "2728": "sparkles",
  "2733": "eight-spoked-asterisk",
  "2734": "eight-pointed-star",
  "2744": "snowflake",
  "2747": "sparkle",
  "2753": "red-question-mark",
  "2754": "white-question-mark",
  "2755": "white-exclamation-mark",
  "2757": "red-exclamation-mark",
  "2763": "heart-exclamation",
  "2764": "red-heart",
  "2795": "plus",
  "2796": "minus",
  "2797": "divide",
  "2934": "right-arrow-curving-up",
  "2935": "right-arrow-curving-down",
  "3030": "wavy-dash",
  "3297": "japanese-congratulations-button",
  "3299": "japanese-secret-button",
  "1f947": "1st-place-medal",
  "1f948": "2nd-place-medal",
  "1f949": "3rd-place-medal",
  "1f170": "a-button-blood-type",
  "1f18e": "ab-button-blood-type",
  "1f9ee": "abacus",
  "1fa97": "accordion",
  "1fa79": "adhesive-bandage",
  "1f39f": "admission-tickets",
  "1f6a1": "aerial-tramway",
  "1f6ec": "airplane-arrival",
  "1f6eb": "airplane-departure",
  "23f0": "alarm-clock",
  "1f47d": "alien",
  "1f47e": "alien-monster",
  "1f691": "ambulance",
  "1f3c8": "american-football",
  "1f3fa": "amphora",
  "1fac0": "anatomical-heart",
  "1f4a2": "anger-symbol",
  "1f620": "angry-face",
  "1f47f": "angry-face-with-horns",
  "1f627": "anguished-face",
  "1f41c": "ant",
  "1f4f6": "antenna-bars",
  "1f630": "anxious-face-with-sweat",
  "1f69b": "articulated-lorry",
  "1f9d1-200d-1f3a8": "artist",
  "1f9d1-1f3ff-200d-1f3a8": "artist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3a8": "artist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3a8": "artist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3a8": "artist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3a8": "artist-medium-skin-tone",
  "1f3a8": "artist-palette",
  "1f632": "astonished-face",
  "1f9d1-200d-1f680": "astronaut",
  "1f9d1-1f3ff-200d-1f680": "astronaut-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f680": "astronaut-light-skin-tone",
  "1f9d1-1f3fe-200d-1f680": "astronaut-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f680": "astronaut-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f680": "astronaut-medium-skin-tone",
  "1f3e7": "atm-sign",
  "269b": "atom-symbol",
  "1f6fa": "auto-rickshaw",
  "1f697": "automobile",
  "1f951": "avocado",
  "1fa93": "axe",
  "1f171": "b-button-blood-type",
  "1f476": "baby",
  "1f47c": "baby-angel",
  "1f47c-1f3ff": "baby-angel-dark-skin-tone",
  "1f47c-1f3fb": "baby-angel-light-skin-tone",
  "1f47c-1f3fe": "baby-angel-medium-dark-skin-tone",
  "1f47c-1f3fc": "baby-angel-medium-light-skin-tone",
  "1f47c-1f3fd": "baby-angel-medium-skin-tone",
  "1f37c": "baby-bottle",
  "1f424": "baby-chick",
  "1f476-1f3ff": "baby-dark-skin-tone",
  "1f476-1f3fb": "baby-light-skin-tone",
  "1f476-1f3fe": "baby-medium-dark-skin-tone",
  "1f476-1f3fc": "baby-medium-light-skin-tone",
  "1f476-1f3fd": "baby-medium-skin-tone",
  "1f6bc": "baby-symbol",
  "1f519": "back-arrow",
  "1f447": "backhand-index-pointing-down",
  "1f447-1f3ff": "backhand-index-pointing-down-dark-skin-tone",
  "1f447-1f3fb": "backhand-index-pointing-down-light-skin-tone",
  "1f447-1f3fe": "backhand-index-pointing-down-medium-dark-skin-tone",
  "1f447-1f3fc": "backhand-index-pointing-down-medium-light-skin-tone",
  "1f447-1f3fd": "backhand-index-pointing-down-medium-skin-tone",
  "1f448": "backhand-index-pointing-left",
  "1f448-1f3ff": "backhand-index-pointing-left-dark-skin-tone",
  "1f448-1f3fb": "backhand-index-pointing-left-light-skin-tone",
  "1f448-1f3fe": "backhand-index-pointing-left-medium-dark-skin-tone",
  "1f448-1f3fc": "backhand-index-pointing-left-medium-light-skin-tone",
  "1f448-1f3fd": "backhand-index-pointing-left-medium-skin-tone",
  "1f449": "backhand-index-pointing-right",
  "1f449-1f3ff": "backhand-index-pointing-right-dark-skin-tone",
  "1f449-1f3fb": "backhand-index-pointing-right-light-skin-tone",
  "1f449-1f3fe": "backhand-index-pointing-right-medium-dark-skin-tone",
  "1f449-1f3fc": "backhand-index-pointing-right-medium-light-skin-tone",
  "1f449-1f3fd": "backhand-index-pointing-right-medium-skin-tone",
  "1f446": "backhand-index-pointing-up",
  "1f446-1f3ff": "backhand-index-pointing-up-dark-skin-tone",
  "1f446-1f3fb": "backhand-index-pointing-up-light-skin-tone",
  "1f446-1f3fe": "backhand-index-pointing-up-medium-dark-skin-tone",
  "1f446-1f3fc": "backhand-index-pointing-up-medium-light-skin-tone",
  "1f446-1f3fd": "backhand-index-pointing-up-medium-skin-tone",
  "1f392": "backpack",
  "1f953": "bacon",
  "1f9a1": "badger",
  "1f3f8": "badminton",
  "1f96f": "bagel",
  "1f6c4": "baggage-claim",
  "1f956": "baguette-bread",
  "1fa70": "ballet-shoes",
  "1f388": "balloon",
  "1f5f3": "ballot-box-with-ballot",
  "1f34c": "banana",
  "1fa95": "banjo",
  "1f3e6": "bank",
  "1f4ca": "bar-chart",
  "1f488": "barber-pole",
  "26be": "baseball",
  "1f9fa": "basket",
  "1f3c0": "basketball",
  "1f987": "bat",
  "1f6c1": "bathtub",
  "1f50b": "battery",
  "1f3d6": "beach-with-umbrella",
  "1f601": "beaming-face-with-smiling-eyes",
  "1fad8": "beans",
  "1f43b": "bear",
  "1f493": "beating-heart",
  "1f9ab": "beaver",
  "1f6cf": "bed",
  "1f37a": "beer-mug",
  "1fab2": "beetle",
  "1f514": "bell",
  "1fad1": "bell-pepper",
  "1f515": "bell-with-slash",
  "1f6ce": "bellhop-bell",
  "1f371": "bento-box",
  "1f9c3": "beverage-box",
  "1f6b2": "bicycle",
  "1f459": "bikini",
  "1f9e2": "billed-cap",
  "1f426": "bird",
  "1f382": "birthday-cake",
  "1f9ac": "bison",
  "1fae6": "biting-lip",
  "1f426-200d-2b1b": "black-bird",
  "1f408-200d-2b1b": "black-cat",
  "26ab": "black-circle",
  "1f3f4": "black-flag",
  "1f5a4": "black-heart",
  "2b1b": "black-large-square",
  "25fe": "black-medium-small-square",
  "25fc": "black-medium-square",
  "25aa": "black-small-square",
  "1f532": "black-square-button",
  "1f33c": "blossom",
  "1f421": "blowfish",
  "1f4d8": "blue-book",
  "1f535": "blue-circle",
  "1f499": "blue-heart",
  "1f7e6": "blue-square",
  "1fad0": "blueberries",
  "1f417": "boar",
  "1f4a3": "bomb",
  "1f9b4": "bone",
  "1f516": "bookmark",
  "1f4d1": "bookmark-tabs",
  "1f4da": "books",
  "1fa83": "boomerang",
  "1f37e": "bottle-with-popping-cork",
  "1f490": "bouquet",
  "1f3f9": "bow-and-arrow",
  "1f963": "bowl-with-spoon",
  "1f3b3": "bowling",
  "1f94a": "boxing-glove",
  "1f466": "boy",
  "1f466-1f3ff": "boy-dark-skin-tone",
  "1f466-1f3fb": "boy-light-skin-tone",
  "1f466-1f3fe": "boy-medium-dark-skin-tone",
  "1f466-1f3fc": "boy-medium-light-skin-tone",
  "1f466-1f3fd": "boy-medium-skin-tone",
  "1f9e0": "brain",
  "1f35e": "bread",
  "1f931": "breast-feeding",
  "1f931-1f3ff": "breast-feeding-dark-skin-tone",
  "1f931-1f3fb": "breast-feeding-light-skin-tone",
  "1f931-1f3fe": "breast-feeding-medium-dark-skin-tone",
  "1f931-1f3fc": "breast-feeding-medium-light-skin-tone",
  "1f931-1f3fd": "breast-feeding-medium-skin-tone",
  "1f9f1": "brick",
  "1f309": "bridge-at-night",
  "1f4bc": "briefcase",
  "1fa72": "briefs",
  "1f506": "bright-button",
  "1f966": "broccoli",
  "26d3-200d-1f4a5": "broken-chain",
  "1f494": "broken-heart",
  "1f9f9": "broom",
  "1f7e4": "brown-circle",
  "1f90e": "brown-heart",
  "1f344-200d-1f7eb": "brown-mushroom",
  "1f7eb": "brown-square",
  "1f9cb": "bubble-tea",
  "1fae7": "bubbles",
  "1faa3": "bucket",
  "1f41b": "bug",
  "1f3d7": "building-construction",
  "1f685": "bullet-train",
  "1f3af": "bullseye",
  "1f32f": "burrito",
  "1f68c": "bus",
  "1f68f": "bus-stop",
  "1f464": "bust-in-silhouette",
  "1f465": "busts-in-silhouette",
  "1f9c8": "butter",
  "1f98b": "butterfly",
  "1f335": "cactus",
  "1f4c5": "calendar",
  "1f919": "call-me-hand",
  "1f919-1f3ff": "call-me-hand-dark-skin-tone",
  "1f919-1f3fb": "call-me-hand-light-skin-tone",
  "1f919-1f3fe": "call-me-hand-medium-dark-skin-tone",
  "1f919-1f3fc": "call-me-hand-medium-light-skin-tone",
  "1f919-1f3fd": "call-me-hand-medium-skin-tone",
  "1f42a": "camel",
  "1f4f7": "camera",
  "1f4f8": "camera-with-flash",
  "1f3d5": "camping",
  "264b": "cancer",
  "1f56f": "candle",
  "1f36c": "candy",
  "1f96b": "canned-food",
  "1f6f6": "canoe",
  "1f5c3": "card-file-box",
  "1f4c7": "card-index",
  "1f5c2": "card-index-dividers",
  "1f3a0": "carousel-horse",
  "1f38f": "carp-streamer",
  "1fa9a": "carpentry-saw",
  "1f955": "carrot",
  "1f3f0": "castle",
  "1f408": "cat",
  "1f431": "cat-face",
  "1f639": "cat-with-tears-of-joy",
  "1f63c": "cat-with-wry-smile",
  "26d3": "chains",
  "1fa91": "chair",
  "1f4c9": "chart-decreasing",
  "1f4c8": "chart-increasing",
  "1f4b9": "chart-increasing-with-yen",
  "1f9c0": "cheese-wedge",
  "1f3c1": "chequered-flag",
  "1f352": "cherries",
  "1f338": "cherry-blossom",
  "265f": "chess-pawn",
  "1f330": "chestnut",
  "1f414": "chicken",
  "1f9d2": "child",
  "1f9d2-1f3ff": "child-dark-skin-tone",
  "1f9d2-1f3fb": "child-light-skin-tone",
  "1f9d2-1f3fe": "child-medium-dark-skin-tone",
  "1f9d2-1f3fc": "child-medium-light-skin-tone",
  "1f9d2-1f3fd": "child-medium-skin-tone",
  "1f6b8": "children-crossing",
  "1f43f": "chipmunk",
  "1f36b": "chocolate-bar",
  "1f962": "chopsticks",
  "1f384": "christmas-tree",
  "26ea": "church",
  "1f6ac": "cigarette",
  "1f3a6": "cinema",
  "24c2": "circled-m",
  "1f3aa": "circus-tent",
  "1f3d9": "cityscape",
  "1f306": "cityscape-at-dusk",
  "1f191": "cl-button",
  "1f5dc": "clamp",
  "1f3ac": "clapper-board",
  "1f44f": "clapping-hands",
  "1f44f-1f3ff": "clapping-hands-dark-skin-tone",
  "1f44f-1f3fb": "clapping-hands-light-skin-tone",
  "1f44f-1f3fe": "clapping-hands-medium-dark-skin-tone",
  "1f44f-1f3fc": "clapping-hands-medium-light-skin-tone",
  "1f44f-1f3fd": "clapping-hands-medium-skin-tone",
  "1f3db": "classical-building",
  "1f37b": "clinking-beer-mugs",
  "1f942": "clinking-glasses",
  "1f4cb": "clipboard",
  "1f503": "clockwise-vertical-arrows",
  "1f4d5": "closed-book",
  "1f4ea": "closed-mailbox-with-lowered-flag",
  "1f4eb": "closed-mailbox-with-raised-flag",
  "1f302": "closed-umbrella",
  "1f329": "cloud-with-lightning",
  "26c8": "cloud-with-lightning-and-rain",
  "1f327": "cloud-with-rain",
  "1f328": "cloud-with-snow",
  "1f921": "clown-face",
  "1f45d": "clutch-bag",
  "1f9e5": "coat",
  "1fab3": "cockroach",
  "1f378": "cocktail-glass",
  "1f965": "coconut",
  "26b0": "coffin",
  "1fa99": "coin",
  "1f976": "cold-face",
  "1f4a5": "collision",
  "1f9ed": "compass",
  "1f4bd": "computer-disk",
  "1f5b1": "computer-mouse",
  "1f38a": "confetti-ball",
  "1f616": "confounded-face",
  "1f615": "confused-face",
  "1f6a7": "construction",
  "1f477": "construction-worker",
  "1f477-1f3ff": "construction-worker-dark-skin-tone",
  "1f477-1f3fb": "construction-worker-light-skin-tone",
  "1f477-1f3fe": "construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc": "construction-worker-medium-light-skin-tone",
  "1f477-1f3fd": "construction-worker-medium-skin-tone",
  "1f39b": "control-knobs",
  "1f3ea": "convenience-store",
  "1f9d1-200d-1f373": "cook",
  "1f9d1-1f3ff-200d-1f373": "cook-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f373": "cook-light-skin-tone",
  "1f9d1-1f3fe-200d-1f373": "cook-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f373": "cook-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f373": "cook-medium-skin-tone",
  "1f35a": "cooked-rice",
  "1f36a": "cookie",
  "1f373": "cooking",
  "1f192": "cool-button",
  "00a9": "copyright",
  "1fab8": "coral",
  "1f6cb": "couch-and-lamp",
  "1f504": "counterclockwise-arrows-button",
  "1f491": "couple-with-heart",
  "1f491-1f3ff": "couple-with-heart-dark-skin-tone",
  "1f491-1f3fb": "couple-with-heart-light-skin-tone",
  "1f468-200d-2764-200d-1f468": "couple-with-heart-man-man",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-light-skin-tone-medium-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-light-skin-tone-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-skin-tone-medium-light-skin-tone",
  "1f491-1f3fe": "couple-with-heart-medium-dark-skin-tone",
  "1f491-1f3fc": "couple-with-heart-medium-light-skin-tone",
  "1f491-1f3fd": "couple-with-heart-medium-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f468": "couple-with-heart-woman-man",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f469": "couple-with-heart-woman-woman",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-skin-tone-medium-light-skin-tone",
  "1f404": "cow",
  "1f42e": "cow-face",
  "1f920": "cowboy-hat-face",
  "1f980": "crab",
  "1f58d": "crayon",
  "1f4b3": "credit-card",
  "1f319": "crescent-moon",
  "1f997": "cricket",
  "1f3cf": "cricket-game",
  "1f40a": "crocodile",
  "1f950": "croissant",
  "274c": "cross-mark",
  "274e": "cross-mark-button",
  "1f91e": "crossed-fingers",
  "1f91e-1f3ff": "crossed-fingers-dark-skin-tone",
  "1f91e-1f3fb": "crossed-fingers-light-skin-tone",
  "1f91e-1f3fe": "crossed-fingers-medium-dark-skin-tone",
  "1f91e-1f3fc": "crossed-fingers-medium-light-skin-tone",
  "1f91e-1f3fd": "crossed-fingers-medium-skin-tone",
  "1f38c": "crossed-flags",
  "1f451": "crown",
  "1fa7c": "crutch",
  "1f63f": "crying-cat",
  "1f622": "crying-face",
  "1f52e": "crystal-ball",
  "1f952": "cucumber",
  "1f964": "cup-with-straw",
  "1f9c1": "cupcake",
  "1f94c": "curling-stone",
  "27b0": "curly-loop",
  "1f4b1": "currency-exchange",
  "1f35b": "curry-rice",
  "1f36e": "custard",
  "1f6c3": "customs",
  "1f969": "cut-of-meat",
  "1f300": "cyclone",
  "1f5e1": "dagger",
  "1f361": "dango",
  "1f4a8": "dashing-away",
  "1f9cf-200d-2642": "deaf-man",
  "1f9cf-1f3ff-200d-2642": "deaf-man-dark-skin-tone",
  "1f9cf-1f3fb-200d-2642": "deaf-man-light-skin-tone",
  "1f9cf-1f3fe-200d-2642": "deaf-man-medium-dark-skin-tone",
  "1f9cf-1f3fc-200d-2642": "deaf-man-medium-light-skin-tone",
  "1f9cf-1f3fd-200d-2642": "deaf-man-medium-skin-tone",
  "1f9cf": "deaf-person",
  "1f9cf-1f3ff": "deaf-person-dark-skin-tone",
  "1f9cf-1f3fb": "deaf-person-light-skin-tone",
  "1f9cf-1f3fe": "deaf-person-medium-dark-skin-tone",
  "1f9cf-1f3fc": "deaf-person-medium-light-skin-tone",
  "1f9cf-1f3fd": "deaf-person-medium-skin-tone",
  "1f9cf-200d-2640": "deaf-woman",
  "1f9cf-1f3ff-200d-2640": "deaf-woman-dark-skin-tone",
  "1f9cf-1f3fb-200d-2640": "deaf-woman-light-skin-tone",
  "1f9cf-1f3fe-200d-2640": "deaf-woman-medium-dark-skin-tone",
  "1f9cf-1f3fc-200d-2640": "deaf-woman-medium-light-skin-tone",
  "1f9cf-1f3fd-200d-2640": "deaf-woman-medium-skin-tone",
  "1f333": "deciduous-tree",
  "1f98c": "deer",
  "1f69a": "delivery-truck",
  "1f3ec": "department-store",
  "1f3da": "derelict-house",
  "1f3dc": "desert",
  "1f3dd": "desert-island",
  "1f5a5": "desktop-computer",
  "1f575": "detective",
  "1f575-1f3ff": "detective-dark-skin-tone",
  "1f575-1f3fb": "detective-light-skin-tone",
  "1f575-1f3fe": "detective-medium-dark-skin-tone",
  "1f575-1f3fc": "detective-medium-light-skin-tone",
  "1f575-1f3fd": "detective-medium-skin-tone",
  "1f4a0": "diamond-with-a-dot",
  "1f505": "dim-button",
  "1f61e": "disappointed-face",
  "1f978": "disguised-face",
  "1f93f": "diving-mask",
  "1fa94": "diya-lamp",
  "1f4ab": "dizzy",
  "1f9ec": "dna",
  "1f9a4": "dodo",
  "1f415": "dog",
  "1f436": "dog-face",
  "1f4b5": "dollar-banknote",
  "1f42c": "dolphin",
  "1facf": "donkey",
  "1f6aa": "door",
  "1fae5": "dotted-line-face",
  "1f52f": "dotted-six-pointed-star",
  "27bf": "double-curly-loop",
  "203c": "double-exclamation-mark",
  "1f369": "doughnut",
  "1f54a": "dove",
  "2b07": "down-arrow",
  "1f613": "downcast-face-with-sweat",
  "1f53d": "downwards-button",
  "1f409": "dragon",
  "1f432": "dragon-face",
  "1f457": "dress",
  "1f924": "drooling-face",
  "1fa78": "drop-of-blood",
  "1f4a7": "droplet",
  "1f941": "drum",
  "1f986": "duck",
  "1f95f": "dumpling",
  "1f4c0": "dvd",
  "1f4e7": "e-mail",
  "1f985": "eagle",
  "1f442": "ear",
  "1f442-1f3ff": "ear-dark-skin-tone",
  "1f442-1f3fb": "ear-light-skin-tone",
  "1f442-1f3fe": "ear-medium-dark-skin-tone",
  "1f442-1f3fc": "ear-medium-light-skin-tone",
  "1f442-1f3fd": "ear-medium-skin-tone",
  "1f33d": "ear-of-corn",
  "1f9bb": "ear-with-hearing-aid",
  "1f9bb-1f3ff": "ear-with-hearing-aid-dark-skin-tone",
  "1f9bb-1f3fb": "ear-with-hearing-aid-light-skin-tone",
  "1f9bb-1f3fe": "ear-with-hearing-aid-medium-dark-skin-tone",
  "1f9bb-1f3fc": "ear-with-hearing-aid-medium-light-skin-tone",
  "1f9bb-1f3fd": "ear-with-hearing-aid-medium-skin-tone",
  "1f95a": "egg",
  "1f346": "eggplant",
  "1f557": "eight-oclock",
  "1f563": "eight-thirty",
  "23cf": "eject-button",
  "1f50c": "electric-plug",
  "1f418": "elephant",
  "1f6d7": "elevator",
  "1f55a": "eleven-oclock",
  "1f566": "eleven-thirty",
  "1f9dd": "elf",
  "1f9dd-1f3ff": "elf-dark-skin-tone",
  "1f9dd-1f3fb": "elf-light-skin-tone",
  "1f9dd-1f3fe": "elf-medium-dark-skin-tone",
  "1f9dd-1f3fc": "elf-medium-light-skin-tone",
  "1f9dd-1f3fd": "elf-medium-skin-tone",
  "1fab9": "empty-nest",
  "1f51a": "end-arrow",
  "1f621": "enraged-face",
  "1f4e9": "envelope-with-arrow",
  "1f4b6": "euro-banknote",
  "1f332": "evergreen-tree",
  "1f411": "ewe",
  "1f92f": "exploding-head",
  "1f611": "expressionless-face",
  "1f441": "eye",
  "1f441-200d-1f5e8": "eye-in-speech-bubble",
  "1f440": "eyes",
  "1f618": "face-blowing-a-kiss",
  "1f62e-200d-1f4a8": "face-exhaling",
  "1f979": "face-holding-back-tears",
  "1f636-200d-1f32b": "face-in-clouds",
  "1f60b": "face-savoring-food",
  "1f631": "face-screaming-in-fear",
  "1f92e": "face-vomiting",
  "1f635": "face-with-crossed-out-eyes",
  "1fae4": "face-with-diagonal-mouth",
  "1f92d": "face-with-hand-over-mouth",
  "1f915": "face-with-head-bandage",
  "1f637": "face-with-medical-mask",
  "1f9d0": "face-with-monocle",
  "1fae2": "face-with-open-eyes-and-hand-over-mouth",
  "1f62e": "face-with-open-mouth",
  "1fae3": "face-with-peeking-eye",
  "1f928": "face-with-raised-eyebrow",
  "1f644": "face-with-rolling-eyes",
  "1f635-200d-1f4ab": "face-with-spiral-eyes",
  "1f624": "face-with-steam-from-nose",
  "1f92c": "face-with-symbols-on-mouth",
  "1f602": "face-with-tears-of-joy",
  "1f912": "face-with-thermometer",
  "1f61b": "face-with-tongue",
  "1f636": "face-without-mouth",
  "1f3ed": "factory",
  "1f9d1-200d-1f3ed": "factory-worker",
  "1f9d1-1f3ff-200d-1f3ed": "factory-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3ed": "factory-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3ed": "factory-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3ed": "factory-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3ed": "factory-worker-medium-skin-tone",
  "1f9da": "fairy",
  "1f9da-1f3ff": "fairy-dark-skin-tone",
  "1f9da-1f3fb": "fairy-light-skin-tone",
  "1f9da-1f3fe": "fairy-medium-dark-skin-tone",
  "1f9da-1f3fc": "fairy-medium-light-skin-tone",
  "1f9da-1f3fd": "fairy-medium-skin-tone",
  "1f9c6": "falafel",
  "1f342": "fallen-leaf",
  "1f46a": "family",
  "1f9d1-200d-1f9d1-200d-1f9d2": "family-adult-adult-child",
  "1f9d1-200d-1f9d1-200d-1f9d2-200d-1f9d2": "family-adult-adult-child-child",
  "1f9d1-200d-1f9d2": "family-adult-child",
  "1f9d1-200d-1f9d2-200d-1f9d2": "family-adult-child-child",
  "1f468-200d-1f466": "family-man-boy",
  "1f468-200d-1f466-200d-1f466": "family-man-boy-boy",
  "1f468-200d-1f467": "family-man-girl",
  "1f468-200d-1f467-200d-1f466": "family-man-girl-boy",
  "1f468-200d-1f467-200d-1f467": "family-man-girl-girl",
  "1f468-200d-1f468-200d-1f466": "family-man-man-boy",
  "1f468-200d-1f468-200d-1f466-200d-1f466": "family-man-man-boy-boy",
  "1f468-200d-1f468-200d-1f467": "family-man-man-girl",
  "1f468-200d-1f468-200d-1f467-200d-1f466": "family-man-man-girl-boy",
  "1f468-200d-1f468-200d-1f467-200d-1f467": "family-man-man-girl-girl",
  "1f468-200d-1f469-200d-1f466": "family-man-woman-boy",
  "1f468-200d-1f469-200d-1f466-200d-1f466": "family-man-woman-boy-boy",
  "1f468-200d-1f469-200d-1f467": "family-man-woman-girl",
  "1f468-200d-1f469-200d-1f467-200d-1f466": "family-man-woman-girl-boy",
  "1f468-200d-1f469-200d-1f467-200d-1f467": "family-man-woman-girl-girl",
  "1f469-200d-1f466": "family-woman-boy",
  "1f469-200d-1f466-200d-1f466": "family-woman-boy-boy",
  "1f469-200d-1f467": "family-woman-girl",
  "1f469-200d-1f467-200d-1f466": "family-woman-girl-boy",
  "1f469-200d-1f467-200d-1f467": "family-woman-girl-girl",
  "1f469-200d-1f469-200d-1f466": "family-woman-woman-boy",
  "1f469-200d-1f469-200d-1f466-200d-1f466": "family-woman-woman-boy-boy",
  "1f469-200d-1f469-200d-1f467": "family-woman-woman-girl",
  "1f469-200d-1f469-200d-1f467-200d-1f466": "family-woman-woman-girl-boy",
  "1f469-200d-1f469-200d-1f467-200d-1f467": "family-woman-woman-girl-girl",
  "1f9d1-200d-1f33e": "farmer",
  "1f9d1-1f3ff-200d-1f33e": "farmer-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f33e": "farmer-light-skin-tone",
  "1f9d1-1f3fe-200d-1f33e": "farmer-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f33e": "farmer-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f33e": "farmer-medium-skin-tone",
  "23ec": "fast-down-button",
  "23e9": "fast-forward-button",
  "23ea": "fast-reverse-button",
  "23eb": "fast-up-button",
  "1f4e0": "fax-machine",
  "1f628": "fearful-face",
  "1fab6": "feather",
  "1f3a1": "ferris-wheel",
  "26f4": "ferry",
  "1f3d1": "field-hockey",
  "1f5c4": "file-cabinet",
  "1f4c1": "file-folder",
  "1f39e": "film-frames",
  "1f4fd": "film-projector",
  "1f525": "fire",
  "1f692": "fire-engine",
  "1f9ef": "fire-extinguisher",
  "1f9e8": "firecracker",
  "1f9d1-200d-1f692": "firefighter",
  "1f9d1-1f3ff-200d-1f692": "firefighter-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f692": "firefighter-light-skin-tone",
  "1f9d1-1f3fe-200d-1f692": "firefighter-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f692": "firefighter-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f692": "firefighter-medium-skin-tone",
  "1f386": "fireworks",
  "1f313": "first-quarter-moon",
  "1f31b": "first-quarter-moon-face",
  "1f41f": "fish",
  "1f365": "fish-cake-with-swirl",
  "1f3a3": "fishing-pole",
  "1f554": "five-oclock",
  "1f560": "five-thirty",
  "26f3": "flag-in-hole",
  "1f9a9": "flamingo",
  "1f526": "flashlight",
  "1f97f": "flat-shoe",
  "1fad3": "flatbread",
  "269c": "fleur-de-lis",
  "1f4aa": "flexed-biceps",
  "1f4aa-1f3ff": "flexed-biceps-dark-skin-tone",
  "1f4aa-1f3fb": "flexed-biceps-light-skin-tone",
  "1f4aa-1f3fe": "flexed-biceps-medium-dark-skin-tone",
  "1f4aa-1f3fc": "flexed-biceps-medium-light-skin-tone",
  "1f4aa-1f3fd": "flexed-biceps-medium-skin-tone",
  "1f4be": "floppy-disk",
  "1f3b4": "flower-playing-cards",
  "1f633": "flushed-face",
  "1fa88": "flute",
  "1fab0": "fly",
  "1f94f": "flying-disc",
  "1f6f8": "flying-saucer",
  "1f32b": "fog",
  "1f301": "foggy",
  "1f64f": "folded-hands",
  "1f64f-1f3ff": "folded-hands-dark-skin-tone",
  "1f64f-1f3fb": "folded-hands-light-skin-tone",
  "1f64f-1f3fe": "folded-hands-medium-dark-skin-tone",
  "1f64f-1f3fc": "folded-hands-medium-light-skin-tone",
  "1f64f-1f3fd": "folded-hands-medium-skin-tone",
  "1faad": "folding-hand-fan",
  "1fad5": "fondue",
  "1f9b6": "foot",
  "1f9b6-1f3ff": "foot-dark-skin-tone",
  "1f9b6-1f3fb": "foot-light-skin-tone",
  "1f9b6-1f3fe": "foot-medium-dark-skin-tone",
  "1f9b6-1f3fc": "foot-medium-light-skin-tone",
  "1f9b6-1f3fd": "foot-medium-skin-tone",
  "1f463": "footprints",
  "1f374": "fork-and-knife",
  "1f37d": "fork-and-knife-with-plate",
  "1f960": "fortune-cookie",
  "26f2": "fountain",
  "1f58b": "fountain-pen",
  "1f340": "four-leaf-clover",
  "1f553": "four-oclock",
  "1f55f": "four-thirty",
  "1f98a": "fox",
  "1f5bc": "framed-picture",
  "1f193": "free-button",
  "1f35f": "french-fries",
  "1f364": "fried-shrimp",
  "1f438": "frog",
  "1f425": "front-facing-baby-chick",
  "1f626": "frowning-face-with-open-mouth",
  "26fd": "fuel-pump",
  "1f315": "full-moon",
  "1f31d": "full-moon-face",
  "26b1": "funeral-urn",
  "1f3b2": "game-die",
  "1f9c4": "garlic",
  "1f48e": "gem-stone",
  "264a": "gemini",
  "1f9de": "genie",
  "1f47b": "ghost",
  "1fada": "ginger-root",
  "1f992": "giraffe",
  "1f467": "girl",
  "1f467-1f3ff": "girl-dark-skin-tone",
  "1f467-1f3fb": "girl-light-skin-tone",
  "1f467-1f3fe": "girl-medium-dark-skin-tone",
  "1f467-1f3fc": "girl-medium-light-skin-tone",
  "1f467-1f3fd": "girl-medium-skin-tone",
  "1f95b": "glass-of-milk",
  "1f453": "glasses",
  "1f30e": "globe-showing-americas",
  "1f30f": "globe-showing-asia-australia",
  "1f30d": "globe-showing-europe-africa",
  "1f310": "globe-with-meridians",
  "1f9e4": "gloves",
  "1f31f": "glowing-star",
  "1f945": "goal-net",
  "1f410": "goat",
  "1f47a": "goblin",
  "1f97d": "goggles",
  "1fabf": "goose",
  "1f98d": "gorilla",
  "1f393": "graduation-cap",
  "1f347": "grapes",
  "1f34f": "green-apple",
  "1f4d7": "green-book",
  "1f7e2": "green-circle",
  "1f49a": "green-heart",
  "1f957": "green-salad",
  "1f7e9": "green-square",
  "1fa76": "grey-heart",
  "1f62c": "grimacing-face",
  "1f63a": "grinning-cat",
  "1f638": "grinning-cat-with-smiling-eyes",
  "1f600": "grinning-face",
  "1f603": "grinning-face-with-big-eyes",
  "1f604": "grinning-face-with-smiling-eyes",
  "1f605": "grinning-face-with-sweat",
  "1f606": "grinning-squinting-face",
  "1f497": "growing-heart",
  "1f482": "guard",
  "1f482-1f3ff": "guard-dark-skin-tone",
  "1f482-1f3fb": "guard-light-skin-tone",
  "1f482-1f3fe": "guard-medium-dark-skin-tone",
  "1f482-1f3fc": "guard-medium-light-skin-tone",
  "1f482-1f3fd": "guard-medium-skin-tone",
  "1f9ae": "guide-dog",
  "1f3b8": "guitar",
  "1faae": "hair-pick",
  "1f354": "hamburger",
  "1f528": "hammer",
  "1f6e0": "hammer-and-wrench",
  "1faac": "hamsa",
  "1f439": "hamster",
  "1f590": "hand-with-fingers-splayed",
  "1f590-1f3ff": "hand-with-fingers-splayed-dark-skin-tone",
  "1f590-1f3fb": "hand-with-fingers-splayed-light-skin-tone",
  "1f590-1f3fe": "hand-with-fingers-splayed-medium-dark-skin-tone",
  "1f590-1f3fc": "hand-with-fingers-splayed-medium-light-skin-tone",
  "1f590-1f3fd": "hand-with-fingers-splayed-medium-skin-tone",
  "1faf0": "hand-with-index-finger-and-thumb-crossed",
  "1faf0-1f3ff": "hand-with-index-finger-and-thumb-crossed-dark-skin-tone",
  "1faf0-1f3fb": "hand-with-index-finger-and-thumb-crossed-light-skin-tone",
  "1faf0-1f3fe": "hand-with-index-finger-and-thumb-crossed-medium-dark-skin-tone",
  "1faf0-1f3fc": "hand-with-index-finger-and-thumb-crossed-medium-light-skin-tone",
  "1faf0-1f3fd": "hand-with-index-finger-and-thumb-crossed-medium-skin-tone",
  "1f45c": "handbag",
  "1f91d": "handshake",
  "1f91d-1f3ff": "handshake-dark-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fb": "handshake-dark-skin-tone-light-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fe": "handshake-dark-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fc": "handshake-dark-skin-tone-medium-light-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fd": "handshake-dark-skin-tone-medium-skin-tone",
  "1f91d-1f3fb": "handshake-light-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3ff": "handshake-light-skin-tone-dark-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fe": "handshake-light-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fc": "handshake-light-skin-tone-medium-light-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fd": "handshake-light-skin-tone-medium-skin-tone",
  "1f91d-1f3fe": "handshake-medium-dark-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3ff": "handshake-medium-dark-skin-tone-dark-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fb": "handshake-medium-dark-skin-tone-light-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fc": "handshake-medium-dark-skin-tone-medium-light-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fd": "handshake-medium-dark-skin-tone-medium-skin-tone",
  "1f91d-1f3fc": "handshake-medium-light-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3ff": "handshake-medium-light-skin-tone-dark-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fb": "handshake-medium-light-skin-tone-light-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fe": "handshake-medium-light-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fd": "handshake-medium-light-skin-tone-medium-skin-tone",
  "1f91d-1f3fd": "handshake-medium-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3ff": "handshake-medium-skin-tone-dark-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fb": "handshake-medium-skin-tone-light-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fe": "handshake-medium-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fc": "handshake-medium-skin-tone-medium-light-skin-tone",
  "1f423": "hatching-chick",
  "1f642-200d-2194": "head-shaking-horizontally",
  "1f642-200d-2195": "head-shaking-vertically",
  "1f3a7": "headphone",
  "1faa6": "headstone",
  "1f9d1-200d-2695": "health-worker",
  "1f9d1-1f3ff-200d-2695": "health-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-2695": "health-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-2695": "health-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2695": "health-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2695": "health-worker-medium-skin-tone",
  "1f649": "hear-no-evil-monkey",
  "1f49f": "heart-decoration",
  "1faf6": "heart-hands",
  "1faf6-1f3ff": "heart-hands-dark-skin-tone",
  "1faf6-1f3fb": "heart-hands-light-skin-tone",
  "1faf6-1f3fe": "heart-hands-medium-dark-skin-tone",
  "1faf6-1f3fc": "heart-hands-medium-light-skin-tone",
  "1faf6-1f3fd": "heart-hands-medium-skin-tone",
  "2764-200d-1f525": "heart-on-fire",
  "1f498": "heart-with-arrow",
  "1f49d": "heart-with-ribbon",
  "1f4b2": "heavy-dollar-sign",
  "1f7f0": "heavy-equals-sign",
  "1f994": "hedgehog",
  "1f681": "helicopter",
  "1f33f": "herb",
  "1f33a": "hibiscus",
  "1f460": "high-heeled-shoe",
  "1f684": "high-speed-train",
  "26a1": "high-voltage",
  "1f97e": "hiking-boot",
  "1f6d5": "hindu-temple",
  "1f99b": "hippopotamus",
  "1f573": "hole",
  "2b55": "hollow-red-circle",
  "1f36f": "honey-pot",
  "1f41d": "honeybee",
  "1fa9d": "hook",
  "1f6a5": "horizontal-traffic-light",
  "1f40e": "horse",
  "1f434": "horse-face",
  "1f3c7": "horse-racing",
  "1f3c7-1f3ff": "horse-racing-dark-skin-tone",
  "1f3c7-1f3fb": "horse-racing-light-skin-tone",
  "1f3c7-1f3fe": "horse-racing-medium-dark-skin-tone",
  "1f3c7-1f3fc": "horse-racing-medium-light-skin-tone",
  "1f3c7-1f3fd": "horse-racing-medium-skin-tone",
  "1f3e5": "hospital",
  "1f32d": "hot-dog",
  "1f975": "hot-face",
  "1f336": "hot-pepper",
  "1f3e8": "hotel",
  "231b": "hourglass-done",
  "23f3": "hourglass-not-done",
  "1f3e0": "house",
  "1f3e1": "house-with-garden",
  "1f3d8": "houses",
  "1f4af": "hundred-points",
  "1f62f": "hushed-face",
  "1f6d6": "hut",
  "1fabb": "hyacinth",
  "1f9ca": "ice",
  "1f368": "ice-cream",
  "1f3d2": "ice-hockey",
  "26f8": "ice-skate",
  "1f194": "id-button",
  "1faaa": "identification-card",
  "1f4e5": "inbox-tray",
  "1f4e8": "incoming-envelope",
  "1faf5": "index-pointing-at-the-viewer",
  "1faf5-1f3ff": "index-pointing-at-the-viewer-dark-skin-tone",
  "1faf5-1f3fb": "index-pointing-at-the-viewer-light-skin-tone",
  "1faf5-1f3fe": "index-pointing-at-the-viewer-medium-dark-skin-tone",
  "1faf5-1f3fc": "index-pointing-at-the-viewer-medium-light-skin-tone",
  "1faf5-1f3fd": "index-pointing-at-the-viewer-medium-skin-tone",
  "261d": "index-pointing-up",
  "261d-1f3ff": "index-pointing-up-dark-skin-tone",
  "261d-1f3fb": "index-pointing-up-light-skin-tone",
  "261d-1f3fe": "index-pointing-up-medium-dark-skin-tone",
  "261d-1f3fc": "index-pointing-up-medium-light-skin-tone",
  "261d-1f3fd": "index-pointing-up-medium-skin-tone",
  "267e": "infinity",
  "1f524": "input-latin-letters",
  "1f521": "input-latin-lowercase",
  "1f520": "input-latin-uppercase",
  "1f522": "input-numbers",
  "1f523": "input-symbols",
  "1f383": "jack-o-lantern",
  "1f251": "japanese-acceptable-button",
  "1f238": "japanese-application-button",
  "1f250": "japanese-bargain-button",
  "1f3ef": "japanese-castle",
  "1f239": "japanese-discount-button",
  "1f38e": "japanese-dolls",
  "1f21a": "japanese-free-of-charge-button",
  "1f201": "japanese-here-button",
  "1f237": "japanese-monthly-amount-button",
  "1f235": "japanese-no-vacancy-button",
  "1f236": "japanese-not-free-of-charge-button",
  "1f23a": "japanese-open-for-business-button",
  "1f234": "japanese-passing-grade-button",
  "1f3e3": "japanese-post-office",
  "1f232": "japanese-prohibited-button",
  "1f22f": "japanese-reserved-button",
  "1f202": "japanese-service-charge-button",
  "1f530": "japanese-symbol-for-beginner",
  "1f233": "japanese-vacancy-button",
  "1fad9": "jar",
  "1f456": "jeans",
  "1fabc": "jellyfish",
  "1f0cf": "joker",
  "1f579": "joystick",
  "1f9d1-200d-2696": "judge",
  "1f9d1-1f3ff-200d-2696": "judge-dark-skin-tone",
  "1f9d1-1f3fb-200d-2696": "judge-light-skin-tone",
  "1f9d1-1f3fe-200d-2696": "judge-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2696": "judge-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2696": "judge-medium-skin-tone",
  "1f54b": "kaaba",
  "1f998": "kangaroo",
  "1f511": "key",
  "20e3": "keycap",
  "0030-20e3": "keycap-0",
  "0031-20e3": "keycap-1",
  "1f51f": "keycap-10",
  "0032-20e3": "keycap-2",
  "0033-20e3": "keycap-3",
  "0034-20e3": "keycap-4",
  "0035-20e3": "keycap-5",
  "0036-20e3": "keycap-6",
  "0037-20e3": "keycap-7",
  "0038-20e3": "keycap-8",
  "0039-20e3": "keycap-9",
  "002a-20e3": "keycap-asterisk",
  "0023-20e3": "keycap-pound",
  "1faaf": "khanda",
  "1f6f4": "kick-scooter",
  "1f458": "kimono",
  "1f48f": "kiss",
  "1f48f-1f3ff": "kiss-dark-skin-tone",
  "1f48f-1f3fb": "kiss-light-skin-tone",
  "1f468-200d-2764-200d-1f48b-200d-1f468": "kiss-man-man",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-light-skin-tone-medium-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-light-skin-tone-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-skin-tone-medium-light-skin-tone",
  "1f48b": "kiss-mark",
  "1f48f-1f3fe": "kiss-medium-dark-skin-tone",
  "1f48f-1f3fc": "kiss-medium-light-skin-tone",
  "1f48f-1f3fd": "kiss-medium-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f48b-200d-1f468": "kiss-woman-man",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f48b-200d-1f469": "kiss-woman-woman",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-skin-tone-medium-light-skin-tone",
  "1f63d": "kissing-cat",
  "1f617": "kissing-face",
  "1f61a": "kissing-face-with-closed-eyes",
  "1f619": "kissing-face-with-smiling-eyes",
  "1f52a": "kitchen-knife",
  "1fa81": "kite",
  "1f95d": "kiwi-fruit",
  "1faa2": "knot",
  "1f428": "koala",
  "1f97c": "lab-coat",
  "1f3f7": "label",
  "1f94d": "lacrosse",
  "1fa9c": "ladder",
  "1f41e": "lady-beetle",
  "1f4bb": "laptop",
  "1f537": "large-blue-diamond",
  "1f536": "large-orange-diamond",
  "1f317": "last-quarter-moon",
  "1f31c": "last-quarter-moon-face",
  "23ee": "last-track-button",
  "271d": "latin-cross",
  "1f343": "leaf-fluttering-in-wind",
  "1f96c": "leafy-green",
  "1f4d2": "ledger",
  "2b05": "left-arrow",
  "21aa": "left-arrow-curving-right",
  "1f91b": "left-facing-fist",
  "1f91b-1f3ff": "left-facing-fist-dark-skin-tone",
  "1f91b-1f3fb": "left-facing-fist-light-skin-tone",
  "1f91b-1f3fe": "left-facing-fist-medium-dark-skin-tone",
  "1f91b-1f3fc": "left-facing-fist-medium-light-skin-tone",
  "1f91b-1f3fd": "left-facing-fist-medium-skin-tone",
  "1f6c5": "left-luggage",
  "1f5e8": "left-speech-bubble",
  "1faf2": "leftwards-hand",
  "1faf2-1f3ff": "leftwards-hand-dark-skin-tone",
  "1faf2-1f3fb": "leftwards-hand-light-skin-tone",
  "1faf2-1f3fe": "leftwards-hand-medium-dark-skin-tone",
  "1faf2-1f3fc": "leftwards-hand-medium-light-skin-tone",
  "1faf2-1f3fd": "leftwards-hand-medium-skin-tone",
  "1faf7": "leftwards-pushing-hand",
  "1faf7-1f3ff": "leftwards-pushing-hand-dark-skin-tone",
  "1faf7-1f3fb": "leftwards-pushing-hand-light-skin-tone",
  "1faf7-1f3fe": "leftwards-pushing-hand-medium-dark-skin-tone",
  "1faf7-1f3fc": "leftwards-pushing-hand-medium-light-skin-tone",
  "1faf7-1f3fd": "leftwards-pushing-hand-medium-skin-tone",
  "1f9b5": "leg",
  "1f9b5-1f3ff": "leg-dark-skin-tone",
  "1f9b5-1f3fb": "leg-light-skin-tone",
  "1f9b5-1f3fe": "leg-medium-dark-skin-tone",
  "1f9b5-1f3fc": "leg-medium-light-skin-tone",
  "1f9b5-1f3fd": "leg-medium-skin-tone",
  "1f34b": "lemon",
  "264c": "leo",
  "1f406": "leopard",
  "1f1e6": "letter-a",
  "1f1e7": "letter-b",
  "1f1e8": "letter-c",
  "1f1e9": "letter-d",
  "1f1ea": "letter-e",
  "1f1eb": "letter-f",
  "1f1ec": "letter-g",
  "1f1ed": "letter-h",
  "1f1ee": "letter-i",
  "1f1ef": "letter-j",
  "1f1f0": "letter-k",
  "1f1f1": "letter-l",
  "1f1f2": "letter-m",
  "1f1f3": "letter-n",
  "1f1f4": "letter-o",
  "1f1f5": "letter-p",
  "1f1f6": "letter-q",
  "1f1f7": "letter-r",
  "1f1f8": "letter-s",
  "1f1f9": "letter-t",
  "1f1fa": "letter-u",
  "1f1fb": "letter-v",
  "1f1fc": "letter-w",
  "1f1fd": "letter-x",
  "1f1fe": "letter-y",
  "1f1ff": "letter-z",
  "1f39a": "level-slider",
  "264e": "libra",
  "1fa75": "light-blue-heart",
  "1f4a1": "light-bulb",
  "1f688": "light-rail",
  "1f34b-200d-1f7e9": "lime",
  "1f517": "link",
  "1f587": "linked-paperclips",
  "1f981": "lion",
  "1f484": "lipstick",
  "1f6ae": "litter-in-bin-sign",
  "1f98e": "lizard",
  "1f999": "llama",
  "1f99e": "lobster",
  "1f512": "locked",
  "1f510": "locked-with-key",
  "1f50f": "locked-with-pen",
  "1f682": "locomotive",
  "1f36d": "lollipop",
  "1fa98": "long-drum",
  "1f9f4": "lotion-bottle",
  "1fab7": "lotus",
  "1f62d": "loudly-crying-face",
  "1f4e2": "loudspeaker",
  "1f3e9": "love-hotel",
  "1f48c": "love-letter",
  "1f91f": "love-you-gesture",
  "1f91f-1f3ff": "love-you-gesture-dark-skin-tone",
  "1f91f-1f3fb": "love-you-gesture-light-skin-tone",
  "1f91f-1f3fe": "love-you-gesture-medium-dark-skin-tone",
  "1f91f-1f3fc": "love-you-gesture-medium-light-skin-tone",
  "1f91f-1f3fd": "love-you-gesture-medium-skin-tone",
  "1faab": "low-battery",
  "1f9f3": "luggage",
  "1fac1": "lungs",
  "1f925": "lying-face",
  "1f9d9": "mage",
  "1f9d9-1f3ff": "mage-dark-skin-tone",
  "1f9d9-1f3fb": "mage-light-skin-tone",
  "1f9d9-1f3fe": "mage-medium-dark-skin-tone",
  "1f9d9-1f3fc": "mage-medium-light-skin-tone",
  "1f9d9-1f3fd": "mage-medium-skin-tone",
  "1fa84": "magic-wand",
  "1f9f2": "magnet",
  "1f50d": "magnifying-glass-tilted-left",
  "1f50e": "magnifying-glass-tilted-right",
  "1f004": "mahjong-red-dragon",
  "1f9a3": "mammoth",
  "1f468": "man",
  "1f468-200d-1f3a8": "man-artist",
  "1f468-1f3ff-200d-1f3a8": "man-artist-dark-skin-tone",
  "1f468-1f3fb-200d-1f3a8": "man-artist-light-skin-tone",
  "1f468-1f3fe-200d-1f3a8": "man-artist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3a8": "man-artist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3a8": "man-artist-medium-skin-tone",
  "1f468-200d-1f680": "man-astronaut",
  "1f468-1f3ff-200d-1f680": "man-astronaut-dark-skin-tone",
  "1f468-1f3fb-200d-1f680": "man-astronaut-light-skin-tone",
  "1f468-1f3fe-200d-1f680": "man-astronaut-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f680": "man-astronaut-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f680": "man-astronaut-medium-skin-tone",
  "1f468-200d-1f9b2": "man-bald",
  "1f9d4-200d-2642": "man-beard",
  "1f6b4-200d-2642": "man-biking",
  "1f6b4-1f3ff-200d-2642": "man-biking-dark-skin-tone",
  "1f6b4-1f3fb-200d-2642": "man-biking-light-skin-tone",
  "1f6b4-1f3fe-200d-2642": "man-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc-200d-2642": "man-biking-medium-light-skin-tone",
  "1f6b4-1f3fd-200d-2642": "man-biking-medium-skin-tone",
  "1f471-200d-2642": "man-blond-hair",
  "26f9-200d-2642": "man-bouncing-ball",
  "26f9-1f3ff-200d-2642": "man-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb-200d-2642": "man-bouncing-ball-light-skin-tone",
  "26f9-1f3fe-200d-2642": "man-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc-200d-2642": "man-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd-200d-2642": "man-bouncing-ball-medium-skin-tone",
  "1f647-200d-2642": "man-bowing",
  "1f647-1f3ff-200d-2642": "man-bowing-dark-skin-tone",
  "1f647-1f3fb-200d-2642": "man-bowing-light-skin-tone",
  "1f647-1f3fe-200d-2642": "man-bowing-medium-dark-skin-tone",
  "1f647-1f3fc-200d-2642": "man-bowing-medium-light-skin-tone",
  "1f647-1f3fd-200d-2642": "man-bowing-medium-skin-tone",
  "1f938-200d-2642": "man-cartwheeling",
  "1f938-1f3ff-200d-2642": "man-cartwheeling-dark-skin-tone",
  "1f938-1f3fb-200d-2642": "man-cartwheeling-light-skin-tone",
  "1f938-1f3fe-200d-2642": "man-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc-200d-2642": "man-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd-200d-2642": "man-cartwheeling-medium-skin-tone",
  "1f9d7-200d-2642": "man-climbing",
  "1f9d7-1f3ff-200d-2642": "man-climbing-dark-skin-tone",
  "1f9d7-1f3fb-200d-2642": "man-climbing-light-skin-tone",
  "1f9d7-1f3fe-200d-2642": "man-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc-200d-2642": "man-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd-200d-2642": "man-climbing-medium-skin-tone",
  "1f477-200d-2642": "man-construction-worker",
  "1f477-1f3ff-200d-2642": "man-construction-worker-dark-skin-tone",
  "1f477-1f3fb-200d-2642": "man-construction-worker-light-skin-tone",
  "1f477-1f3fe-200d-2642": "man-construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc-200d-2642": "man-construction-worker-medium-light-skin-tone",
  "1f477-1f3fd-200d-2642": "man-construction-worker-medium-skin-tone",
  "1f468-200d-1f373": "man-cook",
  "1f468-1f3ff-200d-1f373": "man-cook-dark-skin-tone",
  "1f468-1f3fb-200d-1f373": "man-cook-light-skin-tone",
  "1f468-1f3fe-200d-1f373": "man-cook-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f373": "man-cook-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f373": "man-cook-medium-skin-tone",
  "1f468-200d-1f9b1": "man-curly-hair",
  "1f57a": "man-dancing",
  "1f57a-1f3ff": "man-dancing-dark-skin-tone",
  "1f57a-1f3fb": "man-dancing-light-skin-tone",
  "1f57a-1f3fe": "man-dancing-medium-dark-skin-tone",
  "1f57a-1f3fc": "man-dancing-medium-light-skin-tone",
  "1f57a-1f3fd": "man-dancing-medium-skin-tone",
  "1f468-1f3ff": "man-dark-skin-tone",
  "1f468-1f3ff-200d-1f9b2": "man-dark-skin-tone-bald",
  "1f9d4-1f3ff-200d-2642": "man-dark-skin-tone-beard",
  "1f471-1f3ff-200d-2642": "man-dark-skin-tone-blond-hair",
  "1f468-1f3ff-200d-1f9b1": "man-dark-skin-tone-curly-hair",
  "1f468-1f3ff-200d-1f9b0": "man-dark-skin-tone-red-hair",
  "1f468-1f3ff-200d-1f9b3": "man-dark-skin-tone-white-hair",
  "1f575-200d-2642": "man-detective",
  "1f575-1f3ff-200d-2642": "man-detective-dark-skin-tone",
  "1f575-1f3fb-200d-2642": "man-detective-light-skin-tone",
  "1f575-1f3fe-200d-2642": "man-detective-medium-dark-skin-tone",
  "1f575-1f3fc-200d-2642": "man-detective-medium-light-skin-tone",
  "1f575-1f3fd-200d-2642": "man-detective-medium-skin-tone",
  "1f9dd-200d-2642": "man-elf",
  "1f9dd-1f3ff-200d-2642": "man-elf-dark-skin-tone",
  "1f9dd-1f3fb-200d-2642": "man-elf-light-skin-tone",
  "1f9dd-1f3fe-200d-2642": "man-elf-medium-dark-skin-tone",
  "1f9dd-1f3fc-200d-2642": "man-elf-medium-light-skin-tone",
  "1f9dd-1f3fd-200d-2642": "man-elf-medium-skin-tone",
  "1f926-200d-2642": "man-facepalming",
  "1f926-1f3ff-200d-2642": "man-facepalming-dark-skin-tone",
  "1f926-1f3fb-200d-2642": "man-facepalming-light-skin-tone",
  "1f926-1f3fe-200d-2642": "man-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc-200d-2642": "man-facepalming-medium-light-skin-tone",
  "1f926-1f3fd-200d-2642": "man-facepalming-medium-skin-tone",
  "1f468-200d-1f3ed": "man-factory-worker",
  "1f468-1f3ff-200d-1f3ed": "man-factory-worker-dark-skin-tone",
  "1f468-1f3fb-200d-1f3ed": "man-factory-worker-light-skin-tone",
  "1f468-1f3fe-200d-1f3ed": "man-factory-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3ed": "man-factory-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3ed": "man-factory-worker-medium-skin-tone",
  "1f9da-200d-2642": "man-fairy",
  "1f9da-1f3ff-200d-2642": "man-fairy-dark-skin-tone",
  "1f9da-1f3fb-200d-2642": "man-fairy-light-skin-tone",
  "1f9da-1f3fe-200d-2642": "man-fairy-medium-dark-skin-tone",
  "1f9da-1f3fc-200d-2642": "man-fairy-medium-light-skin-tone",
  "1f9da-1f3fd-200d-2642": "man-fairy-medium-skin-tone",
  "1f468-200d-1f33e": "man-farmer",
  "1f468-1f3ff-200d-1f33e": "man-farmer-dark-skin-tone",
  "1f468-1f3fb-200d-1f33e": "man-farmer-light-skin-tone",
  "1f468-1f3fe-200d-1f33e": "man-farmer-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f33e": "man-farmer-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f33e": "man-farmer-medium-skin-tone",
  "1f468-200d-1f37c": "man-feeding-baby",
  "1f468-1f3ff-200d-1f37c": "man-feeding-baby-dark-skin-tone",
  "1f468-1f3fb-200d-1f37c": "man-feeding-baby-light-skin-tone",
  "1f468-1f3fe-200d-1f37c": "man-feeding-baby-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f37c": "man-feeding-baby-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f37c": "man-feeding-baby-medium-skin-tone",
  "1f468-200d-1f692": "man-firefighter",
  "1f468-1f3ff-200d-1f692": "man-firefighter-dark-skin-tone",
  "1f468-1f3fb-200d-1f692": "man-firefighter-light-skin-tone",
  "1f468-1f3fe-200d-1f692": "man-firefighter-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f692": "man-firefighter-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f692": "man-firefighter-medium-skin-tone",
  "1f64d-200d-2642": "man-frowning",
  "1f64d-1f3ff-200d-2642": "man-frowning-dark-skin-tone",
  "1f64d-1f3fb-200d-2642": "man-frowning-light-skin-tone",
  "1f64d-1f3fe-200d-2642": "man-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc-200d-2642": "man-frowning-medium-light-skin-tone",
  "1f64d-1f3fd-200d-2642": "man-frowning-medium-skin-tone",
  "1f9de-200d-2642": "man-genie",
  "1f645-200d-2642": "man-gesturing-no",
  "1f645-1f3ff-200d-2642": "man-gesturing-no-dark-skin-tone",
  "1f645-1f3fb-200d-2642": "man-gesturing-no-light-skin-tone",
  "1f645-1f3fe-200d-2642": "man-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc-200d-2642": "man-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd-200d-2642": "man-gesturing-no-medium-skin-tone",
  "1f646-200d-2642": "man-gesturing-ok",
  "1f646-1f3ff-200d-2642": "man-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb-200d-2642": "man-gesturing-ok-light-skin-tone",
  "1f646-1f3fe-200d-2642": "man-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc-200d-2642": "man-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd-200d-2642": "man-gesturing-ok-medium-skin-tone",
  "1f487-200d-2642": "man-getting-haircut",
  "1f487-1f3ff-200d-2642": "man-getting-haircut-dark-skin-tone",
  "1f487-1f3fb-200d-2642": "man-getting-haircut-light-skin-tone",
  "1f487-1f3fe-200d-2642": "man-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc-200d-2642": "man-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd-200d-2642": "man-getting-haircut-medium-skin-tone",
  "1f486-200d-2642": "man-getting-massage",
  "1f486-1f3ff-200d-2642": "man-getting-massage-dark-skin-tone",
  "1f486-1f3fb-200d-2642": "man-getting-massage-light-skin-tone",
  "1f486-1f3fe-200d-2642": "man-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc-200d-2642": "man-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd-200d-2642": "man-getting-massage-medium-skin-tone",
  "1f3cc-200d-2642": "man-golfing",
  "1f3cc-1f3ff-200d-2642": "man-golfing-dark-skin-tone",
  "1f3cc-1f3fb-200d-2642": "man-golfing-light-skin-tone",
  "1f3cc-1f3fe-200d-2642": "man-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc-200d-2642": "man-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd-200d-2642": "man-golfing-medium-skin-tone",
  "1f482-200d-2642": "man-guard",
  "1f482-1f3ff-200d-2642": "man-guard-dark-skin-tone",
  "1f482-1f3fb-200d-2642": "man-guard-light-skin-tone",
  "1f482-1f3fe-200d-2642": "man-guard-medium-dark-skin-tone",
  "1f482-1f3fc-200d-2642": "man-guard-medium-light-skin-tone",
  "1f482-1f3fd-200d-2642": "man-guard-medium-skin-tone",
  "1f468-200d-2695": "man-health-worker",
  "1f468-1f3ff-200d-2695": "man-health-worker-dark-skin-tone",
  "1f468-1f3fb-200d-2695": "man-health-worker-light-skin-tone",
  "1f468-1f3fe-200d-2695": "man-health-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2695": "man-health-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-2695": "man-health-worker-medium-skin-tone",
  "1f9d8-200d-2642": "man-in-lotus-position",
  "1f9d8-1f3ff-200d-2642": "man-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb-200d-2642": "man-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe-200d-2642": "man-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc-200d-2642": "man-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd-200d-2642": "man-in-lotus-position-medium-skin-tone",
  "1f468-200d-1f9bd": "man-in-manual-wheelchair",
  "1f468-1f3ff-200d-1f9bd": "man-in-manual-wheelchair-dark-skin-tone",
  "1f468-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right",
  "1f468-1f3ff-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9bd": "man-in-manual-wheelchair-light-skin-tone",
  "1f468-1f3fe-200d-1f9bd": "man-in-manual-wheelchair-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bd": "man-in-manual-wheelchair-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bd": "man-in-manual-wheelchair-medium-skin-tone",
  "1f468-200d-1f9bc": "man-in-motorized-wheelchair",
  "1f468-1f3ff-200d-1f9bc": "man-in-motorized-wheelchair-dark-skin-tone",
  "1f468-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right",
  "1f468-1f3ff-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9bc": "man-in-motorized-wheelchair-light-skin-tone",
  "1f468-1f3fe-200d-1f9bc": "man-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bc": "man-in-motorized-wheelchair-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bc": "man-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6-200d-2642": "man-in-steamy-room",
  "1f9d6-1f3ff-200d-2642": "man-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb-200d-2642": "man-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe-200d-2642": "man-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc-200d-2642": "man-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd-200d-2642": "man-in-steamy-room-medium-skin-tone",
  "1f935-200d-2642": "man-in-tuxedo",
  "1f935-1f3ff-200d-2642": "man-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb-200d-2642": "man-in-tuxedo-light-skin-tone",
  "1f935-1f3fe-200d-2642": "man-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc-200d-2642": "man-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd-200d-2642": "man-in-tuxedo-medium-skin-tone",
  "1f468-200d-2696": "man-judge",
  "1f468-1f3ff-200d-2696": "man-judge-dark-skin-tone",
  "1f468-1f3fb-200d-2696": "man-judge-light-skin-tone",
  "1f468-1f3fe-200d-2696": "man-judge-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2696": "man-judge-medium-light-skin-tone",
  "1f468-1f3fd-200d-2696": "man-judge-medium-skin-tone",
  "1f939-200d-2642": "man-juggling",
  "1f939-1f3ff-200d-2642": "man-juggling-dark-skin-tone",
  "1f939-1f3fb-200d-2642": "man-juggling-light-skin-tone",
  "1f939-1f3fe-200d-2642": "man-juggling-medium-dark-skin-tone",
  "1f939-1f3fc-200d-2642": "man-juggling-medium-light-skin-tone",
  "1f939-1f3fd-200d-2642": "man-juggling-medium-skin-tone",
  "1f9ce-200d-2642": "man-kneeling",
  "1f9ce-1f3ff-200d-2642": "man-kneeling-dark-skin-tone",
  "1f9ce-200d-2642-200d-27a1": "man-kneeling-facing-right",
  "1f9ce-1f3ff-200d-2642-200d-27a1": "man-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-2642-200d-27a1": "man-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb-200d-2642": "man-kneeling-light-skin-tone",
  "1f9ce-1f3fe-200d-2642": "man-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2642": "man-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2642": "man-kneeling-medium-skin-tone",
  "1f3cb-200d-2642": "man-lifting-weights",
  "1f3cb-1f3ff-200d-2642": "man-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb-200d-2642": "man-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe-200d-2642": "man-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc-200d-2642": "man-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd-200d-2642": "man-lifting-weights-medium-skin-tone",
  "1f468-1f3fb": "man-light-skin-tone",
  "1f468-1f3fb-200d-1f9b2": "man-light-skin-tone-bald",
  "1f9d4-1f3fb-200d-2642": "man-light-skin-tone-beard",
  "1f471-1f3fb-200d-2642": "man-light-skin-tone-blond-hair",
  "1f468-1f3fb-200d-1f9b1": "man-light-skin-tone-curly-hair",
  "1f468-1f3fb-200d-1f9b0": "man-light-skin-tone-red-hair",
  "1f468-1f3fb-200d-1f9b3": "man-light-skin-tone-white-hair",
  "1f9d9-200d-2642": "man-mage",
  "1f9d9-1f3ff-200d-2642": "man-mage-dark-skin-tone",
  "1f9d9-1f3fb-200d-2642": "man-mage-light-skin-tone",
  "1f9d9-1f3fe-200d-2642": "man-mage-medium-dark-skin-tone",
  "1f9d9-1f3fc-200d-2642": "man-mage-medium-light-skin-tone",
  "1f9d9-1f3fd-200d-2642": "man-mage-medium-skin-tone",
  "1f468-200d-1f527": "man-mechanic",
  "1f468-1f3ff-200d-1f527": "man-mechanic-dark-skin-tone",
  "1f468-1f3fb-200d-1f527": "man-mechanic-light-skin-tone",
  "1f468-1f3fe-200d-1f527": "man-mechanic-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f527": "man-mechanic-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f527": "man-mechanic-medium-skin-tone",
  "1f468-1f3fe": "man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-1f9b2": "man-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe-200d-2642": "man-medium-dark-skin-tone-beard",
  "1f471-1f3fe-200d-2642": "man-medium-dark-skin-tone-blond-hair",
  "1f468-1f3fe-200d-1f9b1": "man-medium-dark-skin-tone-curly-hair",
  "1f468-1f3fe-200d-1f9b0": "man-medium-dark-skin-tone-red-hair",
  "1f468-1f3fe-200d-1f9b3": "man-medium-dark-skin-tone-white-hair",
  "1f468-1f3fc": "man-medium-light-skin-tone",
  "1f468-1f3fc-200d-1f9b2": "man-medium-light-skin-tone-bald",
  "1f9d4-1f3fc-200d-2642": "man-medium-light-skin-tone-beard",
  "1f471-1f3fc-200d-2642": "man-medium-light-skin-tone-blond-hair",
  "1f468-1f3fc-200d-1f9b1": "man-medium-light-skin-tone-curly-hair",
  "1f468-1f3fc-200d-1f9b0": "man-medium-light-skin-tone-red-hair",
  "1f468-1f3fc-200d-1f9b3": "man-medium-light-skin-tone-white-hair",
  "1f468-1f3fd": "man-medium-skin-tone",
  "1f468-1f3fd-200d-1f9b2": "man-medium-skin-tone-bald",
  "1f9d4-1f3fd-200d-2642": "man-medium-skin-tone-beard",
  "1f471-1f3fd-200d-2642": "man-medium-skin-tone-blond-hair",
  "1f468-1f3fd-200d-1f9b1": "man-medium-skin-tone-curly-hair",
  "1f468-1f3fd-200d-1f9b0": "man-medium-skin-tone-red-hair",
  "1f468-1f3fd-200d-1f9b3": "man-medium-skin-tone-white-hair",
  "1f6b5-200d-2642": "man-mountain-biking",
  "1f6b5-1f3ff-200d-2642": "man-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb-200d-2642": "man-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe-200d-2642": "man-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc-200d-2642": "man-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd-200d-2642": "man-mountain-biking-medium-skin-tone",
  "1f468-200d-1f4bc": "man-office-worker",
  "1f468-1f3ff-200d-1f4bc": "man-office-worker-dark-skin-tone",
  "1f468-1f3fb-200d-1f4bc": "man-office-worker-light-skin-tone",
  "1f468-1f3fe-200d-1f4bc": "man-office-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f4bc": "man-office-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f4bc": "man-office-worker-medium-skin-tone",
  "1f468-200d-2708": "man-pilot",
  "1f468-1f3ff-200d-2708": "man-pilot-dark-skin-tone",
  "1f468-1f3fb-200d-2708": "man-pilot-light-skin-tone",
  "1f468-1f3fe-200d-2708": "man-pilot-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2708": "man-pilot-medium-light-skin-tone",
  "1f468-1f3fd-200d-2708": "man-pilot-medium-skin-tone",
  "1f93e-200d-2642": "man-playing-handball",
  "1f93e-1f3ff-200d-2642": "man-playing-handball-dark-skin-tone",
  "1f93e-1f3fb-200d-2642": "man-playing-handball-light-skin-tone",
  "1f93e-1f3fe-200d-2642": "man-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc-200d-2642": "man-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd-200d-2642": "man-playing-handball-medium-skin-tone",
  "1f93d-200d-2642": "man-playing-water-polo",
  "1f93d-1f3ff-200d-2642": "man-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb-200d-2642": "man-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe-200d-2642": "man-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc-200d-2642": "man-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd-200d-2642": "man-playing-water-polo-medium-skin-tone",
  "1f46e-200d-2642": "man-police-officer",
  "1f46e-1f3ff-200d-2642": "man-police-officer-dark-skin-tone",
  "1f46e-1f3fb-200d-2642": "man-police-officer-light-skin-tone",
  "1f46e-1f3fe-200d-2642": "man-police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc-200d-2642": "man-police-officer-medium-light-skin-tone",
  "1f46e-1f3fd-200d-2642": "man-police-officer-medium-skin-tone",
  "1f64e-200d-2642": "man-pouting",
  "1f64e-1f3ff-200d-2642": "man-pouting-dark-skin-tone",
  "1f64e-1f3fb-200d-2642": "man-pouting-light-skin-tone",
  "1f64e-1f3fe-200d-2642": "man-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc-200d-2642": "man-pouting-medium-light-skin-tone",
  "1f64e-1f3fd-200d-2642": "man-pouting-medium-skin-tone",
  "1f64b-200d-2642": "man-raising-hand",
  "1f64b-1f3ff-200d-2642": "man-raising-hand-dark-skin-tone",
  "1f64b-1f3fb-200d-2642": "man-raising-hand-light-skin-tone",
  "1f64b-1f3fe-200d-2642": "man-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc-200d-2642": "man-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd-200d-2642": "man-raising-hand-medium-skin-tone",
  "1f468-200d-1f9b0": "man-red-hair",
  "1f6a3-200d-2642": "man-rowing-boat",
  "1f6a3-1f3ff-200d-2642": "man-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb-200d-2642": "man-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe-200d-2642": "man-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc-200d-2642": "man-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd-200d-2642": "man-rowing-boat-medium-skin-tone",
  "1f3c3-200d-2642": "man-running",
  "1f3c3-1f3ff-200d-2642": "man-running-dark-skin-tone",
  "1f3c3-200d-2642-200d-27a1": "man-running-facing-right",
  "1f3c3-1f3ff-200d-2642-200d-27a1": "man-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-2642-200d-27a1": "man-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-2642-200d-27a1": "man-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2642-200d-27a1": "man-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2642-200d-27a1": "man-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb-200d-2642": "man-running-light-skin-tone",
  "1f3c3-1f3fe-200d-2642": "man-running-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2642": "man-running-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2642": "man-running-medium-skin-tone",
  "1f468-200d-1f52c": "man-scientist",
  "1f468-1f3ff-200d-1f52c": "man-scientist-dark-skin-tone",
  "1f468-1f3fb-200d-1f52c": "man-scientist-light-skin-tone",
  "1f468-1f3fe-200d-1f52c": "man-scientist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f52c": "man-scientist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f52c": "man-scientist-medium-skin-tone",
  "1f937-200d-2642": "man-shrugging",
  "1f937-1f3ff-200d-2642": "man-shrugging-dark-skin-tone",
  "1f937-1f3fb-200d-2642": "man-shrugging-light-skin-tone",
  "1f937-1f3fe-200d-2642": "man-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc-200d-2642": "man-shrugging-medium-light-skin-tone",
  "1f937-1f3fd-200d-2642": "man-shrugging-medium-skin-tone",
  "1f468-200d-1f3a4": "man-singer",
  "1f468-1f3ff-200d-1f3a4": "man-singer-dark-skin-tone",
  "1f468-1f3fb-200d-1f3a4": "man-singer-light-skin-tone",
  "1f468-1f3fe-200d-1f3a4": "man-singer-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3a4": "man-singer-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3a4": "man-singer-medium-skin-tone",
  "1f9cd-200d-2642": "man-standing",
  "1f9cd-1f3ff-200d-2642": "man-standing-dark-skin-tone",
  "1f9cd-1f3fb-200d-2642": "man-standing-light-skin-tone",
  "1f9cd-1f3fe-200d-2642": "man-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc-200d-2642": "man-standing-medium-light-skin-tone",
  "1f9cd-1f3fd-200d-2642": "man-standing-medium-skin-tone",
  "1f468-200d-1f393": "man-student",
  "1f468-1f3ff-200d-1f393": "man-student-dark-skin-tone",
  "1f468-1f3fb-200d-1f393": "man-student-light-skin-tone",
  "1f468-1f3fe-200d-1f393": "man-student-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f393": "man-student-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f393": "man-student-medium-skin-tone",
  "1f9b8-200d-2642": "man-superhero",
  "1f9b8-1f3ff-200d-2642": "man-superhero-dark-skin-tone",
  "1f9b8-1f3fb-200d-2642": "man-superhero-light-skin-tone",
  "1f9b8-1f3fe-200d-2642": "man-superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc-200d-2642": "man-superhero-medium-light-skin-tone",
  "1f9b8-1f3fd-200d-2642": "man-superhero-medium-skin-tone",
  "1f9b9-200d-2642": "man-supervillain",
  "1f9b9-1f3ff-200d-2642": "man-supervillain-dark-skin-tone",
  "1f9b9-1f3fb-200d-2642": "man-supervillain-light-skin-tone",
  "1f9b9-1f3fe-200d-2642": "man-supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc-200d-2642": "man-supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd-200d-2642": "man-supervillain-medium-skin-tone",
  "1f3c4-200d-2642": "man-surfing",
  "1f3c4-1f3ff-200d-2642": "man-surfing-dark-skin-tone",
  "1f3c4-1f3fb-200d-2642": "man-surfing-light-skin-tone",
  "1f3c4-1f3fe-200d-2642": "man-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc-200d-2642": "man-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd-200d-2642": "man-surfing-medium-skin-tone",
  "1f3ca-200d-2642": "man-swimming",
  "1f3ca-1f3ff-200d-2642": "man-swimming-dark-skin-tone",
  "1f3ca-1f3fb-200d-2642": "man-swimming-light-skin-tone",
  "1f3ca-1f3fe-200d-2642": "man-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc-200d-2642": "man-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd-200d-2642": "man-swimming-medium-skin-tone",
  "1f468-200d-1f3eb": "man-teacher",
  "1f468-1f3ff-200d-1f3eb": "man-teacher-dark-skin-tone",
  "1f468-1f3fb-200d-1f3eb": "man-teacher-light-skin-tone",
  "1f468-1f3fe-200d-1f3eb": "man-teacher-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3eb": "man-teacher-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3eb": "man-teacher-medium-skin-tone",
  "1f468-200d-1f4bb": "man-technologist",
  "1f468-1f3ff-200d-1f4bb": "man-technologist-dark-skin-tone",
  "1f468-1f3fb-200d-1f4bb": "man-technologist-light-skin-tone",
  "1f468-1f3fe-200d-1f4bb": "man-technologist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f4bb": "man-technologist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f4bb": "man-technologist-medium-skin-tone",
  "1f481-200d-2642": "man-tipping-hand",
  "1f481-1f3ff-200d-2642": "man-tipping-hand-dark-skin-tone",
  "1f481-1f3fb-200d-2642": "man-tipping-hand-light-skin-tone",
  "1f481-1f3fe-200d-2642": "man-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc-200d-2642": "man-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd-200d-2642": "man-tipping-hand-medium-skin-tone",
  "1f9db-200d-2642": "man-vampire",
  "1f9db-1f3ff-200d-2642": "man-vampire-dark-skin-tone",
  "1f9db-1f3fb-200d-2642": "man-vampire-light-skin-tone",
  "1f9db-1f3fe-200d-2642": "man-vampire-medium-dark-skin-tone",
  "1f9db-1f3fc-200d-2642": "man-vampire-medium-light-skin-tone",
  "1f9db-1f3fd-200d-2642": "man-vampire-medium-skin-tone",
  "1f6b6-200d-2642": "man-walking",
  "1f6b6-1f3ff-200d-2642": "man-walking-dark-skin-tone",
  "1f6b6-200d-2642-200d-27a1": "man-walking-facing-right",
  "1f6b6-1f3ff-200d-2642-200d-27a1": "man-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-2642-200d-27a1": "man-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-2642-200d-27a1": "man-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2642-200d-27a1": "man-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2642-200d-27a1": "man-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb-200d-2642": "man-walking-light-skin-tone",
  "1f6b6-1f3fe-200d-2642": "man-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2642": "man-walking-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2642": "man-walking-medium-skin-tone",
  "1f473-200d-2642": "man-wearing-turban",
  "1f473-1f3ff-200d-2642": "man-wearing-turban-dark-skin-tone",
  "1f473-1f3fb-200d-2642": "man-wearing-turban-light-skin-tone",
  "1f473-1f3fe-200d-2642": "man-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc-200d-2642": "man-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd-200d-2642": "man-wearing-turban-medium-skin-tone",
  "1f468-200d-1f9b3": "man-white-hair",
  "1f470-200d-2642": "man-with-veil",
  "1f470-1f3ff-200d-2642": "man-with-veil-dark-skin-tone",
  "1f470-1f3fb-200d-2642": "man-with-veil-light-skin-tone",
  "1f470-1f3fe-200d-2642": "man-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc-200d-2642": "man-with-veil-medium-light-skin-tone",
  "1f470-1f3fd-200d-2642": "man-with-veil-medium-skin-tone",
  "1f468-200d-1f9af": "man-with-white-cane",
  "1f468-1f3ff-200d-1f9af": "man-with-white-cane-dark-skin-tone",
  "1f468-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right",
  "1f468-1f3ff-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9af": "man-with-white-cane-light-skin-tone",
  "1f468-1f3fe-200d-1f9af": "man-with-white-cane-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9af": "man-with-white-cane-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9af": "man-with-white-cane-medium-skin-tone",
  "1f9df-200d-2642": "man-zombie",
  "1f96d": "mango",
  "1f45e": "mans-shoe",
  "1f570": "mantelpiece-clock",
  "1f9bd": "manual-wheelchair",
  "1f5fe": "map-of-japan",
  "1f341": "maple-leaf",
  "1fa87": "maracas",
  "1f94b": "martial-arts-uniform",
  "1f9c9": "mate",
  "1f356": "meat-on-bone",
  "1f9d1-200d-1f527": "mechanic",
  "1f9d1-1f3ff-200d-1f527": "mechanic-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f527": "mechanic-light-skin-tone",
  "1f9d1-1f3fe-200d-1f527": "mechanic-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f527": "mechanic-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f527": "mechanic-medium-skin-tone",
  "1f9be": "mechanical-arm",
  "1f9bf": "mechanical-leg",
  "1f4e3": "megaphone",
  "1f348": "melon",
  "1fae0": "melting-face",
  "1f4dd": "memo",
  "1f46c": "men-holding-hands",
  "1f46c-1f3ff": "men-holding-hands-dark-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46c-1f3fb": "men-holding-hands-light-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46c-1f3fe": "men-holding-hands-medium-dark-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46c-1f3fc": "men-holding-hands-medium-light-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46c-1f3fd": "men-holding-hands-medium-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f46f-200d-2642": "men-with-bunny-ears",
  "1f93c-200d-2642": "men-wrestling",
  "1f93c-1f3ff-200d-2642": "men-wrestling-dark-skin-tone",
  "1f93c-1f3fb-200d-2642": "men-wrestling-light-skin-tone",
  "1f93c-1f3fe-200d-2642": "men-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc-200d-2642": "men-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd-200d-2642": "men-wrestling-medium-skin-tone",
  "2764-200d-1fa79": "mending-heart",
  "1f54e": "menorah",
  "1f6b9": "mens-room",
  "1f9dc-200d-2640": "mermaid",
  "1f9dc-1f3ff-200d-2640": "mermaid-dark-skin-tone",
  "1f9dc-1f3fb-200d-2640": "mermaid-light-skin-tone",
  "1f9dc-1f3fe-200d-2640": "mermaid-medium-dark-skin-tone",
  "1f9dc-1f3fc-200d-2640": "mermaid-medium-light-skin-tone",
  "1f9dc-1f3fd-200d-2640": "mermaid-medium-skin-tone",
  "1f9dc-200d-2642": "merman",
  "1f9dc-1f3ff-200d-2642": "merman-dark-skin-tone",
  "1f9dc-1f3fb-200d-2642": "merman-light-skin-tone",
  "1f9dc-1f3fe-200d-2642": "merman-medium-dark-skin-tone",
  "1f9dc-1f3fc-200d-2642": "merman-medium-light-skin-tone",
  "1f9dc-1f3fd-200d-2642": "merman-medium-skin-tone",
  "1f9dc": "merperson",
  "1f9dc-1f3ff": "merperson-dark-skin-tone",
  "1f9dc-1f3fb": "merperson-light-skin-tone",
  "1f9dc-1f3fe": "merperson-medium-dark-skin-tone",
  "1f9dc-1f3fc": "merperson-medium-light-skin-tone",
  "1f9dc-1f3fd": "merperson-medium-skin-tone",
  "1f687": "metro",
  "1f9a0": "microbe",
  "1f3a4": "microphone",
  "1f52c": "microscope",
  "1f595": "middle-finger",
  "1f595-1f3ff": "middle-finger-dark-skin-tone",
  "1f595-1f3fb": "middle-finger-light-skin-tone",
  "1f595-1f3fe": "middle-finger-medium-dark-skin-tone",
  "1f595-1f3fc": "middle-finger-medium-light-skin-tone",
  "1f595-1f3fd": "middle-finger-medium-skin-tone",
  "1fa96": "military-helmet",
  "1f396": "military-medal",
  "1f30c": "milky-way",
  "1f690": "minibus",
  "1fa9e": "mirror",
  "1faa9": "mirror-ball",
  "1f5ff": "moai",
  "1f4f1": "mobile-phone",
  "1f4f4": "mobile-phone-off",
  "1f4f2": "mobile-phone-with-arrow",
  "1f4b0": "money-bag",
  "1f911": "money-mouth-face",
  "1f4b8": "money-with-wings",
  "1f412": "monkey",
  "1f435": "monkey-face",
  "1f69d": "monorail",
  "1f96e": "moon-cake",
  "1f391": "moon-viewing-ceremony",
  "1face": "moose",
  "1f54c": "mosque",
  "1f99f": "mosquito",
  "1f6e5": "motor-boat",
  "1f6f5": "motor-scooter",
  "1f3cd": "motorcycle",
  "1f9bc": "motorized-wheelchair",
  "1f6e3": "motorway",
  "1f5fb": "mount-fuji",
  "26f0": "mountain",
  "1f6a0": "mountain-cableway",
  "1f69e": "mountain-railway",
  "1f401": "mouse",
  "1f42d": "mouse-face",
  "1faa4": "mouse-trap",
  "1f444": "mouth",
  "1f3a5": "movie-camera",
  "1f936": "mrs-claus",
  "1f936-1f3ff": "mrs-claus-dark-skin-tone",
  "1f936-1f3fb": "mrs-claus-light-skin-tone",
  "1f936-1f3fe": "mrs-claus-medium-dark-skin-tone",
  "1f936-1f3fc": "mrs-claus-medium-light-skin-tone",
  "1f936-1f3fd": "mrs-claus-medium-skin-tone",
  "1f344": "mushroom",
  "1f3b9": "musical-keyboard",
  "1f3b5": "musical-note",
  "1f3b6": "musical-notes",
  "1f3bc": "musical-score",
  "1f507": "muted-speaker",
  "1f9d1-200d-1f384": "mx-claus",
  "1f9d1-1f3ff-200d-1f384": "mx-claus-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f384": "mx-claus-light-skin-tone",
  "1f9d1-1f3fe-200d-1f384": "mx-claus-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f384": "mx-claus-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f384": "mx-claus-medium-skin-tone",
  "1f485": "nail-polish",
  "1f485-1f3ff": "nail-polish-dark-skin-tone",
  "1f485-1f3fb": "nail-polish-light-skin-tone",
  "1f485-1f3fe": "nail-polish-medium-dark-skin-tone",
  "1f485-1f3fc": "nail-polish-medium-light-skin-tone",
  "1f485-1f3fd": "nail-polish-medium-skin-tone",
  "1f4db": "name-badge",
  "1f3de": "national-park",
  "1f922": "nauseated-face",
  "1f9ff": "nazar-amulet",
  "1f454": "necktie",
  "1f913": "nerd-face",
  "1faba": "nest-with-eggs",
  "1fa86": "nesting-dolls",
  "1f610": "neutral-face",
  "1f195": "new-button",
  "1f311": "new-moon",
  "1f31a": "new-moon-face",
  "1f4f0": "newspaper",
  "23ed": "next-track-button",
  "1f196": "ng-button",
  "1f303": "night-with-stars",
  "1f558": "nine-oclock",
  "1f564": "nine-thirty",
  "1f977": "ninja",
  "1f977-1f3ff": "ninja-dark-skin-tone",
  "1f977-1f3fb": "ninja-light-skin-tone",
  "1f977-1f3fe": "ninja-medium-dark-skin-tone",
  "1f977-1f3fc": "ninja-medium-light-skin-tone",
  "1f977-1f3fd": "ninja-medium-skin-tone",
  "1f6b3": "no-bicycles",
  "26d4": "no-entry",
  "1f6af": "no-littering",
  "1f4f5": "no-mobile-phones",
  "1f51e": "no-one-under-eighteen",
  "1f6b7": "no-pedestrians",
  "1f6ad": "no-smoking",
  "1f6b1": "non-potable-water",
  "1f443": "nose",
  "1f443-1f3ff": "nose-dark-skin-tone",
  "1f443-1f3fb": "nose-light-skin-tone",
  "1f443-1f3fe": "nose-medium-dark-skin-tone",
  "1f443-1f3fc": "nose-medium-light-skin-tone",
  "1f443-1f3fd": "nose-medium-skin-tone",
  "1f4d3": "notebook",
  "1f4d4": "notebook-with-decorative-cover",
  "1f529": "nut-and-bolt",
  "1f17e": "o-button-blood-type",
  "1f419": "octopus",
  "1f362": "oden",
  "1f3e2": "office-building",
  "1f9d1-200d-1f4bc": "office-worker",
  "1f9d1-1f3ff-200d-1f4bc": "office-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f4bc": "office-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-1f4bc": "office-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f4bc": "office-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f4bc": "office-worker-medium-skin-tone",
  "1f479": "ogre",
  "1f6e2": "oil-drum",
  "1f197": "ok-button",
  "1f44c": "ok-hand",
  "1f44c-1f3ff": "ok-hand-dark-skin-tone",
  "1f44c-1f3fb": "ok-hand-light-skin-tone",
  "1f44c-1f3fe": "ok-hand-medium-dark-skin-tone",
  "1f44c-1f3fc": "ok-hand-medium-light-skin-tone",
  "1f44c-1f3fd": "ok-hand-medium-skin-tone",
  "1f5dd": "old-key",
  "1f474": "old-man",
  "1f474-1f3ff": "old-man-dark-skin-tone",
  "1f474-1f3fb": "old-man-light-skin-tone",
  "1f474-1f3fe": "old-man-medium-dark-skin-tone",
  "1f474-1f3fc": "old-man-medium-light-skin-tone",
  "1f474-1f3fd": "old-man-medium-skin-tone",
  "1f475": "old-woman",
  "1f475-1f3ff": "old-woman-dark-skin-tone",
  "1f475-1f3fb": "old-woman-light-skin-tone",
  "1f475-1f3fe": "old-woman-medium-dark-skin-tone",
  "1f475-1f3fc": "old-woman-medium-light-skin-tone",
  "1f475-1f3fd": "old-woman-medium-skin-tone",
  "1f9d3": "older-person",
  "1f9d3-1f3ff": "older-person-dark-skin-tone",
  "1f9d3-1f3fb": "older-person-light-skin-tone",
  "1f9d3-1f3fe": "older-person-medium-dark-skin-tone",
  "1f9d3-1f3fc": "older-person-medium-light-skin-tone",
  "1f9d3-1f3fd": "older-person-medium-skin-tone",
  "1fad2": "olive",
  "1f549": "om",
  "1f51b": "on-exclamation-arrow",
  "1f698": "oncoming-automobile",
  "1f68d": "oncoming-bus",
  "1f44a": "oncoming-fist",
  "1f44a-1f3ff": "oncoming-fist-dark-skin-tone",
  "1f44a-1f3fb": "oncoming-fist-light-skin-tone",
  "1f44a-1f3fe": "oncoming-fist-medium-dark-skin-tone",
  "1f44a-1f3fc": "oncoming-fist-medium-light-skin-tone",
  "1f44a-1f3fd": "oncoming-fist-medium-skin-tone",
  "1f694": "oncoming-police-car",
  "1f696": "oncoming-taxi",
  "1f550": "one-oclock",
  "1fa71": "one-piece-swimsuit",
  "1f55c": "one-thirty",
  "1f9c5": "onion",
  "1f4d6": "open-book",
  "1f4c2": "open-file-folder",
  "1f450": "open-hands",
  "1f450-1f3ff": "open-hands-dark-skin-tone",
  "1f450-1f3fb": "open-hands-light-skin-tone",
  "1f450-1f3fe": "open-hands-medium-dark-skin-tone",
  "1f450-1f3fc": "open-hands-medium-light-skin-tone",
  "1f450-1f3fd": "open-hands-medium-skin-tone",
  "1f4ed": "open-mailbox-with-lowered-flag",
  "1f4ec": "open-mailbox-with-raised-flag",
  "26ce": "ophiuchus",
  "1f4bf": "optical-disk",
  "1f4d9": "orange-book",
  "1f7e0": "orange-circle",
  "1f9e1": "orange-heart",
  "1f7e7": "orange-square",
  "1f9a7": "orangutan",
  "1f9a6": "otter",
  "1f4e4": "outbox-tray",
  "1f989": "owl",
  "1f402": "ox",
  "1f9aa": "oyster",
  "1f17f": "p-button",
  "1f4e6": "package",
  "1f4c4": "page-facing-up",
  "1f4c3": "page-with-curl",
  "1f4df": "pager",
  "1f58c": "paintbrush",
  "1faf3": "palm-down-hand",
  "1faf3-1f3ff": "palm-down-hand-dark-skin-tone",
  "1faf3-1f3fb": "palm-down-hand-light-skin-tone",
  "1faf3-1f3fe": "palm-down-hand-medium-dark-skin-tone",
  "1faf3-1f3fc": "palm-down-hand-medium-light-skin-tone",
  "1faf3-1f3fd": "palm-down-hand-medium-skin-tone",
  "1f334": "palm-tree",
  "1faf4": "palm-up-hand",
  "1faf4-1f3ff": "palm-up-hand-dark-skin-tone",
  "1faf4-1f3fb": "palm-up-hand-light-skin-tone",
  "1faf4-1f3fe": "palm-up-hand-medium-dark-skin-tone",
  "1faf4-1f3fc": "palm-up-hand-medium-light-skin-tone",
  "1faf4-1f3fd": "palm-up-hand-medium-skin-tone",
  "1f932": "palms-up-together",
  "1f932-1f3ff": "palms-up-together-dark-skin-tone",
  "1f932-1f3fb": "palms-up-together-light-skin-tone",
  "1f932-1f3fe": "palms-up-together-medium-dark-skin-tone",
  "1f932-1f3fc": "palms-up-together-medium-light-skin-tone",
  "1f932-1f3fd": "palms-up-together-medium-skin-tone",
  "1f95e": "pancakes",
  "1f43c": "panda",
  "1f4ce": "paperclip",
  "1fa82": "parachute",
  "1f99c": "parrot",
  "303d": "part-alternation-mark",
  "1f389": "party-popper",
  "1f973": "partying-face",
  "1f6f3": "passenger-ship",
  "1f6c2": "passport-control",
  "23f8": "pause-button",
  "1f43e": "paw-prints",
  "1fadb": "pea-pod",
  "262e": "peace-symbol",
  "1f351": "peach",
  "1f99a": "peacock",
  "1f95c": "peanuts",
  "1f350": "pear",
  "1f58a": "pen",
  "270f": "pencil",
  "1f427": "penguin",
  "1f614": "pensive-face",
  "1f9d1-200d-1f91d-200d-1f9d1": "people-holding-hands",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-light-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-light-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1fac2": "people-hugging",
  "1f46f": "people-with-bunny-ears",
  "1f93c": "people-wrestling",
  "1f93c-1f3ff": "people-wrestling-dark-skin-tone",
  "1f93c-1f3fb": "people-wrestling-light-skin-tone",
  "1f93c-1f3fe": "people-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc": "people-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd": "people-wrestling-medium-skin-tone",
  "1f3ad": "performing-arts",
  "1f623": "persevering-face",
  "1f9d1": "person",
  "1f9d1-200d-1f9b2": "person-bald",
  "1f9d4": "person-beard",
  "1f6b4": "person-biking",
  "1f6b4-1f3ff": "person-biking-dark-skin-tone",
  "1f6b4-1f3fb": "person-biking-light-skin-tone",
  "1f6b4-1f3fe": "person-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc": "person-biking-medium-light-skin-tone",
  "1f6b4-1f3fd": "person-biking-medium-skin-tone",
  "1f471": "person-blond-hair",
  "26f9": "person-bouncing-ball",
  "26f9-1f3ff": "person-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb": "person-bouncing-ball-light-skin-tone",
  "26f9-1f3fe": "person-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc": "person-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd": "person-bouncing-ball-medium-skin-tone",
  "1f647": "person-bowing",
  "1f647-1f3ff": "person-bowing-dark-skin-tone",
  "1f647-1f3fb": "person-bowing-light-skin-tone",
  "1f647-1f3fe": "person-bowing-medium-dark-skin-tone",
  "1f647-1f3fc": "person-bowing-medium-light-skin-tone",
  "1f647-1f3fd": "person-bowing-medium-skin-tone",
  "1f938": "person-cartwheeling",
  "1f938-1f3ff": "person-cartwheeling-dark-skin-tone",
  "1f938-1f3fb": "person-cartwheeling-light-skin-tone",
  "1f938-1f3fe": "person-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc": "person-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd": "person-cartwheeling-medium-skin-tone",
  "1f9d7": "person-climbing",
  "1f9d7-1f3ff": "person-climbing-dark-skin-tone",
  "1f9d7-1f3fb": "person-climbing-light-skin-tone",
  "1f9d7-1f3fe": "person-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc": "person-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd": "person-climbing-medium-skin-tone",
  "1f9d1-200d-1f9b1": "person-curly-hair",
  "1f9d1-1f3ff": "person-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f9b2": "person-dark-skin-tone-bald",
  "1f9d4-1f3ff": "person-dark-skin-tone-beard",
  "1f471-1f3ff": "person-dark-skin-tone-blond-hair",
  "1f9d1-1f3ff-200d-1f9b1": "person-dark-skin-tone-curly-hair",
  "1f9d1-1f3ff-200d-1f9b0": "person-dark-skin-tone-red-hair",
  "1f9d1-1f3ff-200d-1f9b3": "person-dark-skin-tone-white-hair",
  "1f926": "person-facepalming",
  "1f926-1f3ff": "person-facepalming-dark-skin-tone",
  "1f926-1f3fb": "person-facepalming-light-skin-tone",
  "1f926-1f3fe": "person-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc": "person-facepalming-medium-light-skin-tone",
  "1f926-1f3fd": "person-facepalming-medium-skin-tone",
  "1f9d1-200d-1f37c": "person-feeding-baby",
  "1f9d1-1f3ff-200d-1f37c": "person-feeding-baby-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f37c": "person-feeding-baby-light-skin-tone",
  "1f9d1-1f3fe-200d-1f37c": "person-feeding-baby-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f37c": "person-feeding-baby-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f37c": "person-feeding-baby-medium-skin-tone",
  "1f93a": "person-fencing",
  "1f64d": "person-frowning",
  "1f64d-1f3ff": "person-frowning-dark-skin-tone",
  "1f64d-1f3fb": "person-frowning-light-skin-tone",
  "1f64d-1f3fe": "person-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc": "person-frowning-medium-light-skin-tone",
  "1f64d-1f3fd": "person-frowning-medium-skin-tone",
  "1f645": "person-gesturing-no",
  "1f645-1f3ff": "person-gesturing-no-dark-skin-tone",
  "1f645-1f3fb": "person-gesturing-no-light-skin-tone",
  "1f645-1f3fe": "person-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc": "person-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd": "person-gesturing-no-medium-skin-tone",
  "1f646": "person-gesturing-ok",
  "1f646-1f3ff": "person-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb": "person-gesturing-ok-light-skin-tone",
  "1f646-1f3fe": "person-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc": "person-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd": "person-gesturing-ok-medium-skin-tone",
  "1f487": "person-getting-haircut",
  "1f487-1f3ff": "person-getting-haircut-dark-skin-tone",
  "1f487-1f3fb": "person-getting-haircut-light-skin-tone",
  "1f487-1f3fe": "person-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc": "person-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd": "person-getting-haircut-medium-skin-tone",
  "1f486": "person-getting-massage",
  "1f486-1f3ff": "person-getting-massage-dark-skin-tone",
  "1f486-1f3fb": "person-getting-massage-light-skin-tone",
  "1f486-1f3fe": "person-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc": "person-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd": "person-getting-massage-medium-skin-tone",
  "1f3cc": "person-golfing",
  "1f3cc-1f3ff": "person-golfing-dark-skin-tone",
  "1f3cc-1f3fb": "person-golfing-light-skin-tone",
  "1f3cc-1f3fe": "person-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc": "person-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd": "person-golfing-medium-skin-tone",
  "1f6cc": "person-in-bed",
  "1f6cc-1f3ff": "person-in-bed-dark-skin-tone",
  "1f6cc-1f3fb": "person-in-bed-light-skin-tone",
  "1f6cc-1f3fe": "person-in-bed-medium-dark-skin-tone",
  "1f6cc-1f3fc": "person-in-bed-medium-light-skin-tone",
  "1f6cc-1f3fd": "person-in-bed-medium-skin-tone",
  "1f9d8": "person-in-lotus-position",
  "1f9d8-1f3ff": "person-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb": "person-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe": "person-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc": "person-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd": "person-in-lotus-position-medium-skin-tone",
  "1f9d1-200d-1f9bd": "person-in-manual-wheelchair",
  "1f9d1-1f3ff-200d-1f9bd": "person-in-manual-wheelchair-dark-skin-tone",
  "1f9d1-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right",
  "1f9d1-1f3ff-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9bd": "person-in-manual-wheelchair-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bd": "person-in-manual-wheelchair-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bd": "person-in-manual-wheelchair-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bd": "person-in-manual-wheelchair-medium-skin-tone",
  "1f9d1-200d-1f9bc": "person-in-motorized-wheelchair",
  "1f9d1-1f3ff-200d-1f9bc": "person-in-motorized-wheelchair-dark-skin-tone",
  "1f9d1-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right",
  "1f9d1-1f3ff-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9bc": "person-in-motorized-wheelchair-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bc": "person-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bc": "person-in-motorized-wheelchair-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bc": "person-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6": "person-in-steamy-room",
  "1f9d6-1f3ff": "person-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb": "person-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe": "person-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc": "person-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd": "person-in-steamy-room-medium-skin-tone",
  "1f574": "person-in-suit-levitating",
  "1f574-1f3ff": "person-in-suit-levitating-dark-skin-tone",
  "1f574-1f3fb": "person-in-suit-levitating-light-skin-tone",
  "1f574-1f3fe": "person-in-suit-levitating-medium-dark-skin-tone",
  "1f574-1f3fc": "person-in-suit-levitating-medium-light-skin-tone",
  "1f574-1f3fd": "person-in-suit-levitating-medium-skin-tone",
  "1f935": "person-in-tuxedo",
  "1f935-1f3ff": "person-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb": "person-in-tuxedo-light-skin-tone",
  "1f935-1f3fe": "person-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc": "person-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd": "person-in-tuxedo-medium-skin-tone",
  "1f939": "person-juggling",
  "1f939-1f3ff": "person-juggling-dark-skin-tone",
  "1f939-1f3fb": "person-juggling-light-skin-tone",
  "1f939-1f3fe": "person-juggling-medium-dark-skin-tone",
  "1f939-1f3fc": "person-juggling-medium-light-skin-tone",
  "1f939-1f3fd": "person-juggling-medium-skin-tone",
  "1f9ce": "person-kneeling",
  "1f9ce-1f3ff": "person-kneeling-dark-skin-tone",
  "1f9ce-200d-27a1": "person-kneeling-facing-right",
  "1f9ce-1f3ff-200d-27a1": "person-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-27a1": "person-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-27a1": "person-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-27a1": "person-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-27a1": "person-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb": "person-kneeling-light-skin-tone",
  "1f9ce-1f3fe": "person-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc": "person-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd": "person-kneeling-medium-skin-tone",
  "1f3cb": "person-lifting-weights",
  "1f3cb-1f3ff": "person-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb": "person-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe": "person-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc": "person-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd": "person-lifting-weights-medium-skin-tone",
  "1f9d1-1f3fb": "person-light-skin-tone",
  "1f9d1-1f3fb-200d-1f9b2": "person-light-skin-tone-bald",
  "1f9d4-1f3fb": "person-light-skin-tone-beard",
  "1f471-1f3fb": "person-light-skin-tone-blond-hair",
  "1f9d1-1f3fb-200d-1f9b1": "person-light-skin-tone-curly-hair",
  "1f9d1-1f3fb-200d-1f9b0": "person-light-skin-tone-red-hair",
  "1f9d1-1f3fb-200d-1f9b3": "person-light-skin-tone-white-hair",
  "1f9d1-1f3fe": "person-medium-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f9b2": "person-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe": "person-medium-dark-skin-tone-beard",
  "1f471-1f3fe": "person-medium-dark-skin-tone-blond-hair",
  "1f9d1-1f3fe-200d-1f9b1": "person-medium-dark-skin-tone-curly-hair",
  "1f9d1-1f3fe-200d-1f9b0": "person-medium-dark-skin-tone-red-hair",
  "1f9d1-1f3fe-200d-1f9b3": "person-medium-dark-skin-tone-white-hair",
  "1f9d1-1f3fc": "person-medium-light-skin-tone",
  "1f9d1-1f3fc-200d-1f9b2": "person-medium-light-skin-tone-bald",
  "1f9d4-1f3fc": "person-medium-light-skin-tone-beard",
  "1f471-1f3fc": "person-medium-light-skin-tone-blond-hair",
  "1f9d1-1f3fc-200d-1f9b1": "person-medium-light-skin-tone-curly-hair",
  "1f9d1-1f3fc-200d-1f9b0": "person-medium-light-skin-tone-red-hair",
  "1f9d1-1f3fc-200d-1f9b3": "person-medium-light-skin-tone-white-hair",
  "1f9d1-1f3fd": "person-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f9b2": "person-medium-skin-tone-bald",
  "1f9d4-1f3fd": "person-medium-skin-tone-beard",
  "1f471-1f3fd": "person-medium-skin-tone-blond-hair",
  "1f9d1-1f3fd-200d-1f9b1": "person-medium-skin-tone-curly-hair",
  "1f9d1-1f3fd-200d-1f9b0": "person-medium-skin-tone-red-hair",
  "1f9d1-1f3fd-200d-1f9b3": "person-medium-skin-tone-white-hair",
  "1f6b5": "person-mountain-biking",
  "1f6b5-1f3ff": "person-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb": "person-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe": "person-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc": "person-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd": "person-mountain-biking-medium-skin-tone",
  "1f93e": "person-playing-handball",
  "1f93e-1f3ff": "person-playing-handball-dark-skin-tone",
  "1f93e-1f3fb": "person-playing-handball-light-skin-tone",
  "1f93e-1f3fe": "person-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc": "person-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd": "person-playing-handball-medium-skin-tone",
  "1f93d": "person-playing-water-polo",
  "1f93d-1f3ff": "person-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb": "person-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe": "person-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc": "person-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd": "person-playing-water-polo-medium-skin-tone",
  "1f64e": "person-pouting",
  "1f64e-1f3ff": "person-pouting-dark-skin-tone",
  "1f64e-1f3fb": "person-pouting-light-skin-tone",
  "1f64e-1f3fe": "person-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc": "person-pouting-medium-light-skin-tone",
  "1f64e-1f3fd": "person-pouting-medium-skin-tone",
  "1f64b": "person-raising-hand",
  "1f64b-1f3ff": "person-raising-hand-dark-skin-tone",
  "1f64b-1f3fb": "person-raising-hand-light-skin-tone",
  "1f64b-1f3fe": "person-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc": "person-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd": "person-raising-hand-medium-skin-tone",
  "1f9d1-200d-1f9b0": "person-red-hair",
  "1f6a3": "person-rowing-boat",
  "1f6a3-1f3ff": "person-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb": "person-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe": "person-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc": "person-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd": "person-rowing-boat-medium-skin-tone",
  "1f3c3": "person-running",
  "1f3c3-1f3ff": "person-running-dark-skin-tone",
  "1f3c3-200d-27a1": "person-running-facing-right",
  "1f3c3-1f3ff-200d-27a1": "person-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-27a1": "person-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-27a1": "person-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-27a1": "person-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-27a1": "person-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb": "person-running-light-skin-tone",
  "1f3c3-1f3fe": "person-running-medium-dark-skin-tone",
  "1f3c3-1f3fc": "person-running-medium-light-skin-tone",
  "1f3c3-1f3fd": "person-running-medium-skin-tone",
  "1f937": "person-shrugging",
  "1f937-1f3ff": "person-shrugging-dark-skin-tone",
  "1f937-1f3fb": "person-shrugging-light-skin-tone",
  "1f937-1f3fe": "person-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc": "person-shrugging-medium-light-skin-tone",
  "1f937-1f3fd": "person-shrugging-medium-skin-tone",
  "1f9cd": "person-standing",
  "1f9cd-1f3ff": "person-standing-dark-skin-tone",
  "1f9cd-1f3fb": "person-standing-light-skin-tone",
  "1f9cd-1f3fe": "person-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc": "person-standing-medium-light-skin-tone",
  "1f9cd-1f3fd": "person-standing-medium-skin-tone",
  "1f3c4": "person-surfing",
  "1f3c4-1f3ff": "person-surfing-dark-skin-tone",
  "1f3c4-1f3fb": "person-surfing-light-skin-tone",
  "1f3c4-1f3fe": "person-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc": "person-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd": "person-surfing-medium-skin-tone",
  "1f3ca": "person-swimming",
  "1f3ca-1f3ff": "person-swimming-dark-skin-tone",
  "1f3ca-1f3fb": "person-swimming-light-skin-tone",
  "1f3ca-1f3fe": "person-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc": "person-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd": "person-swimming-medium-skin-tone",
  "1f6c0": "person-taking-bath",
  "1f6c0-1f3ff": "person-taking-bath-dark-skin-tone",
  "1f6c0-1f3fb": "person-taking-bath-light-skin-tone",
  "1f6c0-1f3fe": "person-taking-bath-medium-dark-skin-tone",
  "1f6c0-1f3fc": "person-taking-bath-medium-light-skin-tone",
  "1f6c0-1f3fd": "person-taking-bath-medium-skin-tone",
  "1f481": "person-tipping-hand",
  "1f481-1f3ff": "person-tipping-hand-dark-skin-tone",
  "1f481-1f3fb": "person-tipping-hand-light-skin-tone",
  "1f481-1f3fe": "person-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc": "person-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd": "person-tipping-hand-medium-skin-tone",
  "1f6b6": "person-walking",
  "1f6b6-1f3ff": "person-walking-dark-skin-tone",
  "1f6b6-200d-27a1": "person-walking-facing-right",
  "1f6b6-1f3ff-200d-27a1": "person-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-27a1": "person-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-27a1": "person-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-27a1": "person-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-27a1": "person-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb": "person-walking-light-skin-tone",
  "1f6b6-1f3fe": "person-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc": "person-walking-medium-light-skin-tone",
  "1f6b6-1f3fd": "person-walking-medium-skin-tone",
  "1f473": "person-wearing-turban",
  "1f473-1f3ff": "person-wearing-turban-dark-skin-tone",
  "1f473-1f3fb": "person-wearing-turban-light-skin-tone",
  "1f473-1f3fe": "person-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc": "person-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd": "person-wearing-turban-medium-skin-tone",
  "1f9d1-200d-1f9b3": "person-white-hair",
  "1fac5": "person-with-crown",
  "1fac5-1f3ff": "person-with-crown-dark-skin-tone",
  "1fac5-1f3fb": "person-with-crown-light-skin-tone",
  "1fac5-1f3fe": "person-with-crown-medium-dark-skin-tone",
  "1fac5-1f3fc": "person-with-crown-medium-light-skin-tone",
  "1fac5-1f3fd": "person-with-crown-medium-skin-tone",
  "1f472": "person-with-skullcap",
  "1f472-1f3ff": "person-with-skullcap-dark-skin-tone",
  "1f472-1f3fb": "person-with-skullcap-light-skin-tone",
  "1f472-1f3fe": "person-with-skullcap-medium-dark-skin-tone",
  "1f472-1f3fc": "person-with-skullcap-medium-light-skin-tone",
  "1f472-1f3fd": "person-with-skullcap-medium-skin-tone",
  "1f470": "person-with-veil",
  "1f470-1f3ff": "person-with-veil-dark-skin-tone",
  "1f470-1f3fb": "person-with-veil-light-skin-tone",
  "1f470-1f3fe": "person-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc": "person-with-veil-medium-light-skin-tone",
  "1f470-1f3fd": "person-with-veil-medium-skin-tone",
  "1f9d1-200d-1f9af": "person-with-white-cane",
  "1f9d1-1f3ff-200d-1f9af": "person-with-white-cane-dark-skin-tone",
  "1f9d1-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right",
  "1f9d1-1f3ff-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9af": "person-with-white-cane-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9af": "person-with-white-cane-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9af": "person-with-white-cane-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9af": "person-with-white-cane-medium-skin-tone",
  "1f9eb": "petri-dish",
  "1f426-200d-1f525": "phoenix",
  "26cf": "pick",
  "1f6fb": "pickup-truck",
  "1f967": "pie",
  "1f416": "pig",
  "1f437": "pig-face",
  "1f43d": "pig-nose",
  "1f4a9": "pile-of-poo",
  "1f48a": "pill",
  "1f9d1-200d-2708": "pilot",
  "1f9d1-1f3ff-200d-2708": "pilot-dark-skin-tone",
  "1f9d1-1f3fb-200d-2708": "pilot-light-skin-tone",
  "1f9d1-1f3fe-200d-2708": "pilot-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2708": "pilot-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2708": "pilot-medium-skin-tone",
  "1fa85": "pinata",
  "1f90c": "pinched-fingers",
  "1f90c-1f3ff": "pinched-fingers-dark-skin-tone",
  "1f90c-1f3fb": "pinched-fingers-light-skin-tone",
  "1f90c-1f3fe": "pinched-fingers-medium-dark-skin-tone",
  "1f90c-1f3fc": "pinched-fingers-medium-light-skin-tone",
  "1f90c-1f3fd": "pinched-fingers-medium-skin-tone",
  "1f90f": "pinching-hand",
  "1f90f-1f3ff": "pinching-hand-dark-skin-tone",
  "1f90f-1f3fb": "pinching-hand-light-skin-tone",
  "1f90f-1f3fe": "pinching-hand-medium-dark-skin-tone",
  "1f90f-1f3fc": "pinching-hand-medium-light-skin-tone",
  "1f90f-1f3fd": "pinching-hand-medium-skin-tone",
  "1f38d": "pine-decoration",
  "1f34d": "pineapple",
  "1f3d3": "ping-pong",
  "1fa77": "pink-heart",
  "1f3f4-200d-2620": "pirate-flag",
  "1f355": "pizza",
  "1faa7": "placard",
  "1f6d0": "place-of-worship",
  "25b6": "play-button",
  "23ef": "play-or-pause-button",
  "1f6dd": "playground-slide",
  "1f97a": "pleading-face",
  "1faa0": "plunger",
  "1f43b-200d-2744": "polar-bear",
  "1f693": "police-car",
  "1f6a8": "police-car-light",
  "1f46e": "police-officer",
  "1f46e-1f3ff": "police-officer-dark-skin-tone",
  "1f46e-1f3fb": "police-officer-light-skin-tone",
  "1f46e-1f3fe": "police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc": "police-officer-medium-light-skin-tone",
  "1f46e-1f3fd": "police-officer-medium-skin-tone",
  "1f429": "poodle",
  "1f3b1": "pool-8-ball",
  "1f37f": "popcorn",
  "1f3e4": "post-office",
  "1f4ef": "postal-horn",
  "1f4ee": "postbox",
  "1f372": "pot-of-food",
  "1f6b0": "potable-water",
  "1f954": "potato",
  "1fab4": "potted-plant",
  "1f357": "poultry-leg",
  "1f4b7": "pound-banknote",
  "1fad7": "pouring-liquid",
  "1f63e": "pouting-cat",
  "1f4ff": "prayer-beads",
  "1fac3": "pregnant-man",
  "1fac3-1f3ff": "pregnant-man-dark-skin-tone",
  "1fac3-1f3fb": "pregnant-man-light-skin-tone",
  "1fac3-1f3fe": "pregnant-man-medium-dark-skin-tone",
  "1fac3-1f3fc": "pregnant-man-medium-light-skin-tone",
  "1fac3-1f3fd": "pregnant-man-medium-skin-tone",
  "1fac4": "pregnant-person",
  "1fac4-1f3ff": "pregnant-person-dark-skin-tone",
  "1fac4-1f3fb": "pregnant-person-light-skin-tone",
  "1fac4-1f3fe": "pregnant-person-medium-dark-skin-tone",
  "1fac4-1f3fc": "pregnant-person-medium-light-skin-tone",
  "1fac4-1f3fd": "pregnant-person-medium-skin-tone",
  "1f930": "pregnant-woman",
  "1f930-1f3ff": "pregnant-woman-dark-skin-tone",
  "1f930-1f3fb": "pregnant-woman-light-skin-tone",
  "1f930-1f3fe": "pregnant-woman-medium-dark-skin-tone",
  "1f930-1f3fc": "pregnant-woman-medium-light-skin-tone",
  "1f930-1f3fd": "pregnant-woman-medium-skin-tone",
  "1f968": "pretzel",
  "1f934": "prince",
  "1f934-1f3ff": "prince-dark-skin-tone",
  "1f934-1f3fb": "prince-light-skin-tone",
  "1f934-1f3fe": "prince-medium-dark-skin-tone",
  "1f934-1f3fc": "prince-medium-light-skin-tone",
  "1f934-1f3fd": "prince-medium-skin-tone",
  "1f478": "princess",
  "1f478-1f3ff": "princess-dark-skin-tone",
  "1f478-1f3fb": "princess-light-skin-tone",
  "1f478-1f3fe": "princess-medium-dark-skin-tone",
  "1f478-1f3fc": "princess-medium-light-skin-tone",
  "1f478-1f3fd": "princess-medium-skin-tone",
  "1f5a8": "printer",
  "1f6ab": "prohibited",
  "1f7e3": "purple-circle",
  "1f49c": "purple-heart",
  "1f7ea": "purple-square",
  "1f45b": "purse",
  "1f4cc": "pushpin",
  "1f9e9": "puzzle-piece",
  "1f407": "rabbit",
  "1f430": "rabbit-face",
  "1f99d": "raccoon",
  "1f3ce": "racing-car",
  "1f4fb": "radio",
  "1f518": "radio-button",
  "1f683": "railway-car",
  "1f6e4": "railway-track",
  "1f308": "rainbow",
  "1f3f3-200d-1f308": "rainbow-flag",
  "1f91a": "raised-back-of-hand",
  "1f91a-1f3ff": "raised-back-of-hand-dark-skin-tone",
  "1f91a-1f3fb": "raised-back-of-hand-light-skin-tone",
  "1f91a-1f3fe": "raised-back-of-hand-medium-dark-skin-tone",
  "1f91a-1f3fc": "raised-back-of-hand-medium-light-skin-tone",
  "1f91a-1f3fd": "raised-back-of-hand-medium-skin-tone",
  "270a": "raised-fist",
  "270a-1f3ff": "raised-fist-dark-skin-tone",
  "270a-1f3fb": "raised-fist-light-skin-tone",
  "270a-1f3fe": "raised-fist-medium-dark-skin-tone",
  "270a-1f3fc": "raised-fist-medium-light-skin-tone",
  "270a-1f3fd": "raised-fist-medium-skin-tone",
  "270b": "raised-hand",
  "270b-1f3ff": "raised-hand-dark-skin-tone",
  "270b-1f3fb": "raised-hand-light-skin-tone",
  "270b-1f3fe": "raised-hand-medium-dark-skin-tone",
  "270b-1f3fc": "raised-hand-medium-light-skin-tone",
  "270b-1f3fd": "raised-hand-medium-skin-tone",
  "1f64c": "raising-hands",
  "1f64c-1f3ff": "raising-hands-dark-skin-tone",
  "1f64c-1f3fb": "raising-hands-light-skin-tone",
  "1f64c-1f3fe": "raising-hands-medium-dark-skin-tone",
  "1f64c-1f3fc": "raising-hands-medium-light-skin-tone",
  "1f64c-1f3fd": "raising-hands-medium-skin-tone",
  "1f40f": "ram",
  "1f400": "rat",
  "1fa92": "razor",
  "1f9fe": "receipt",
  "23fa": "record-button",
  "267b": "recycling-symbol",
  "1f34e": "red-apple",
  "1f534": "red-circle",
  "1f9e7": "red-envelope",
  "1f3ee": "red-paper-lantern",
  "1f7e5": "red-square",
  "1f53b": "red-triangle-pointed-down",
  "1f53a": "red-triangle-pointed-up",
  "00ae": "registered",
  "1f60c": "relieved-face",
  "1f397": "reminder-ribbon",
  "1f501": "repeat-button",
  "1f502": "repeat-single-button",
  "26d1": "rescue-workers-helmet",
  "1f6bb": "restroom",
  "25c0": "reverse-button",
  "1f49e": "revolving-hearts",
  "1f98f": "rhinoceros",
  "1f380": "ribbon",
  "1f359": "rice-ball",
  "1f358": "rice-cracker",
  "1f5ef": "right-anger-bubble",
  "27a1": "right-arrow",
  "21a9": "right-arrow-curving-left",
  "1f91c": "right-facing-fist",
  "1f91c-1f3ff": "right-facing-fist-dark-skin-tone",
  "1f91c-1f3fb": "right-facing-fist-light-skin-tone",
  "1f91c-1f3fe": "right-facing-fist-medium-dark-skin-tone",
  "1f91c-1f3fc": "right-facing-fist-medium-light-skin-tone",
  "1f91c-1f3fd": "right-facing-fist-medium-skin-tone",
  "1faf1": "rightwards-hand",
  "1faf1-1f3ff": "rightwards-hand-dark-skin-tone",
  "1faf1-1f3fb": "rightwards-hand-light-skin-tone",
  "1faf1-1f3fe": "rightwards-hand-medium-dark-skin-tone",
  "1faf1-1f3fc": "rightwards-hand-medium-light-skin-tone",
  "1faf1-1f3fd": "rightwards-hand-medium-skin-tone",
  "1faf8": "rightwards-pushing-hand",
  "1faf8-1f3ff": "rightwards-pushing-hand-dark-skin-tone",
  "1faf8-1f3fb": "rightwards-pushing-hand-light-skin-tone",
  "1faf8-1f3fe": "rightwards-pushing-hand-medium-dark-skin-tone",
  "1faf8-1f3fc": "rightwards-pushing-hand-medium-light-skin-tone",
  "1faf8-1f3fd": "rightwards-pushing-hand-medium-skin-tone",
  "1f48d": "ring",
  "1f6df": "ring-buoy",
  "1fa90": "ringed-planet",
  "1f360": "roasted-sweet-potato",
  "1f916": "robot",
  "1faa8": "rock",
  "1f680": "rocket",
  "1f9fb": "roll-of-paper",
  "1f5de": "rolled-up-newspaper",
  "1f3a2": "roller-coaster",
  "1f6fc": "roller-skate",
  "1f923": "rolling-on-the-floor-laughing",
  "1f413": "rooster",
  "1f339": "rose",
  "1f3f5": "rosette",
  "1f4cd": "round-pushpin",
  "1f3c9": "rugby-football",
  "1f3bd": "running-shirt",
  "1f45f": "running-shoe",
  "1f625": "sad-but-relieved-face",
  "1f9f7": "safety-pin",
  "1f9ba": "safety-vest",
  "26f5": "sailboat",
  "1f376": "sake",
  "1f9c2": "salt",
  "1fae1": "saluting-face",
  "1f96a": "sandwich",
  "1f385": "santa-claus",
  "1f385-1f3ff": "santa-claus-dark-skin-tone",
  "1f385-1f3fb": "santa-claus-light-skin-tone",
  "1f385-1f3fe": "santa-claus-medium-dark-skin-tone",
  "1f385-1f3fc": "santa-claus-medium-light-skin-tone",
  "1f385-1f3fd": "santa-claus-medium-skin-tone",
  "1f97b": "sari",
  "1f6f0": "satellite",
  "1f4e1": "satellite-antenna",
  "1f995": "sauropod",
  "1f3b7": "saxophone",
  "1f9e3": "scarf",
  "1f3eb": "school",
  "1f9d1-200d-1f52c": "scientist",
  "1f9d1-1f3ff-200d-1f52c": "scientist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f52c": "scientist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f52c": "scientist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f52c": "scientist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f52c": "scientist-medium-skin-tone",
  "264f": "scorpio",
  "1f982": "scorpion",
  "1fa9b": "screwdriver",
  "1f4dc": "scroll",
  "1f9ad": "seal",
  "1f4ba": "seat",
  "1f648": "see-no-evil-monkey",
  "1f331": "seedling",
  "1f933": "selfie",
  "1f933-1f3ff": "selfie-dark-skin-tone",
  "1f933-1f3fb": "selfie-light-skin-tone",
  "1f933-1f3fe": "selfie-medium-dark-skin-tone",
  "1f933-1f3fc": "selfie-medium-light-skin-tone",
  "1f933-1f3fd": "selfie-medium-skin-tone",
  "1f415-200d-1f9ba": "service-dog",
  "1f556": "seven-oclock",
  "1f562": "seven-thirty",
  "1faa1": "sewing-needle",
  "1fae8": "shaking-face",
  "1f958": "shallow-pan-of-food",
  "1f988": "shark",
  "1f367": "shaved-ice",
  "1f33e": "sheaf-of-rice",
  "1f6e1": "shield",
  "26e9": "shinto-shrine",
  "1f6a2": "ship",
  "1f320": "shooting-star",
  "1f6cd": "shopping-bags",
  "1f6d2": "shopping-cart",
  "1f370": "shortcake",
  "1fa73": "shorts",
  "1f6bf": "shower",
  "1f990": "shrimp",
  "1f500": "shuffle-tracks-button",
  "1f92b": "shushing-face",
  "1f918": "sign-of-the-horns",
  "1f918-1f3ff": "sign-of-the-horns-dark-skin-tone",
  "1f918-1f3fb": "sign-of-the-horns-light-skin-tone",
  "1f918-1f3fe": "sign-of-the-horns-medium-dark-skin-tone",
  "1f918-1f3fc": "sign-of-the-horns-medium-light-skin-tone",
  "1f918-1f3fd": "sign-of-the-horns-medium-skin-tone",
  "1f9d1-200d-1f3a4": "singer",
  "1f9d1-1f3ff-200d-1f3a4": "singer-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3a4": "singer-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3a4": "singer-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3a4": "singer-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3a4": "singer-medium-skin-tone",
  "1f555": "six-oclock",
  "1f561": "six-thirty",
  "1f6f9": "skateboard",
  "26f7": "skier",
  "1f3bf": "skis",
  "1f480": "skull",
  "1f9a8": "skunk",
  "1f6f7": "sled",
  "1f634": "sleeping-face",
  "1f62a": "sleepy-face",
  "1f641": "slightly-frowning-face",
  "1f642": "slightly-smiling-face",
  "1f3b0": "slot-machine",
  "1f9a5": "sloth",
  "1f6e9": "small-airplane",
  "1f539": "small-blue-diamond",
  "1f538": "small-orange-diamond",
  "1f63b": "smiling-cat-with-heart-eyes",
  "263a": "smiling-face",
  "1f607": "smiling-face-with-halo",
  "1f60d": "smiling-face-with-heart-eyes",
  "1f970": "smiling-face-with-hearts",
  "1f608": "smiling-face-with-horns",
  "1f917": "smiling-face-with-open-hands",
  "1f60a": "smiling-face-with-smiling-eyes",
  "1f60e": "smiling-face-with-sunglasses",
  "1f972": "smiling-face-with-tear",
  "1f60f": "smirking-face",
  "1f40c": "snail",
  "1f40d": "snake",
  "1f927": "sneezing-face",
  "1f3d4": "snow-capped-mountain",
  "1f3c2": "snowboarder",
  "1f3c2-1f3ff": "snowboarder-dark-skin-tone",
  "1f3c2-1f3fb": "snowboarder-light-skin-tone",
  "1f3c2-1f3fe": "snowboarder-medium-dark-skin-tone",
  "1f3c2-1f3fc": "snowboarder-medium-light-skin-tone",
  "1f3c2-1f3fd": "snowboarder-medium-skin-tone",
  "26c4": "snowman-without-snow",
  "1f9fc": "soap",
  "26bd": "soccer-ball",
  "1f9e6": "socks",
  "1f366": "soft-ice-cream",
  "1f94e": "softball",
  "1f51c": "soon-arrow",
  "1f198": "sos-button",
  "1f35d": "spaghetti",
  "1f387": "sparkler",
  "1f496": "sparkling-heart",
  "1f64a": "speak-no-evil-monkey",
  "1f50a": "speaker-high-volume",
  "1f508": "speaker-low-volume",
  "1f509": "speaker-medium-volume",
  "1f5e3": "speaking-head",
  "1f4ac": "speech-balloon",
  "1f6a4": "speedboat",
  "1f577": "spider",
  "1f578": "spider-web",
  "1f5d3": "spiral-calendar",
  "1f5d2": "spiral-notepad",
  "1f41a": "spiral-shell",
  "1f9fd": "sponge",
  "1f944": "spoon",
  "1f699": "sport-utility-vehicle",
  "1f3c5": "sports-medal",
  "1f433": "spouting-whale",
  "1f991": "squid",
  "1f61d": "squinting-face-with-tongue",
  "1f3df": "stadium",
  "2b50": "star",
  "262a": "star-and-crescent",
  "1f929": "star-struck",
  "1f689": "station",
  "1f5fd": "statue-of-liberty",
  "1f35c": "steaming-bowl",
  "1fa7a": "stethoscope",
  "23f9": "stop-button",
  "1f6d1": "stop-sign",
  "23f1": "stopwatch",
  "1f4cf": "straight-ruler",
  "1f353": "strawberry",
  "1f9d1-200d-1f393": "student",
  "1f9d1-1f3ff-200d-1f393": "student-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f393": "student-light-skin-tone",
  "1f9d1-1f3fe-200d-1f393": "student-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f393": "student-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f393": "student-medium-skin-tone",
  "1f399": "studio-microphone",
  "1f959": "stuffed-flatbread",
  "26c5": "sun-behind-cloud",
  "1f325": "sun-behind-large-cloud",
  "1f326": "sun-behind-rain-cloud",
  "1f324": "sun-behind-small-cloud",
  "1f31e": "sun-with-face",
  "1f33b": "sunflower",
  "1f576": "sunglasses",
  "1f305": "sunrise",
  "1f304": "sunrise-over-mountains",
  "1f307": "sunset",
  "1f9b8": "superhero",
  "1f9b8-1f3ff": "superhero-dark-skin-tone",
  "1f9b8-1f3fb": "superhero-light-skin-tone",
  "1f9b8-1f3fe": "superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc": "superhero-medium-light-skin-tone",
  "1f9b8-1f3fd": "superhero-medium-skin-tone",
  "1f9b9": "supervillain",
  "1f9b9-1f3ff": "supervillain-dark-skin-tone",
  "1f9b9-1f3fb": "supervillain-light-skin-tone",
  "1f9b9-1f3fe": "supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc": "supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd": "supervillain-medium-skin-tone",
  "1f363": "sushi",
  "1f69f": "suspension-railway",
  "1f9a2": "swan",
  "1f4a6": "sweat-droplets",
  "1f54d": "synagogue",
  "1f489": "syringe",
  "1f996": "t-rex",
  "1f455": "t-shirt",
  "1f32e": "taco",
  "1f961": "takeout-box",
  "1fad4": "tamale",
  "1f38b": "tanabata-tree",
  "1f34a": "tangerine",
  "1f695": "taxi",
  "1f9d1-200d-1f3eb": "teacher",
  "1f9d1-1f3ff-200d-1f3eb": "teacher-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3eb": "teacher-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3eb": "teacher-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3eb": "teacher-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3eb": "teacher-medium-skin-tone",
  "1f375": "teacup-without-handle",
  "1fad6": "teapot",
  "1f4c6": "tear-off-calendar",
  "1f9d1-200d-1f4bb": "technologist",
  "1f9d1-1f3ff-200d-1f4bb": "technologist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f4bb": "technologist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f4bb": "technologist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f4bb": "technologist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f4bb": "technologist-medium-skin-tone",
  "1f9f8": "teddy-bear",
  "260e": "telephone",
  "1f4de": "telephone-receiver",
  "1f52d": "telescope",
  "1f4fa": "television",
  "1f559": "ten-oclock",
  "1f565": "ten-thirty",
  "1f3be": "tennis",
  "26fa": "tent",
  "1f9ea": "test-tube",
  "1f321": "thermometer",
  "1f914": "thinking-face",
  "1fa74": "thong-sandal",
  "1f4ad": "thought-balloon",
  "1f9f5": "thread",
  "1f552": "three-oclock",
  "1f55e": "three-thirty",
  "1f44e": "thumbs-down",
  "1f44e-1f3ff": "thumbs-down-dark-skin-tone",
  "1f44e-1f3fb": "thumbs-down-light-skin-tone",
  "1f44e-1f3fe": "thumbs-down-medium-dark-skin-tone",
  "1f44e-1f3fc": "thumbs-down-medium-light-skin-tone",
  "1f44e-1f3fd": "thumbs-down-medium-skin-tone",
  "1f44d": "thumbs-up",
  "1f44d-1f3ff": "thumbs-up-dark-skin-tone",
  "1f44d-1f3fb": "thumbs-up-light-skin-tone",
  "1f44d-1f3fe": "thumbs-up-medium-dark-skin-tone",
  "1f44d-1f3fc": "thumbs-up-medium-light-skin-tone",
  "1f44d-1f3fd": "thumbs-up-medium-skin-tone",
  "1f3ab": "ticket",
  "1f405": "tiger",
  "1f42f": "tiger-face",
  "23f2": "timer-clock",
  "1f62b": "tired-face",
  "1f6bd": "toilet",
  "1f5fc": "tokyo-tower",
  "1f345": "tomato",
  "1f445": "tongue",
  "1f9f0": "toolbox",
  "1f9b7": "tooth",
  "1faa5": "toothbrush",
  "1f51d": "top-arrow",
  "1f3a9": "top-hat",
  "1f32a": "tornado",
  "1f5b2": "trackball",
  "1f69c": "tractor",
  "1f686": "train",
  "1f68a": "tram",
  "1f68b": "tram-car",
  "1f3f3-200d-26a7": "transgender-flag",
  "26a7": "transgender-symbol",
  "1f6a9": "triangular-flag",
  "1f4d0": "triangular-ruler",
  "1f531": "trident-emblem",
  "1f9cc": "troll",
  "1f68e": "trolleybus",
  "1f3c6": "trophy",
  "1f379": "tropical-drink",
  "1f420": "tropical-fish",
  "1f3ba": "trumpet",
  "1f337": "tulip",
  "1f943": "tumbler-glass",
  "1f983": "turkey",
  "1f422": "turtle",
  "1f55b": "twelve-oclock",
  "1f567": "twelve-thirty",
  "1f495": "two-hearts",
  "1f42b": "two-hump-camel",
  "1f551": "two-oclock",
  "1f55d": "two-thirty",
  "26f1": "umbrella-on-ground",
  "1f612": "unamused-face",
  "1f984": "unicorn",
  "fe82b": "unknown-flag",
  "1f513": "unlocked",
  "2b06": "up-arrow",
  "1f199": "up-exclamation-button",
  "1f643": "upside-down-face",
  "1f53c": "upwards-button",
  "1f9db": "vampire",
  "1f9db-1f3ff": "vampire-dark-skin-tone",
  "1f9db-1f3fb": "vampire-light-skin-tone",
  "1f9db-1f3fe": "vampire-medium-dark-skin-tone",
  "1f9db-1f3fc": "vampire-medium-light-skin-tone",
  "1f9db-1f3fd": "vampire-medium-skin-tone",
  "1f6a6": "vertical-traffic-light",
  "1f4f3": "vibration-mode",
  "270c": "victory-hand",
  "270c-1f3ff": "victory-hand-dark-skin-tone",
  "270c-1f3fb": "victory-hand-light-skin-tone",
  "270c-1f3fe": "victory-hand-medium-dark-skin-tone",
  "270c-1f3fc": "victory-hand-medium-light-skin-tone",
  "270c-1f3fd": "victory-hand-medium-skin-tone",
  "1f4f9": "video-camera",
  "1f3ae": "video-game",
  "1f4fc": "videocassette",
  "1f3bb": "violin",
  "264d": "virgo",
  "1f30b": "volcano",
  "1f3d0": "volleyball",
  "1f19a": "vs-button",
  "1f596": "vulcan-salute",
  "1f596-1f3ff": "vulcan-salute-dark-skin-tone",
  "1f596-1f3fb": "vulcan-salute-light-skin-tone",
  "1f596-1f3fe": "vulcan-salute-medium-dark-skin-tone",
  "1f596-1f3fc": "vulcan-salute-medium-light-skin-tone",
  "1f596-1f3fd": "vulcan-salute-medium-skin-tone",
  "1f9c7": "waffle",
  "1f318": "waning-crescent-moon",
  "1f316": "waning-gibbous-moon",
  "26a0": "warning",
  "1f5d1": "wastebasket",
  "231a": "watch",
  "1f403": "water-buffalo",
  "1f6be": "water-closet",
  "1f52b": "water-pistol",
  "1f30a": "water-wave",
  "1f349": "watermelon",
  "1f44b": "waving-hand",
  "1f44b-1f3ff": "waving-hand-dark-skin-tone",
  "1f44b-1f3fb": "waving-hand-light-skin-tone",
  "1f44b-1f3fe": "waving-hand-medium-dark-skin-tone",
  "1f44b-1f3fc": "waving-hand-medium-light-skin-tone",
  "1f44b-1f3fd": "waving-hand-medium-skin-tone",
  "1f312": "waxing-crescent-moon",
  "1f314": "waxing-gibbous-moon",
  "1f640": "weary-cat",
  "1f629": "weary-face",
  "1f492": "wedding",
  "1f40b": "whale",
  "1f6de": "wheel",
  "267f": "wheelchair-symbol",
  "1f9af": "white-cane",
  "26aa": "white-circle",
  "1f3f3": "white-flag",
  "1f4ae": "white-flower",
  "1f90d": "white-heart",
  "2b1c": "white-large-square",
  "25fd": "white-medium-small-square",
  "25fb": "white-medium-square",
  "25ab": "white-small-square",
  "1f533": "white-square-button",
  "1f940": "wilted-flower",
  "1f390": "wind-chime",
  "1f32c": "wind-face",
  "1fa9f": "window",
  "1f377": "wine-glass",
  "1fabd": "wing",
  "1f609": "winking-face",
  "1f61c": "winking-face-with-tongue",
  "1f6dc": "wireless",
  "1f43a": "wolf",
  "1f469": "woman",
  "1f46b": "woman-and-man-holding-hands",
  "1f46b-1f3ff": "woman-and-man-holding-hands-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46b-1f3fb": "woman-and-man-holding-hands-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46b-1f3fe": "woman-and-man-holding-hands-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46b-1f3fc": "woman-and-man-holding-hands-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46b-1f3fd": "woman-and-man-holding-hands-medium-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-1f3a8": "woman-artist",
  "1f469-1f3ff-200d-1f3a8": "woman-artist-dark-skin-tone",
  "1f469-1f3fb-200d-1f3a8": "woman-artist-light-skin-tone",
  "1f469-1f3fe-200d-1f3a8": "woman-artist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3a8": "woman-artist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3a8": "woman-artist-medium-skin-tone",
  "1f469-200d-1f680": "woman-astronaut",
  "1f469-1f3ff-200d-1f680": "woman-astronaut-dark-skin-tone",
  "1f469-1f3fb-200d-1f680": "woman-astronaut-light-skin-tone",
  "1f469-1f3fe-200d-1f680": "woman-astronaut-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f680": "woman-astronaut-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f680": "woman-astronaut-medium-skin-tone",
  "1f469-200d-1f9b2": "woman-bald",
  "1f9d4-200d-2640": "woman-beard",
  "1f6b4-200d-2640": "woman-biking",
  "1f6b4-1f3ff-200d-2640": "woman-biking-dark-skin-tone",
  "1f6b4-1f3fb-200d-2640": "woman-biking-light-skin-tone",
  "1f6b4-1f3fe-200d-2640": "woman-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc-200d-2640": "woman-biking-medium-light-skin-tone",
  "1f6b4-1f3fd-200d-2640": "woman-biking-medium-skin-tone",
  "1f471-200d-2640": "woman-blond-hair",
  "26f9-200d-2640": "woman-bouncing-ball",
  "26f9-1f3ff-200d-2640": "woman-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb-200d-2640": "woman-bouncing-ball-light-skin-tone",
  "26f9-1f3fe-200d-2640": "woman-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc-200d-2640": "woman-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd-200d-2640": "woman-bouncing-ball-medium-skin-tone",
  "1f647-200d-2640": "woman-bowing",
  "1f647-1f3ff-200d-2640": "woman-bowing-dark-skin-tone",
  "1f647-1f3fb-200d-2640": "woman-bowing-light-skin-tone",
  "1f647-1f3fe-200d-2640": "woman-bowing-medium-dark-skin-tone",
  "1f647-1f3fc-200d-2640": "woman-bowing-medium-light-skin-tone",
  "1f647-1f3fd-200d-2640": "woman-bowing-medium-skin-tone",
  "1f938-200d-2640": "woman-cartwheeling",
  "1f938-1f3ff-200d-2640": "woman-cartwheeling-dark-skin-tone",
  "1f938-1f3fb-200d-2640": "woman-cartwheeling-light-skin-tone",
  "1f938-1f3fe-200d-2640": "woman-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc-200d-2640": "woman-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd-200d-2640": "woman-cartwheeling-medium-skin-tone",
  "1f9d7-200d-2640": "woman-climbing",
  "1f9d7-1f3ff-200d-2640": "woman-climbing-dark-skin-tone",
  "1f9d7-1f3fb-200d-2640": "woman-climbing-light-skin-tone",
  "1f9d7-1f3fe-200d-2640": "woman-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc-200d-2640": "woman-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd-200d-2640": "woman-climbing-medium-skin-tone",
  "1f477-200d-2640": "woman-construction-worker",
  "1f477-1f3ff-200d-2640": "woman-construction-worker-dark-skin-tone",
  "1f477-1f3fb-200d-2640": "woman-construction-worker-light-skin-tone",
  "1f477-1f3fe-200d-2640": "woman-construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc-200d-2640": "woman-construction-worker-medium-light-skin-tone",
  "1f477-1f3fd-200d-2640": "woman-construction-worker-medium-skin-tone",
  "1f469-200d-1f373": "woman-cook",
  "1f469-1f3ff-200d-1f373": "woman-cook-dark-skin-tone",
  "1f469-1f3fb-200d-1f373": "woman-cook-light-skin-tone",
  "1f469-1f3fe-200d-1f373": "woman-cook-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f373": "woman-cook-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f373": "woman-cook-medium-skin-tone",
  "1f469-200d-1f9b1": "woman-curly-hair",
  "1f483": "woman-dancing",
  "1f483-1f3ff": "woman-dancing-dark-skin-tone",
  "1f483-1f3fb": "woman-dancing-light-skin-tone",
  "1f483-1f3fe": "woman-dancing-medium-dark-skin-tone",
  "1f483-1f3fc": "woman-dancing-medium-light-skin-tone",
  "1f483-1f3fd": "woman-dancing-medium-skin-tone",
  "1f469-1f3ff": "woman-dark-skin-tone",
  "1f469-1f3ff-200d-1f9b2": "woman-dark-skin-tone-bald",
  "1f9d4-1f3ff-200d-2640": "woman-dark-skin-tone-beard",
  "1f471-1f3ff-200d-2640": "woman-dark-skin-tone-blond-hair",
  "1f469-1f3ff-200d-1f9b1": "woman-dark-skin-tone-curly-hair",
  "1f469-1f3ff-200d-1f9b0": "woman-dark-skin-tone-red-hair",
  "1f469-1f3ff-200d-1f9b3": "woman-dark-skin-tone-white-hair",
  "1f575-200d-2640": "woman-detective",
  "1f575-1f3ff-200d-2640": "woman-detective-dark-skin-tone",
  "1f575-1f3fb-200d-2640": "woman-detective-light-skin-tone",
  "1f575-1f3fe-200d-2640": "woman-detective-medium-dark-skin-tone",
  "1f575-1f3fc-200d-2640": "woman-detective-medium-light-skin-tone",
  "1f575-1f3fd-200d-2640": "woman-detective-medium-skin-tone",
  "1f9dd-200d-2640": "woman-elf",
  "1f9dd-1f3ff-200d-2640": "woman-elf-dark-skin-tone",
  "1f9dd-1f3fb-200d-2640": "woman-elf-light-skin-tone",
  "1f9dd-1f3fe-200d-2640": "woman-elf-medium-dark-skin-tone",
  "1f9dd-1f3fc-200d-2640": "woman-elf-medium-light-skin-tone",
  "1f9dd-1f3fd-200d-2640": "woman-elf-medium-skin-tone",
  "1f926-200d-2640": "woman-facepalming",
  "1f926-1f3ff-200d-2640": "woman-facepalming-dark-skin-tone",
  "1f926-1f3fb-200d-2640": "woman-facepalming-light-skin-tone",
  "1f926-1f3fe-200d-2640": "woman-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc-200d-2640": "woman-facepalming-medium-light-skin-tone",
  "1f926-1f3fd-200d-2640": "woman-facepalming-medium-skin-tone",
  "1f469-200d-1f3ed": "woman-factory-worker",
  "1f469-1f3ff-200d-1f3ed": "woman-factory-worker-dark-skin-tone",
  "1f469-1f3fb-200d-1f3ed": "woman-factory-worker-light-skin-tone",
  "1f469-1f3fe-200d-1f3ed": "woman-factory-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3ed": "woman-factory-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3ed": "woman-factory-worker-medium-skin-tone",
  "1f9da-200d-2640": "woman-fairy",
  "1f9da-1f3ff-200d-2640": "woman-fairy-dark-skin-tone",
  "1f9da-1f3fb-200d-2640": "woman-fairy-light-skin-tone",
  "1f9da-1f3fe-200d-2640": "woman-fairy-medium-dark-skin-tone",
  "1f9da-1f3fc-200d-2640": "woman-fairy-medium-light-skin-tone",
  "1f9da-1f3fd-200d-2640": "woman-fairy-medium-skin-tone",
  "1f469-200d-1f33e": "woman-farmer",
  "1f469-1f3ff-200d-1f33e": "woman-farmer-dark-skin-tone",
  "1f469-1f3fb-200d-1f33e": "woman-farmer-light-skin-tone",
  "1f469-1f3fe-200d-1f33e": "woman-farmer-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f33e": "woman-farmer-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f33e": "woman-farmer-medium-skin-tone",
  "1f469-200d-1f37c": "woman-feeding-baby",
  "1f469-1f3ff-200d-1f37c": "woman-feeding-baby-dark-skin-tone",
  "1f469-1f3fb-200d-1f37c": "woman-feeding-baby-light-skin-tone",
  "1f469-1f3fe-200d-1f37c": "woman-feeding-baby-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f37c": "woman-feeding-baby-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f37c": "woman-feeding-baby-medium-skin-tone",
  "1f469-200d-1f692": "woman-firefighter",
  "1f469-1f3ff-200d-1f692": "woman-firefighter-dark-skin-tone",
  "1f469-1f3fb-200d-1f692": "woman-firefighter-light-skin-tone",
  "1f469-1f3fe-200d-1f692": "woman-firefighter-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f692": "woman-firefighter-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f692": "woman-firefighter-medium-skin-tone",
  "1f64d-200d-2640": "woman-frowning",
  "1f64d-1f3ff-200d-2640": "woman-frowning-dark-skin-tone",
  "1f64d-1f3fb-200d-2640": "woman-frowning-light-skin-tone",
  "1f64d-1f3fe-200d-2640": "woman-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc-200d-2640": "woman-frowning-medium-light-skin-tone",
  "1f64d-1f3fd-200d-2640": "woman-frowning-medium-skin-tone",
  "1f9de-200d-2640": "woman-genie",
  "1f645-200d-2640": "woman-gesturing-no",
  "1f645-1f3ff-200d-2640": "woman-gesturing-no-dark-skin-tone",
  "1f645-1f3fb-200d-2640": "woman-gesturing-no-light-skin-tone",
  "1f645-1f3fe-200d-2640": "woman-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc-200d-2640": "woman-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd-200d-2640": "woman-gesturing-no-medium-skin-tone",
  "1f646-200d-2640": "woman-gesturing-ok",
  "1f646-1f3ff-200d-2640": "woman-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb-200d-2640": "woman-gesturing-ok-light-skin-tone",
  "1f646-1f3fe-200d-2640": "woman-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc-200d-2640": "woman-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd-200d-2640": "woman-gesturing-ok-medium-skin-tone",
  "1f487-200d-2640": "woman-getting-haircut",
  "1f487-1f3ff-200d-2640": "woman-getting-haircut-dark-skin-tone",
  "1f487-1f3fb-200d-2640": "woman-getting-haircut-light-skin-tone",
  "1f487-1f3fe-200d-2640": "woman-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc-200d-2640": "woman-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd-200d-2640": "woman-getting-haircut-medium-skin-tone",
  "1f486-200d-2640": "woman-getting-massage",
  "1f486-1f3ff-200d-2640": "woman-getting-massage-dark-skin-tone",
  "1f486-1f3fb-200d-2640": "woman-getting-massage-light-skin-tone",
  "1f486-1f3fe-200d-2640": "woman-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc-200d-2640": "woman-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd-200d-2640": "woman-getting-massage-medium-skin-tone",
  "1f3cc-200d-2640": "woman-golfing",
  "1f3cc-1f3ff-200d-2640": "woman-golfing-dark-skin-tone",
  "1f3cc-1f3fb-200d-2640": "woman-golfing-light-skin-tone",
  "1f3cc-1f3fe-200d-2640": "woman-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc-200d-2640": "woman-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd-200d-2640": "woman-golfing-medium-skin-tone",
  "1f482-200d-2640": "woman-guard",
  "1f482-1f3ff-200d-2640": "woman-guard-dark-skin-tone",
  "1f482-1f3fb-200d-2640": "woman-guard-light-skin-tone",
  "1f482-1f3fe-200d-2640": "woman-guard-medium-dark-skin-tone",
  "1f482-1f3fc-200d-2640": "woman-guard-medium-light-skin-tone",
  "1f482-1f3fd-200d-2640": "woman-guard-medium-skin-tone",
  "1f469-200d-2695": "woman-health-worker",
  "1f469-1f3ff-200d-2695": "woman-health-worker-dark-skin-tone",
  "1f469-1f3fb-200d-2695": "woman-health-worker-light-skin-tone",
  "1f469-1f3fe-200d-2695": "woman-health-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2695": "woman-health-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-2695": "woman-health-worker-medium-skin-tone",
  "1f9d8-200d-2640": "woman-in-lotus-position",
  "1f9d8-1f3ff-200d-2640": "woman-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb-200d-2640": "woman-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe-200d-2640": "woman-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc-200d-2640": "woman-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd-200d-2640": "woman-in-lotus-position-medium-skin-tone",
  "1f469-200d-1f9bd": "woman-in-manual-wheelchair",
  "1f469-1f3ff-200d-1f9bd": "woman-in-manual-wheelchair-dark-skin-tone",
  "1f469-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right",
  "1f469-1f3ff-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9bd": "woman-in-manual-wheelchair-light-skin-tone",
  "1f469-1f3fe-200d-1f9bd": "woman-in-manual-wheelchair-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bd": "woman-in-manual-wheelchair-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bd": "woman-in-manual-wheelchair-medium-skin-tone",
  "1f469-200d-1f9bc": "woman-in-motorized-wheelchair",
  "1f469-1f3ff-200d-1f9bc": "woman-in-motorized-wheelchair-dark-skin-tone",
  "1f469-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right",
  "1f469-1f3ff-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9bc": "woman-in-motorized-wheelchair-light-skin-tone",
  "1f469-1f3fe-200d-1f9bc": "woman-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bc": "woman-in-motorized-wheelchair-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bc": "woman-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6-200d-2640": "woman-in-steamy-room",
  "1f9d6-1f3ff-200d-2640": "woman-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb-200d-2640": "woman-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe-200d-2640": "woman-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc-200d-2640": "woman-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd-200d-2640": "woman-in-steamy-room-medium-skin-tone",
  "1f935-200d-2640": "woman-in-tuxedo",
  "1f935-1f3ff-200d-2640": "woman-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb-200d-2640": "woman-in-tuxedo-light-skin-tone",
  "1f935-1f3fe-200d-2640": "woman-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc-200d-2640": "woman-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd-200d-2640": "woman-in-tuxedo-medium-skin-tone",
  "1f469-200d-2696": "woman-judge",
  "1f469-1f3ff-200d-2696": "woman-judge-dark-skin-tone",
  "1f469-1f3fb-200d-2696": "woman-judge-light-skin-tone",
  "1f469-1f3fe-200d-2696": "woman-judge-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2696": "woman-judge-medium-light-skin-tone",
  "1f469-1f3fd-200d-2696": "woman-judge-medium-skin-tone",
  "1f939-200d-2640": "woman-juggling",
  "1f939-1f3ff-200d-2640": "woman-juggling-dark-skin-tone",
  "1f939-1f3fb-200d-2640": "woman-juggling-light-skin-tone",
  "1f939-1f3fe-200d-2640": "woman-juggling-medium-dark-skin-tone",
  "1f939-1f3fc-200d-2640": "woman-juggling-medium-light-skin-tone",
  "1f939-1f3fd-200d-2640": "woman-juggling-medium-skin-tone",
  "1f9ce-200d-2640": "woman-kneeling",
  "1f9ce-1f3ff-200d-2640": "woman-kneeling-dark-skin-tone",
  "1f9ce-200d-2640-200d-27a1": "woman-kneeling-facing-right",
  "1f9ce-1f3ff-200d-2640-200d-27a1": "woman-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-2640-200d-27a1": "woman-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb-200d-2640": "woman-kneeling-light-skin-tone",
  "1f9ce-1f3fe-200d-2640": "woman-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2640": "woman-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2640": "woman-kneeling-medium-skin-tone",
  "1f3cb-200d-2640": "woman-lifting-weights",
  "1f3cb-1f3ff-200d-2640": "woman-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb-200d-2640": "woman-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe-200d-2640": "woman-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc-200d-2640": "woman-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd-200d-2640": "woman-lifting-weights-medium-skin-tone",
  "1f469-1f3fb": "woman-light-skin-tone",
  "1f469-1f3fb-200d-1f9b2": "woman-light-skin-tone-bald",
  "1f9d4-1f3fb-200d-2640": "woman-light-skin-tone-beard",
  "1f471-1f3fb-200d-2640": "woman-light-skin-tone-blond-hair",
  "1f469-1f3fb-200d-1f9b1": "woman-light-skin-tone-curly-hair",
  "1f469-1f3fb-200d-1f9b0": "woman-light-skin-tone-red-hair",
  "1f469-1f3fb-200d-1f9b3": "woman-light-skin-tone-white-hair",
  "1f9d9-200d-2640": "woman-mage",
  "1f9d9-1f3ff-200d-2640": "woman-mage-dark-skin-tone",
  "1f9d9-1f3fb-200d-2640": "woman-mage-light-skin-tone",
  "1f9d9-1f3fe-200d-2640": "woman-mage-medium-dark-skin-tone",
  "1f9d9-1f3fc-200d-2640": "woman-mage-medium-light-skin-tone",
  "1f9d9-1f3fd-200d-2640": "woman-mage-medium-skin-tone",
  "1f469-200d-1f527": "woman-mechanic",
  "1f469-1f3ff-200d-1f527": "woman-mechanic-dark-skin-tone",
  "1f469-1f3fb-200d-1f527": "woman-mechanic-light-skin-tone",
  "1f469-1f3fe-200d-1f527": "woman-mechanic-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f527": "woman-mechanic-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f527": "woman-mechanic-medium-skin-tone",
  "1f469-1f3fe": "woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f9b2": "woman-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe-200d-2640": "woman-medium-dark-skin-tone-beard",
  "1f471-1f3fe-200d-2640": "woman-medium-dark-skin-tone-blond-hair",
  "1f469-1f3fe-200d-1f9b1": "woman-medium-dark-skin-tone-curly-hair",
  "1f469-1f3fe-200d-1f9b0": "woman-medium-dark-skin-tone-red-hair",
  "1f469-1f3fe-200d-1f9b3": "woman-medium-dark-skin-tone-white-hair",
  "1f469-1f3fc": "woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f9b2": "woman-medium-light-skin-tone-bald",
  "1f9d4-1f3fc-200d-2640": "woman-medium-light-skin-tone-beard",
  "1f471-1f3fc-200d-2640": "woman-medium-light-skin-tone-blond-hair",
  "1f469-1f3fc-200d-1f9b1": "woman-medium-light-skin-tone-curly-hair",
  "1f469-1f3fc-200d-1f9b0": "woman-medium-light-skin-tone-red-hair",
  "1f469-1f3fc-200d-1f9b3": "woman-medium-light-skin-tone-white-hair",
  "1f469-1f3fd": "woman-medium-skin-tone",
  "1f469-1f3fd-200d-1f9b2": "woman-medium-skin-tone-bald",
  "1f9d4-1f3fd-200d-2640": "woman-medium-skin-tone-beard",
  "1f471-1f3fd-200d-2640": "woman-medium-skin-tone-blond-hair",
  "1f469-1f3fd-200d-1f9b1": "woman-medium-skin-tone-curly-hair",
  "1f469-1f3fd-200d-1f9b0": "woman-medium-skin-tone-red-hair",
  "1f469-1f3fd-200d-1f9b3": "woman-medium-skin-tone-white-hair",
  "1f6b5-200d-2640": "woman-mountain-biking",
  "1f6b5-1f3ff-200d-2640": "woman-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb-200d-2640": "woman-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe-200d-2640": "woman-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc-200d-2640": "woman-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd-200d-2640": "woman-mountain-biking-medium-skin-tone",
  "1f469-200d-1f4bc": "woman-office-worker",
  "1f469-1f3ff-200d-1f4bc": "woman-office-worker-dark-skin-tone",
  "1f469-1f3fb-200d-1f4bc": "woman-office-worker-light-skin-tone",
  "1f469-1f3fe-200d-1f4bc": "woman-office-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f4bc": "woman-office-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f4bc": "woman-office-worker-medium-skin-tone",
  "1f469-200d-2708": "woman-pilot",
  "1f469-1f3ff-200d-2708": "woman-pilot-dark-skin-tone",
  "1f469-1f3fb-200d-2708": "woman-pilot-light-skin-tone",
  "1f469-1f3fe-200d-2708": "woman-pilot-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2708": "woman-pilot-medium-light-skin-tone",
  "1f469-1f3fd-200d-2708": "woman-pilot-medium-skin-tone",
  "1f93e-200d-2640": "woman-playing-handball",
  "1f93e-1f3ff-200d-2640": "woman-playing-handball-dark-skin-tone",
  "1f93e-1f3fb-200d-2640": "woman-playing-handball-light-skin-tone",
  "1f93e-1f3fe-200d-2640": "woman-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc-200d-2640": "woman-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd-200d-2640": "woman-playing-handball-medium-skin-tone",
  "1f93d-200d-2640": "woman-playing-water-polo",
  "1f93d-1f3ff-200d-2640": "woman-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb-200d-2640": "woman-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe-200d-2640": "woman-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc-200d-2640": "woman-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd-200d-2640": "woman-playing-water-polo-medium-skin-tone",
  "1f46e-200d-2640": "woman-police-officer",
  "1f46e-1f3ff-200d-2640": "woman-police-officer-dark-skin-tone",
  "1f46e-1f3fb-200d-2640": "woman-police-officer-light-skin-tone",
  "1f46e-1f3fe-200d-2640": "woman-police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc-200d-2640": "woman-police-officer-medium-light-skin-tone",
  "1f46e-1f3fd-200d-2640": "woman-police-officer-medium-skin-tone",
  "1f64e-200d-2640": "woman-pouting",
  "1f64e-1f3ff-200d-2640": "woman-pouting-dark-skin-tone",
  "1f64e-1f3fb-200d-2640": "woman-pouting-light-skin-tone",
  "1f64e-1f3fe-200d-2640": "woman-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc-200d-2640": "woman-pouting-medium-light-skin-tone",
  "1f64e-1f3fd-200d-2640": "woman-pouting-medium-skin-tone",
  "1f64b-200d-2640": "woman-raising-hand",
  "1f64b-1f3ff-200d-2640": "woman-raising-hand-dark-skin-tone",
  "1f64b-1f3fb-200d-2640": "woman-raising-hand-light-skin-tone",
  "1f64b-1f3fe-200d-2640": "woman-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc-200d-2640": "woman-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd-200d-2640": "woman-raising-hand-medium-skin-tone",
  "1f469-200d-1f9b0": "woman-red-hair",
  "1f6a3-200d-2640": "woman-rowing-boat",
  "1f6a3-1f3ff-200d-2640": "woman-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb-200d-2640": "woman-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe-200d-2640": "woman-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc-200d-2640": "woman-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd-200d-2640": "woman-rowing-boat-medium-skin-tone",
  "1f3c3-200d-2640": "woman-running",
  "1f3c3-1f3ff-200d-2640": "woman-running-dark-skin-tone",
  "1f3c3-200d-2640-200d-27a1": "woman-running-facing-right",
  "1f3c3-1f3ff-200d-2640-200d-27a1": "woman-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-2640-200d-27a1": "woman-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-2640-200d-27a1": "woman-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2640-200d-27a1": "woman-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2640-200d-27a1": "woman-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb-200d-2640": "woman-running-light-skin-tone",
  "1f3c3-1f3fe-200d-2640": "woman-running-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2640": "woman-running-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2640": "woman-running-medium-skin-tone",
  "1f469-200d-1f52c": "woman-scientist",
  "1f469-1f3ff-200d-1f52c": "woman-scientist-dark-skin-tone",
  "1f469-1f3fb-200d-1f52c": "woman-scientist-light-skin-tone",
  "1f469-1f3fe-200d-1f52c": "woman-scientist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f52c": "woman-scientist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f52c": "woman-scientist-medium-skin-tone",
  "1f937-200d-2640": "woman-shrugging",
  "1f937-1f3ff-200d-2640": "woman-shrugging-dark-skin-tone",
  "1f937-1f3fb-200d-2640": "woman-shrugging-light-skin-tone",
  "1f937-1f3fe-200d-2640": "woman-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc-200d-2640": "woman-shrugging-medium-light-skin-tone",
  "1f937-1f3fd-200d-2640": "woman-shrugging-medium-skin-tone",
  "1f469-200d-1f3a4": "woman-singer",
  "1f469-1f3ff-200d-1f3a4": "woman-singer-dark-skin-tone",
  "1f469-1f3fb-200d-1f3a4": "woman-singer-light-skin-tone",
  "1f469-1f3fe-200d-1f3a4": "woman-singer-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3a4": "woman-singer-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3a4": "woman-singer-medium-skin-tone",
  "1f9cd-200d-2640": "woman-standing",
  "1f9cd-1f3ff-200d-2640": "woman-standing-dark-skin-tone",
  "1f9cd-1f3fb-200d-2640": "woman-standing-light-skin-tone",
  "1f9cd-1f3fe-200d-2640": "woman-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc-200d-2640": "woman-standing-medium-light-skin-tone",
  "1f9cd-1f3fd-200d-2640": "woman-standing-medium-skin-tone",
  "1f469-200d-1f393": "woman-student",
  "1f469-1f3ff-200d-1f393": "woman-student-dark-skin-tone",
  "1f469-1f3fb-200d-1f393": "woman-student-light-skin-tone",
  "1f469-1f3fe-200d-1f393": "woman-student-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f393": "woman-student-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f393": "woman-student-medium-skin-tone",
  "1f9b8-200d-2640": "woman-superhero",
  "1f9b8-1f3ff-200d-2640": "woman-superhero-dark-skin-tone",
  "1f9b8-1f3fb-200d-2640": "woman-superhero-light-skin-tone",
  "1f9b8-1f3fe-200d-2640": "woman-superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc-200d-2640": "woman-superhero-medium-light-skin-tone",
  "1f9b8-1f3fd-200d-2640": "woman-superhero-medium-skin-tone",
  "1f9b9-200d-2640": "woman-supervillain",
  "1f9b9-1f3ff-200d-2640": "woman-supervillain-dark-skin-tone",
  "1f9b9-1f3fb-200d-2640": "woman-supervillain-light-skin-tone",
  "1f9b9-1f3fe-200d-2640": "woman-supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc-200d-2640": "woman-supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd-200d-2640": "woman-supervillain-medium-skin-tone",
  "1f3c4-200d-2640": "woman-surfing",
  "1f3c4-1f3ff-200d-2640": "woman-surfing-dark-skin-tone",
  "1f3c4-1f3fb-200d-2640": "woman-surfing-light-skin-tone",
  "1f3c4-1f3fe-200d-2640": "woman-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc-200d-2640": "woman-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd-200d-2640": "woman-surfing-medium-skin-tone",
  "1f3ca-200d-2640": "woman-swimming",
  "1f3ca-1f3ff-200d-2640": "woman-swimming-dark-skin-tone",
  "1f3ca-1f3fb-200d-2640": "woman-swimming-light-skin-tone",
  "1f3ca-1f3fe-200d-2640": "woman-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc-200d-2640": "woman-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd-200d-2640": "woman-swimming-medium-skin-tone",
  "1f469-200d-1f3eb": "woman-teacher",
  "1f469-1f3ff-200d-1f3eb": "woman-teacher-dark-skin-tone",
  "1f469-1f3fb-200d-1f3eb": "woman-teacher-light-skin-tone",
  "1f469-1f3fe-200d-1f3eb": "woman-teacher-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3eb": "woman-teacher-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3eb": "woman-teacher-medium-skin-tone",
  "1f469-200d-1f4bb": "woman-technologist",
  "1f469-1f3ff-200d-1f4bb": "woman-technologist-dark-skin-tone",
  "1f469-1f3fb-200d-1f4bb": "woman-technologist-light-skin-tone",
  "1f469-1f3fe-200d-1f4bb": "woman-technologist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f4bb": "woman-technologist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f4bb": "woman-technologist-medium-skin-tone",
  "1f481-200d-2640": "woman-tipping-hand",
  "1f481-1f3ff-200d-2640": "woman-tipping-hand-dark-skin-tone",
  "1f481-1f3fb-200d-2640": "woman-tipping-hand-light-skin-tone",
  "1f481-1f3fe-200d-2640": "woman-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc-200d-2640": "woman-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd-200d-2640": "woman-tipping-hand-medium-skin-tone",
  "1f9db-200d-2640": "woman-vampire",
  "1f9db-1f3ff-200d-2640": "woman-vampire-dark-skin-tone",
  "1f9db-1f3fb-200d-2640": "woman-vampire-light-skin-tone",
  "1f9db-1f3fe-200d-2640": "woman-vampire-medium-dark-skin-tone",
  "1f9db-1f3fc-200d-2640": "woman-vampire-medium-light-skin-tone",
  "1f9db-1f3fd-200d-2640": "woman-vampire-medium-skin-tone",
  "1f6b6-200d-2640": "woman-walking",
  "1f6b6-1f3ff-200d-2640": "woman-walking-dark-skin-tone",
  "1f6b6-200d-2640-200d-27a1": "woman-walking-facing-right",
  "1f6b6-1f3ff-200d-2640-200d-27a1": "woman-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-2640-200d-27a1": "woman-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-2640-200d-27a1": "woman-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2640-200d-27a1": "woman-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2640-200d-27a1": "woman-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb-200d-2640": "woman-walking-light-skin-tone",
  "1f6b6-1f3fe-200d-2640": "woman-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2640": "woman-walking-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2640": "woman-walking-medium-skin-tone",
  "1f473-200d-2640": "woman-wearing-turban",
  "1f473-1f3ff-200d-2640": "woman-wearing-turban-dark-skin-tone",
  "1f473-1f3fb-200d-2640": "woman-wearing-turban-light-skin-tone",
  "1f473-1f3fe-200d-2640": "woman-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc-200d-2640": "woman-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd-200d-2640": "woman-wearing-turban-medium-skin-tone",
  "1f469-200d-1f9b3": "woman-white-hair",
  "1f9d5": "woman-with-headscarf",
  "1f9d5-1f3ff": "woman-with-headscarf-dark-skin-tone",
  "1f9d5-1f3fb": "woman-with-headscarf-light-skin-tone",
  "1f9d5-1f3fe": "woman-with-headscarf-medium-dark-skin-tone",
  "1f9d5-1f3fc": "woman-with-headscarf-medium-light-skin-tone",
  "1f9d5-1f3fd": "woman-with-headscarf-medium-skin-tone",
  "1f470-200d-2640": "woman-with-veil",
  "1f470-1f3ff-200d-2640": "woman-with-veil-dark-skin-tone",
  "1f470-1f3fb-200d-2640": "woman-with-veil-light-skin-tone",
  "1f470-1f3fe-200d-2640": "woman-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc-200d-2640": "woman-with-veil-medium-light-skin-tone",
  "1f470-1f3fd-200d-2640": "woman-with-veil-medium-skin-tone",
  "1f469-200d-1f9af": "woman-with-white-cane",
  "1f469-1f3ff-200d-1f9af": "woman-with-white-cane-dark-skin-tone",
  "1f469-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right",
  "1f469-1f3ff-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9af": "woman-with-white-cane-light-skin-tone",
  "1f469-1f3fe-200d-1f9af": "woman-with-white-cane-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9af": "woman-with-white-cane-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9af": "woman-with-white-cane-medium-skin-tone",
  "1f9df-200d-2640": "woman-zombie",
  "1f462": "womans-boot",
  "1f45a": "womans-clothes",
  "1f452": "womans-hat",
  "1f461": "womans-sandal",
  "1f46d": "women-holding-hands",
  "1f46d-1f3ff": "women-holding-hands-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46d-1f3fb": "women-holding-hands-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46d-1f3fe": "women-holding-hands-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46d-1f3fc": "women-holding-hands-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46d-1f3fd": "women-holding-hands-medium-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f46f-200d-2640": "women-with-bunny-ears",
  "1f93c-200d-2640": "women-wrestling",
  "1f93c-1f3ff-200d-2640": "women-wrestling-dark-skin-tone",
  "1f93c-1f3fb-200d-2640": "women-wrestling-light-skin-tone",
  "1f93c-1f3fe-200d-2640": "women-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc-200d-2640": "women-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd-200d-2640": "women-wrestling-medium-skin-tone",
  "1f6ba": "womens-room",
  "1fab5": "wood",
  "1f974": "woozy-face",
  "1f5fa": "world-map",
  "1fab1": "worm",
  "1f61f": "worried-face",
  "1f381": "wrapped-gift",
  "1f527": "wrench",
  "270d": "writing-hand",
  "270d-1f3ff": "writing-hand-dark-skin-tone",
  "270d-1f3fb": "writing-hand-light-skin-tone",
  "270d-1f3fe": "writing-hand-medium-dark-skin-tone",
  "270d-1f3fc": "writing-hand-medium-light-skin-tone",
  "270d-1f3fd": "writing-hand-medium-skin-tone",
  "1fa7b": "x-ray",
  "1f9f6": "yarn",
  "1f971": "yawning-face",
  "1f7e1": "yellow-circle",
  "1f49b": "yellow-heart",
  "1f7e8": "yellow-square",
  "1f4b4": "yen-banknote",
  "262f": "yin-yang",
  "1fa80": "yo-yo",
  "1f92a": "zany-face",
  "1f993": "zebra",
  "1f910": "zipper-mouth-face",
  "1f9df": "zombie",
  "1f4a4": "zzz"
};
const RE_MATCH_EMOJIS = /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
async function applyEmojis(ctx, island) {
  const html = island.html;
  const matches = html.match(RE_MATCH_EMOJIS);
  if (!matches)
    return html;
  const replacements = await Promise.all(matches.map(async (match) => {
    const unicode = match.codePointAt(0).toString(16);
    const emoji = charMap[unicode];
    if (emoji) {
      const key = ["1", ctx.options.emojis, emoji].join(":");
      let svg;
      if (await emojiCache.hasItem(key))
        svg = await emojiCache.getItem(key);
      if (!svg) {
        svg = await $fetch(`https://api.iconify.design/${ctx.options.emojis}/${emoji}.svg`, {
          responseType: "text",
          retry: 3,
          retryDelay: 1e3
        });
        if (svg === "404")
          svg = void 0;
        if (svg)
          await emojiCache.setItem(key, svg);
      }
      if (svg)
        return `
${svg.replace("<svg ", '<svg data-emoji style="margin: 0 .05em 0 .15em; vertical-align: -0.1em;" ')}
`;
      return match;
    }
  }));
  const finalHtml = html.replace(RE_MATCH_EMOJIS, () => replacements.shift());
  const modified = finalHtml !== island.html;
  island.html = finalHtml;
  return modified;
}

async function applyInlineCss(ctx, island) {
  const { e } = ctx;
  let html = island.html;
  let css = island.head.style?.map((s) => s.innerHTML).filter(Boolean).join("\n") || "";
  const componentInlineStyles = island.head.link?.filter((l) => l.href.startsWith("/_nuxt/components") && l.href.replaceAll("/", "").includes(ctx.options.component)) || [];
  if (!componentInlineStyles.length) {
    return false;
  }
  let linksToCss = [];
  {
    const cssResults = componentInlineStyles.length ? await Promise.all(
      componentInlineStyles.map((l) => {
        const url = l.href.endsWith("lang.css") ? `${l.href}&hmr=false` : l.href;
        return e.$fetch(url, {
          responseType: "text",
          baseURL: useNitroOrigin(e)
        }).then((res) => {
          if (res.includes("__vite__css"))
            return res.match(/__vite__css = "([^"]+)"/)?.[1] || "";
          return res.trim().split("\n").filter((l2) => !l2.startsWith("//")).join("\n").trim();
        }).catch(() => {
          return "";
        });
      })
    ) : [];
    linksToCss = cssResults;
    css = [linksToCss.join("\n"), css].join("\n");
  }
  if (!css.trim().length)
    return false;
  const cssInline = await useCssInline();
  if (!cssInline || cssInline?.__mock__) {
    if (componentInlineStyles.length) {
      const logger = createConsola().withTag("Nuxt OG Image");
      logger.warn("To have inline styles applied you need to install either the `@css-inline/css-inline` or `@css-inline/css-inline-wasm` package.");
    }
    return false;
  }
  html = cssInline.inline(island.html, {
    loadRemoteStylesheets: false,
    extraCss: css
  });
  const classes = css.match(/\.([\w-]+)/g)?.map((c) => c.replace(".", ""));
  if (classes)
    html = html.replace(new RegExp(`class="(${classes.join("|")})"`, "g"), "");
  island.html = html;
  return true;
}

async function createVNodes(ctx) {
  let html = ctx.options.html;
  if (!html) {
    const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
    island.html = htmlDecodeQuotes(island.html);
    await applyInlineCss(ctx, island);
    await applyEmojis(ctx, island);
    html = island.html;
    if (html?.includes("<body>")) {
      html = html.match(/<body>([\s\S]*)<\/body>/)?.[1] || "";
    }
  }
  const template = `<div style="position: relative; display: flex; margin: 0 auto; width: ${ctx.options.width}px; height: ${ctx.options.height}px; overflow: hidden;">${html}</div>`;
  const satoriTree = html$1(template);
  walkSatoriTree(ctx, satoriTree, [
    emojis,
    classes,
    flex,
    encoding,
    nuxtIcon
  ]);
  await Promise.all(walkSatoriTree(ctx, satoriTree, [
    unocss,
    imageSrc
  ]));
  return satoriTree;
}

const fontPromises = {};
async function resolveFonts(event) {
  const { fonts } = useOgImageRuntimeConfig();
  const normalisedFonts = normaliseFontInput([...event.options.fonts || [], ...fonts]);
  const localFontPromises = [];
  const preloadedFonts = [];
  if (fontCache) {
    for (const font of normalisedFonts) {
      if (await fontCache.hasItem(font.cacheKey)) {
        font.data = await fontCache.getItemRaw(font.cacheKey) || void 0;
        preloadedFonts.push(font);
      } else {
        if (!fontPromises[font.cacheKey]) {
          fontPromises[font.cacheKey] = loadFont(event, font).then(async (_font) => {
            if (_font?.data)
              await fontCache?.setItemRaw(_font.cacheKey, _font.data);
            return _font;
          });
        }
        localFontPromises.push(fontPromises[font.cacheKey]);
      }
    }
  }
  const awaitedFonts = await Promise.all(localFontPromises);
  return [...preloadedFonts, ...awaitedFonts].map((_f) => {
    return { name: _f.name, data: _f.data, style: _f.style, weight: Number(_f.weight) };
  });
}
async function createSvg(event) {
  const { options } = event;
  const { satoriOptions: _satoriOptions } = useOgImageRuntimeConfig();
  const [satori, vnodes, fonts] = await Promise.all([
    useSatori(),
    createVNodes(event),
    resolveFonts(event)
  ]);
  await event._nitro.hooks.callHook("nuxt-og-image:satori:vnodes", vnodes, event);
  const satoriOptions = defu$1(options.satori, _satoriOptions, {
    fonts,
    tailwindConfig: { theme },
    embedFont: true,
    width: options.width,
    height: options.height
  });
  return satori(vnodes, satoriOptions).catch((err) => {
    return sendError(event.e, err, true);
  });
}
async function createPng(event) {
  const { resvgOptions } = useOgImageRuntimeConfig();
  const svg = await createSvg(event);
  if (!svg)
    throw new Error("Failed to create SVG");
  const Resvg = await useResvg();
  const resvg = new Resvg(svg, defu$1(
    event.options.resvg,
    resvgOptions
  ));
  const pngData = resvg.render();
  return pngData.asPng();
}
async function createJpeg(event) {
  const { sharpOptions } = useOgImageRuntimeConfig();
  if (compatibility.sharp === false) {
    {
      throw new Error("Sharp dependency is not accessible. Please check you have it installed and are using a compatible runtime.");
    }
  }
  const svg = await createSvg(event);
  if (!svg) {
    throw new Error("Failed to create SVG for JPEG rendering.");
  }
  const svgBuffer = Buffer.from(svg);
  const sharp = await useSharp().catch(() => {
    {
      throw new Error("Sharp dependency could not be loaded. Please check you have it installed and are using a compatible runtime.");
    }
  });
  if (!sharp) {
    console.error("Sharp dependency is not accessible. Please check you have it installed and are using a compatible runtime. Falling back to png.");
    return createPng(event);
  }
  const options = defu$1(event.options.sharp, sharpOptions);
  return sharp(svgBuffer, options).jpeg(options).toBuffer();
}
const SatoriRenderer = {
  name: "satori",
  supportedFormats: ["png", "jpeg", "jpg", "json"],
  async createImage(e) {
    switch (e.extension) {
      case "png":
        return createPng(e);
      case "jpeg":
      case "jpg":
        return createJpeg(e);
    }
  },
  async debug(e) {
    const [vnodes, svg] = await Promise.all([
      createVNodes(e),
      createSvg(e)
    ]);
    return {
      vnodes,
      svg
    };
  }
};

const renderer$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createSvg: createSvg,
  default: SatoriRenderer
}, Symbol.toStringTag, { value: 'Module' }));

let installedChromium = false;
let installChromiumPromise;
async function createBrowser() {
  if (installChromiumPromise)
    await installChromiumPromise;
  if (!installedChromium) {
    installChromiumPromise = new Promise((_resolve) => {
      const logger = createConsola().withTag("Nuxt OG Image");
      logger.info("Installing Chromium install for og:image generation...");
      const installChromeProcess = execa("npx", ["playwright", "install", "chromium"], {
        stdio: "pipe"
      });
      if (installChromeProcess.stderr) {
        installChromeProcess.stderr.pipe(process.stderr);
      }
      if (installChromeProcess.stdout) {
        installChromeProcess.stdout.pipe(process.stdout);
      }
      new Promise((resolve) => {
        installChromeProcess.on("exit", (e) => {
          if (e !== 0)
            logger.error("Failed to install Playwright dependency for og:image generation. Trying anyway...");
          resolve();
        });
      }).then(() => {
        installChromeProcess.kill();
        logger.info("Installed Chromium install for og:image generation.");
        _resolve();
      });
    }).then(() => {
      installedChromium = true;
    });
  }
  return await playwrightCore.chromium.launch({
    headless: true
  });
}

async function createScreenshot({ basePath, e, options, extension }, browser) {
  const { colorPreference } = useOgImageRuntimeConfig();
  const path = options.component === "PageScreenshot" ? basePath : joinURL("/__og-image__/image", basePath, `og.html`);
  const page = await browser.newPage({
    colorScheme: colorPreference || "no-preference",
    baseURL: useNitroOrigin(e)
  });
  try {
    if (false && !options.html) ;
    await page.setViewportSize({
      width: toValue(options.width) || 1200,
      height: toValue(options.height) || 630
    });
    if (options.html) {
      const html = options.html;
      await page.evaluate((html2) => {
        document.open("text/html");
        document.write(html2);
        document.close();
      }, html);
      await page.waitForLoadState("networkidle");
    } else {
      await page.goto(withQuery(path, options.props), {
        timeout: 1e4,
        waitUntil: "networkidle"
      });
    }
    const screenshotOptions = {
      timeout: 1e4,
      animations: "disabled",
      type: extension === "png" ? "png" : "jpeg"
    };
    const _options = options.screenshot || {};
    if (_options.delay)
      await page.waitForTimeout(_options.delay);
    if (_options.mask) {
      await page.evaluate((mask) => {
        for (const el of document.querySelectorAll(mask))
          el.style.display = "none";
      }, _options.mask);
    }
    if (_options.selector)
      return await page.locator(_options.selector).screenshot(screenshotOptions);
    return await page.screenshot(screenshotOptions);
  } finally {
    await page.close();
  }
}

const ChromiumRenderer = {
  name: "chromium",
  supportedFormats: ["png", "jpeg", "jpg"],
  async debug() {
    return {};
  },
  async createImage(ctx) {
    const browser = await createBrowser();
    const screenshot = await createScreenshot(ctx, browser).catch((e) => e);
    await browser.close();
    if (screenshot instanceof Error) {
      return createError({
        statusCode: 400,
        cause: screenshot,
        statusMessage: `[Nuxt OG Image] Failed to create screenshot ${screenshot.message}.`
      });
    }
    return screenshot;
  }
};

const renderer$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ChromiumRenderer
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const ____slug__md_get = eventHandler(async (event) => {
  var _a;
  const slug = getRouterParams(event)["slug.md"];
  if (!(slug == null ? void 0 : slug.endsWith(".md"))) {
    throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }
  const path = withLeadingSlash(slug.replace(".md", ""));
  const page = await queryCollection(event, "docs").path(path).first();
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }
  if (((_a = page.body.value[0]) == null ? void 0 : _a[0]) !== "h1") {
    page.body.value.unshift(["blockquote", {}, page.description]);
    page.body.value.unshift(["h1", {}, page.title]);
  }
  setHeader(event, "Content-Type", "text/markdown; charset=utf-8");
  return stringify$1({ ...page.body, type: "minimark" }, { format: "markdown/html" });
});

const ____slug__md_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ____slug__md_get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    if (typeof ssrError.data === "string") {
      try {
        ssrError.data = destr(ssrError.data);
      } catch {
      }
    }
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    const tagPosition = "head";
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  const result = [];
  for (const _chunk of chunks) {
    const chunk = _chunk?.trim();
    if (chunk) {
      result.push(chunk);
    }
  }
  return result;
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));

async function html(ctx) {
  const { options } = ctx;
  const { fonts } = useOgImageRuntimeConfig();
  if (!options.component) {
    throw createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Rendering an invalid component. Received options: ${JSON.stringify(options)}.`
    });
  }
  const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
  const head = createHeadCore();
  head.push(island.head);
  let defaultFontFamily = "sans-serif";
  const normalisedFonts = normaliseFontInput([...options.fonts || [], ...fonts]);
  const firstFont = normalisedFonts[0];
  if (firstFont)
    defaultFontFamily = firstFont.name.replaceAll("+", " ");
  await applyEmojis(ctx, island);
  let html2 = island.html;
  head.push({
    style: [
      {
        // default font is the first font family
        innerHTML: `body { font-family: '${defaultFontFamily}', sans-serif;  }`
      },
      {
        innerHTML: `body {
    transform: scale(${options.props?.scale || 1});
    transform-origin: top left;
    max-height: 100vh;
    position: relative;
    width: ${options.width}px;
    height: ${options.height}px;
    overflow: hidden;
    background-color: ${options.props?.colorMode === "dark" ? "#1b1b1b" : "#fff"};
}
div {
  display: flex;
}
div:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl) {
  display: flex;
  flex-direction: column;
}
div:not(:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl)) {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

svg[data-emoji] {
  display: inline-block;
}
`
      },
      ...fonts.map((font) => {
        return `
          @font-face {
            font-family: '${font.name.replaceAll("+", " ")}';
            font-style: normal;
            font-weight: ${font.weight};
            src: url('/__og-image__/font/${font.key}') format('truetype');
          }
          `;
      })
    ],
    meta: [
      {
        charset: "utf-8"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/@unocss/runtime/preset-wind.global.js"
      },
      {
        innerHTML: `
  window.__unocss = {
    theme: ${JSON.stringify(theme)},
    presets: [
      () => window.__unocss_runtime.presets.presetWind(),
    ],
  }
`
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@unocss/runtime/core.global.js"
      }
    ],
    link: [
      {
        // reset css to match svg output
        href: "https://cdn.jsdelivr.net/npm/gardevoir",
        rel: "stylesheet"
      }
    ]
  });
  html2 = html2.replaceAll(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  const headChunk = await renderSSRHead(head);
  return `<!DOCTYPE html>
<html ${headChunk.htmlAttrs}>
<head>${headChunk.headTags}</head>
<body ${headChunk.bodyAttrs}>${headChunk.bodyTagsOpen}<div data-v-inspector-ignore="true" style="position: relative; display: flex; margin: 0 auto; width: ${options.width}px; height: ${options.height}px; overflow: hidden;">${html2}</div>${headChunk.bodyTags}</body>
</html>`;
}

async function useOgImageBufferCache(ctx, options) {
  let enabled = false;
  prefixStorage(useStorage(), withTrailingSlash(options.baseCacheKey || "/"));
  ctx.key;
  let cachedItem = false;
  {
    setHeader(ctx.e, "Cache-Control", "no-cache, no-store, must-revalidate");
    setHeader(ctx.e, "Pragma", "no-cache");
    setHeader(ctx.e, "Expires", "0");
  }
  return {
    enabled,
    cachedItem,
    async update(item) {
      return;
    }
  };
}

async function fontEventHandler(e) {
  const path = parseURL(e.path).pathname;
  const { fonts } = useOgImageRuntimeConfig();
  const key = path.split("/font/")[1];
  if (key && key.includes(":")) {
    const font2 = fonts.find((f) => f.key === key);
    if (font2?.key && await assets.hasItem(font2.key)) {
      let fontData = await assets.getItem(font2.key);
      if (fontData instanceof Uint8Array) {
        const decoder = new TextDecoder();
        fontData = decoder.decode(fontData);
      }
      if (key.includes(".oft")) {
        setResponseHeader(e, "Content-Type", "font/otf");
      } else if (key.includes(".woff2")) {
        setResponseHeader(e, "Content-Type", "font/woff2");
      } else if (key.includes(".ttf")) {
        setResponseHeader(e, "Content-Type", "font/ttf");
      }
      return Buffer.from(fontData, "base64");
    }
  }
  const [_name, _weight] = String(key?.split(".")[0]).split("/");
  if (!_name || !_weight)
    return "Provide a font name and weight";
  const name = String(_name[0]).toUpperCase() + _name.slice(1);
  const weight = Math.round(Number.parseInt(_weight) / 100) * 100;
  const config = useOgImageRuntimeConfig();
  const normalisedFonts = normaliseFontInput(config.fonts);
  let font;
  if (typeof getQuery$1(e).font === "string")
    font = JSON.parse(getQuery$1(e).font);
  if (!font) {
    font = normalisedFonts.find((font2) => {
      return font2.name.toLowerCase() === name.toLowerCase() && weight === Number(font2.weight);
    });
  }
  if (!font) {
    return createError({
      statusCode: 404,
      statusMessage: `[Nuxt OG Image] Font ${name}:${weight} not found`
    });
  }
  const css = await globalThis.$fetch(`https://fonts.googleapis.com/css2?family=${name}:wght@${weight}`, {
    headers: {
      // Make sure it returns TTF.
      "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
    }
  });
  if (!css) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Invalid Google Font ${name}:${weight}`
    });
  }
  const ttfResource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (ttfResource?.[1])
    return proxyRequest(e, ttfResource[1], {});
  const woff2Resource = css.match(/src: url\((.+)\) format\('woff2'\)/);
  if (woff2Resource?.[1])
    return sendRedirect(e, woff2Resource[1]);
  return createError({
    statusCode: 500,
    statusMessage: `[Nuxt OG Image] Malformed Google Font CSS ${css}`
  });
}
async function imageEventHandler(e) {
  const ctx = await resolveContext(e);
  if (ctx instanceof H3Error)
    return ctx;
  const { isDebugJsonPayload, extension, options, renderer } = ctx;
  const { debug, baseCacheKey } = useOgImageRuntimeConfig();
  const compatibilityHints = [];
  if (isDebugJsonPayload) {
    const queryExtension = getQuery$1(e).extension || ctx.options.extension;
    if (["jpeg", "jpg"].includes(queryExtension) && options.renderer === "satori")
      compatibilityHints.push("Converting PNGs to JPEGs requires Sharp which only runs on Node based systems.");
    if (options.renderer === "chromium")
      compatibilityHints.push("Using Chromium to generate images is only supported in Node based environments. It's recommended to only use this if you're prerendering");
    setHeader(e, "Content-Type", "application/json");
    return {
      siteConfig: {
        url: e.context.siteConfig.get().url
      },
      compatibilityHints,
      cacheKey: ctx.key,
      options: ctx.options,
      ...options.renderer === "satori" ? await renderer.debug(ctx) : void 0
    };
  }
  switch (extension) {
    case "html":
      setHeader(e, "Content-Type", `text/html`);
      return html(ctx);
    case "svg":
      if (ctx.renderer.name !== "satori") {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/svg+xml`);
      return (await ctx.renderer.debug(ctx)).svg;
    case "png":
    case "jpeg":
    case "jpg":
      if (!renderer.supportedFormats.includes(extension)) {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/${extension === "jpg" ? "jpeg" : extension}`);
      break;
    default:
      return createError({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Invalid request for og.${extension}.`
      });
  }
  const cacheApi = await useOgImageBufferCache(ctx, {
    cacheMaxAgeSeconds: ctx.options.cacheMaxAgeSeconds,
    baseCacheKey
  });
  if (typeof cacheApi === "undefined")
    return;
  if (cacheApi instanceof H3Error)
    return cacheApi;
  let image = cacheApi.cachedItem;
  if (!image) {
    image = await renderer.createImage(ctx);
    if (image instanceof H3Error)
      return image;
    if (!image) {
      return createError({
        statusCode: 500,
        statusMessage: `Failed to generate og.${extension}.`
      });
    }
    await cacheApi.update(image);
  }
  return image;
}

const font = defineEventHandler(fontEventHandler);

const font$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: font
}, Symbol.toStringTag, { value: 'Module' }));

const debug_json = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/json");
  const runtimeConfig = useOgImageRuntimeConfig();
  return {
    siteConfigUrl: useSiteConfig(e).url,
    componentNames,
    runtimeConfig,
    compatibility
  };
});

const debug_json$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: debug_json
}, Symbol.toStringTag, { value: 'Module' }));

const image = defineEventHandler(imageEventHandler);

const image$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: image
}, Symbol.toStringTag, { value: 'Module' }));

const node$2 = {
  initWasmPromise: Promise.resolve(),
  Resvg: Resvg
};

const node$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: node$2
}, Symbol.toStringTag, { value: 'Module' }));

const node = {
  initWasmPromise: Promise.resolve(),
  satori: _satori
};

const node$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: node
}, Symbol.toStringTag, { value: 'Module' }));

const empty$1 = Object.freeze(
  Object.create(null, {
    __mock__: { get: () => true },
  }),
);

const empty = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: empty$1
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
