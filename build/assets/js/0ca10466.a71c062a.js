"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [10],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return d;
        },
      });
      var r = n(7294);
      function i(e, t, n) {
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
      function a(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var c = r.createContext({}),
        l = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        p = function (e) {
          var t = l(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            p = s(e, ["components", "mdxType", "originalType", "parentName"]),
            m = l(n),
            d = i,
            f = m["".concat(c, ".").concat(d)] || m[d] || u[d] || a;
          return n
            ? r.createElement(f, o(o({ ref: t }, p), {}, { components: n }))
            : r.createElement(f, o({ ref: t }, p));
        });
      function d(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var a = n.length,
            o = new Array(a);
          o[0] = m;
          var s = {};
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : i),
            (o[1] = s);
          for (var l = 2; l < a; l++) o[l] = n[l];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    8104: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return c;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return p;
          },
          default: function () {
            return m;
          },
        });
      var r = n(7462),
        i = n(3366),
        a = (n(7294), n(3905)),
        o = ["components"],
        s = { sidebar_position: 2 },
        c = void 0,
        l = {
          unversionedId: "utilities/promisify",
          id: "utilities/promisify",
          isDocsHomePage: !1,
          title: "promisify",
          description: "promisify()",
          source: "@site/docs/utilities/promisify.md",
          sourceDirName: "utilities",
          slug: "/utilities/promisify",
          permalink: "/docs/utilities/promisify",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/utilities/promisify.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "classnames",
            permalink: "/docs/utilities/classnames",
          },
          next: {
            title: "Using Vest in node",
            permalink: "/docs/recipies/using_with_node",
          },
        },
        p = [
          {
            value: "<code>promisify()</code>",
            id: "promisify",
            children: [{ value: "Usage", id: "usage", children: [], level: 3 }],
            level: 2,
          },
        ],
        u = { toc: p };
      function m(e) {
        var t = e.components,
          n = (0, i.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h2",
            { id: "promisify" },
            (0, a.kt)("inlineCode", { parentName: "h2" }, "promisify()")
          ),
          (0, a.kt)(
            "p",
            null,
            "Promisify is a function that enables you to run your async validations as a ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
              },
              "Javascript Promise"
            ),
            ".\nThis can be useful when running async validations on the server, or when you do not need the partial validation results."
          ),
          (0, a.kt)(
            "div",
            { className: "admonition admonition-tip alert alert--success" },
            (0, a.kt)(
              "div",
              { parentName: "div", className: "admonition-heading" },
              (0, a.kt)(
                "h5",
                { parentName: "div" },
                (0, a.kt)(
                  "span",
                  { parentName: "h5", className: "admonition-icon" },
                  (0, a.kt)(
                    "svg",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "16",
                      viewBox: "0 0 12 16",
                    },
                    (0, a.kt)("path", {
                      parentName: "svg",
                      fillRule: "evenodd",
                      d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z",
                    })
                  )
                ),
                "NOTE"
              )
            ),
            (0, a.kt)(
              "div",
              { parentName: "div", className: "admonition-content" },
              (0, a.kt)(
                "p",
                { parentName: "div" },
                "The Promise is resolved when all tests finish running."
              )
            )
          ),
          (0, a.kt)("h3", { id: "usage" }, "Usage"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("inlineCode", { parentName: "p" }, "promisify()"),
            " accepts a validation suite declaration, and returns a function that when called, returns a Promise."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test, skipWhen } from "vest";\nimport promisify from "vest/promisify";\n\nconst suite = promisify(\n  create((data) => {\n    test("email", "The email already exists", () => doesEmailExist(data.email));\n    test("username", "The username already exists", () =>\n      doesUsernameExist(data.username)\n    );\n  })\n);\n\nsuite(data).then((res) => {\n  if(res.hasErrors("email")) {\n    /* ... */\n  });\n\n  if(res.hasErrors("username")) {\n    /* ... */\n  });\n});\n'
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
