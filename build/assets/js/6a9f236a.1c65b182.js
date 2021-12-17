"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [836],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return m;
        },
      });
      var r = n(7294);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var u = r.createContext({}),
        l = function (e) {
          var t = r.useContext(u),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        c = function (e) {
          var t = l(e.components);
          return r.createElement(u.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            u = e.parentName,
            c = a(e, ["components", "mdxType", "originalType", "parentName"]),
            d = l(n),
            m = o,
            f = d["".concat(u, ".").concat(m)] || d[m] || p[m] || i;
          return n
            ? r.createElement(f, s(s({ ref: t }, c), {}, { components: n }))
            : r.createElement(f, s({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = n.length,
            s = new Array(i);
          s[0] = d;
          var a = {};
          for (var u in t) hasOwnProperty.call(t, u) && (a[u] = t[u]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : o),
            (s[1] = a);
          for (var l = 2; l < i; l++) s[l] = n[l];
          return r.createElement.apply(null, s);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    641: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return a;
          },
          contentTitle: function () {
            return u;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return c;
          },
          default: function () {
            return d;
          },
        });
      var r = n(7462),
        o = n(3366),
        i = (n(7294), n(3905)),
        s = ["components"],
        a = { sidebar_position: 1 },
        u = "Using Vest in node",
        l = {
          unversionedId: "recipies/using_with_node",
          id: "recipies/using_with_node",
          isDocsHomePage: !1,
          title: "Using Vest in node",
          description:
            "Using Vest in node is mostly the same as it is in the browser, but you should consider your runtime.",
          source: "@site/docs/recipies/using_with_node.md",
          sourceDirName: "recipies",
          slug: "/recipies/using_with_node",
          permalink: "/docs/recipies/using_with_node",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/recipies/using_with_node.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "promisify",
            permalink: "/docs/utilities/promisify",
          },
          next: { title: "Upgrade guides", permalink: "/docs/migration_guide" },
        },
        c = [
          {
            value: "Validation state",
            id: "validation-state",
            children: [],
            level: 2,
          },
          {
            value: "require vs import",
            id: "require-vs-import",
            children: [
              {
                value: "Most compatible: commonjs",
                id: "most-compatible-commonjs",
                children: [],
                level: 3,
              },
              { value: "Node 14", id: "node-14", children: [], level: 3 },
            ],
            level: 2,
          },
        ],
        p = { toc: c };
      function d(e) {
        var t = e.components,
          n = (0, o.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "using-vest-in-node" }, "Using Vest in node"),
          (0, i.kt)(
            "p",
            null,
            "Using Vest in node is mostly the same as it is in the browser, but you should consider your runtime."
          ),
          (0, i.kt)("h2", { id: "validation-state" }, "Validation state"),
          (0, i.kt)(
            "p",
            null,
            "When running your validations in your api, you usually want to have stateless validations to prevent leakage between requests."
          ),
          (0, i.kt)(
            "p",
            null,
            "Read more about ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/understanding_state" },
              "Vest's state"
            ),
            "."
          ),
          (0, i.kt)("h2", { id: "require-vs-import" }, "require vs import"),
          (0, i.kt)(
            "p",
            null,
            "Depending on your node version and the module system you support you can use different syntax to include Vest."
          ),
          (0, i.kt)(
            "h3",
            { id: "most-compatible-commonjs" },
            "Most compatible: commonjs"
          ),
          (0, i.kt)(
            "p",
            null,
            "To be on the safe side and compatible with all node versions, use a ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "require"),
            " statement."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const vest = require("vest");\nconst { test, enforce } = vest;\n'
            )
          ),
          (0, i.kt)("h3", { id: "node-14" }, "Node 14"),
          (0, i.kt)(
            "p",
            null,
            "With node 14's support of ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://nodejs.org/api/esm.html#esm_package_entry_points",
              },
              "package entry points"
            ),
            ", node should be able to detect on its own which import style you use and load the correct bundle."
          ),
          (0, i.kt)("p", null, "Both of the following should work:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test } from "vest";\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const vest = require("vest");\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
