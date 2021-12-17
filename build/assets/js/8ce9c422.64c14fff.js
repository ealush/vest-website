"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [839],
  {
    3905: function (e, n, t) {
      t.d(n, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return f;
        },
      });
      var r = t(7294);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? i(Object(t), !0).forEach(function (n) {
                o(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function s(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var l = r.createContext({}),
        u = function (e) {
          var n = r.useContext(l),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
        },
        c = function (e) {
          var n = u(e.components);
          return r.createElement(l.Provider, { value: n }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return r.createElement(r.Fragment, {}, n);
          },
        },
        m = r.forwardRef(function (e, n) {
          var t = e.components,
            o = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            c = s(e, ["components", "mdxType", "originalType", "parentName"]),
            m = u(t),
            f = o,
            d = m["".concat(l, ".").concat(f)] || m[f] || p[f] || i;
          return t
            ? r.createElement(d, a(a({ ref: n }, c), {}, { components: t }))
            : r.createElement(d, a({ ref: n }, c));
        });
      function f(e, n) {
        var t = arguments,
          o = n && n.mdxType;
        if ("string" == typeof e || o) {
          var i = t.length,
            a = new Array(i);
          a[0] = m;
          var s = {};
          for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (a[1] = s);
          for (var u = 2; u < i; u++) a[u] = t[u];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, t);
      }
      m.displayName = "MDXCreateElement";
    },
    56: function (e, n, t) {
      t.r(n),
        t.d(n, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return l;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return c;
          },
          default: function () {
            return m;
          },
        });
      var r = t(7462),
        o = t(3366),
        i = (t(7294), t(3905)),
        a = ["components"],
        s = { sidebar_position: 5 },
        l = "Consuming external rules",
        u = {
          unversionedId: "enforce/consuming_external_rules",
          id: "enforce/consuming_external_rules",
          isDocsHomePage: !1,
          title: "Consuming external rules",
          description:
            "Enforce comes with the bare minimum of rules needed for input validation, not assuming your business logic constraints.",
          source: "@site/docs/enforce/consuming_external_rules.md",
          sourceDirName: "enforce",
          slug: "/enforce/consuming_external_rules",
          permalink: "/docs/enforce/consuming_external_rules",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/enforce/consuming_external_rules.md",
          tags: [],
          version: "current",
          sidebarPosition: 5,
          frontMatter: { sidebar_position: 5 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Creating Custom Rules",
            permalink: "/docs/enforce/creating_custom_rules",
          },
          next: {
            title: "Composing enforce rules",
            permalink: "/docs/enforce/composing_enforce_rules",
          },
        },
        c = [],
        p = { toc: c };
      function m(e) {
        var n = e.components,
          t = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "h1",
            { id: "consuming-external-rules" },
            "Consuming external rules"
          ),
          (0, i.kt)(
            "p",
            null,
            "Enforce comes with the bare minimum of rules needed for input validation, not assuming your business logic constraints."
          ),
          (0, i.kt)(
            "p",
            null,
            "In some cases you might require more validations such as ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isEmail"),
            " or ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isPhoneNumber"),
            ". Enforce intentionally does not include them because they do not necessarily reflect the way they should work in your app."
          ),
          (0, i.kt)(
            "p",
            null,
            "Luckily, there are numerous packages that can be used along with enforce to add those validations. One of the most popular and most compatible is ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "validator.js"),
            "."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)("code", { parentName: "pre" }, "npm i validator\n")
          ),
          (0, i.kt)(
            "p",
            null,
            "Validator.js is a pretty big package. To prevent it from unnecessarily increasing your bundle size for rules you don't use, import the ones you use individually."
          ),
          (0, i.kt)(
            "p",
            null,
            "Then add those rules with ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "enforce.extend"),
            ":"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import isEmail from "validator/es/lib/isEmail";\nimport isMobilePhone from "validator/es/lib/isMobilePhone";\n\nenforce.extend({ isEmail, isMobilePhone });\n\nenforce("example@example.com").isEmail(); // \u2705\nenforce("example[at]example[dot]com").isEmail(); // \ud83d\udea8\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "A full list of the supported validator.js rules can be found on ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://www.npmjs.com/package/validator",
              },
              "npmjs.com/package/validator"
            ),
            "."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
