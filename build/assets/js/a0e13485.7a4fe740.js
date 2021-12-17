"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [397],
  {
    3905: function (e, n, r) {
      r.d(n, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return d;
        },
      });
      var t = r(7294);
      function o(e, n, r) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          e
        );
      }
      function a(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(r), !0).forEach(function (n) {
                o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(r, n)
                );
              });
        }
        return e;
      }
      function i(e, n) {
        if (null == e) return {};
        var r,
          t,
          o = (function (e, n) {
            if (null == e) return {};
            var r,
              t,
              o = {},
              a = Object.keys(e);
            for (t = 0; t < a.length; t++)
              (r = a[t]), n.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (t = 0; t < a.length; t++)
            (r = a[t]),
              n.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var s = t.createContext({}),
        u = function (e) {
          var n = t.useContext(s),
            r = n;
          return e && (r = "function" == typeof e ? e(n) : l(l({}, n), e)), r;
        },
        c = function (e) {
          var n = u(e.components);
          return t.createElement(s.Provider, { value: n }, e.children);
        },
        f = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return t.createElement(t.Fragment, {}, n);
          },
        },
        p = t.forwardRef(function (e, n) {
          var r = e.components,
            o = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            c = i(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(r),
            d = o,
            m = p["".concat(s, ".").concat(d)] || p[d] || f[d] || a;
          return r
            ? t.createElement(m, l(l({ ref: n }, c), {}, { components: r }))
            : t.createElement(m, l({ ref: n }, c));
        });
      function d(e, n) {
        var r = arguments,
          o = n && n.mdxType;
        if ("string" == typeof e || o) {
          var a = r.length,
            l = new Array(a);
          l[0] = p;
          var i = {};
          for (var s in n) hasOwnProperty.call(n, s) && (i[s] = n[s]);
          (i.originalType = e),
            (i.mdxType = "string" == typeof e ? e : o),
            (l[1] = i);
          for (var u = 2; u < a; u++) l[u] = r[u];
          return t.createElement.apply(null, l);
        }
        return t.createElement.apply(null, r);
      }
      p.displayName = "MDXCreateElement";
    },
    6298: function (e, n, r) {
      r.r(n),
        r.d(n, {
          frontMatter: function () {
            return i;
          },
          contentTitle: function () {
            return s;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return c;
          },
          default: function () {
            return p;
          },
        });
      var t = r(7462),
        o = r(3366),
        a = (r(7294), r(3905)),
        l = ["components"],
        i = { sidebar_position: 1 },
        s = "Compound rules",
        u = {
          unversionedId: "enforce/builtin-enforce-plugins/compound_rules",
          id: "enforce/builtin-enforce-plugins/compound_rules",
          isDocsHomePage: !1,
          title: "Compound rules",
          description:
            "Alongside the list of rules that only accept data provided by the user, enforce also supports compound rules - these are rules that accept other rules as their arguments. These rules let you validate more complex scenarios with the ergonomics of enforce.",
          source:
            "@site/docs/enforce/builtin-enforce-plugins/compound_rules.md",
          sourceDirName: "enforce/builtin-enforce-plugins",
          slug: "/enforce/builtin-enforce-plugins/compound_rules",
          permalink: "/docs/enforce/builtin-enforce-plugins/compound_rules",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/enforce/builtin-enforce-plugins/compound_rules.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "List of Enforce rules",
            permalink: "/docs/enforce/enforce_rules",
          },
          next: {
            title: "Schema rules",
            permalink: "/docs/enforce/builtin-enforce-plugins/schema_rules",
          },
        },
        c = [
          {
            value: "enforce.anyOf() - either/or validations",
            id: "enforceanyof---eitheror-validations",
            children: [],
            level: 2,
          },
          {
            value: "enforce.allOf() - all/and validations",
            id: "enforceallof---alland-validations",
            children: [],
            level: 2,
          },
          {
            value: "enforce.oneOf()",
            id: "enforceoneof",
            children: [],
            level: 2,
          },
          {
            value: "enforce.noneOf - None rules",
            id: "enforcenoneof---none-rules",
            children: [],
            level: 2,
          },
        ],
        f = { toc: c };
      function p(e) {
        var n = e.components,
          r = (0, o.Z)(e, l);
        return (0, a.kt)(
          "wrapper",
          (0, t.Z)({}, f, r, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "compound-rules" }, "Compound rules"),
          (0, a.kt)(
            "p",
            null,
            "Alongside the list of rules that only accept data provided by the user, enforce also supports compound rules - these are rules that accept other rules as their arguments. These rules let you validate more complex scenarios with the ergonomics of enforce."
          ),
          (0, a.kt)(
            "p",
            null,
            "To use it, simply import these rules in your project:"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import "vest/enforce/compounds";\n'
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "These rules will then become available in ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "enforce"),
            ":"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                { parentName: "li", href: "#compound-rules" },
                "Compound rules"
              ),
              (0, a.kt)(
                "ul",
                { parentName: "li" },
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "#enforceanyof---eitheror-validations",
                    },
                    "enforce.anyOf() - either/or validations"
                  )
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "#enforceallof---alland-validations",
                    },
                    "enforce.allOf() - all/and validations"
                  )
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    { parentName: "li", href: "#enforceoneof" },
                    "enforce.oneOf()"
                  )
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    { parentName: "li", href: "#enforcenoneof---none-rules" },
                    "enforce.noneOf - None rules"
                  )
                )
              )
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "enforceanyof---eitheror-validations" },
            "enforce.anyOf() - either/or validations"
          ),
          (0, a.kt)(
            "p",
            null,
            "Sometimes a value has more than one valid possibility, ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "any"),
            " lets us validate that a value passes ",
            (0, a.kt)("em", { parentName: "p" }, "at least"),
            " one of the supplied rules."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(value).anyOf(enforce.isString(), enforce.isArray()).isNotEmpty();\n// A valid value would either an array or a string.\n"
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "enforceallof---alland-validations" },
            "enforce.allOf() - all/and validations"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("inlineCode", { parentName: "p" }, "allOf"),
            " lets us validate that a value passes ",
            (0, a.kt)("em", { parentName: "p" }, "all"),
            " of the supplied rules."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(value).allOf(enforce.isArray(), enforce.longerThan(2));\n"
            )
          ),
          (0, a.kt)("h2", { id: "enforceoneof" }, "enforce.oneOf()"),
          (0, a.kt)(
            "p",
            null,
            "enforce.oneOf can be used to determine if ",
            (0, a.kt)("em", { parentName: "p" }, "exactly"),
            " one of the rules applies. It will run against rule in the array, and will only pass if exactly one rule applies."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(value).oneOf(\n  enforce.isString(),\n  enforce.isNumber(),\n  enforce.longerThan(1)\n);\n\n/*\nvalue = 1      -> \u2705 (value is a number)\nvalue = "1"    -> \u2705 (value is string)\nvalue = [1, 2] -> \u2705 (value is longer than 1)\nvalue = "12"   -> \ud83d\udea8 (value is both a string and longer than 1)\n*/\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "enforcenoneof---none-rules" },
            "enforce.noneOf - None rules"
          ),
          (0, a.kt)(
            "p",
            null,
            "enforce.noneOf can be used to determine if ",
            (0, a.kt)("em", { parentName: "p" }, "none"),
            " of the rules apply. It will run against each rules supplied, and will only pass if none of the rules pass."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(value).noneOf(\n  enforce.isString(),\n  enforce.isNumber(),\n  enforce.longerThan(1)\n);\n\nvalue = 1      -> \ud83d\udea8 (value is a number)\nvalue = "1"    -> \ud83d\udea8 (value is string)\nvalue = [1, 2] -> \ud83d\udea8 (value is longer than 1)\nvalue = ["12"] -> \u2705 (value is not a string and not longer than 1)\n\n'
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
