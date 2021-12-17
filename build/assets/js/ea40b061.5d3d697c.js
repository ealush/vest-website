"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [352],
  {
    3905: function (e, a, n) {
      n.d(a, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return f;
        },
      });
      var t = n(7294);
      function r(e, a, n) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = n),
          e
        );
      }
      function l(e, a) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function o(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? l(Object(n), !0).forEach(function (a) {
                r(e, a, n[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(n, a)
                );
              });
        }
        return e;
      }
      function s(e, a) {
        if (null == e) return {};
        var n,
          t,
          r = (function (e, a) {
            if (null == e) return {};
            var n,
              t,
              r = {},
              l = Object.keys(e);
            for (t = 0; t < l.length; t++)
              (n = l[t]), a.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (t = 0; t < l.length; t++)
            (n = l[t]),
              a.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var i = t.createContext({}),
        c = function (e) {
          var a = t.useContext(i),
            n = a;
          return e && (n = "function" == typeof e ? e(a) : o(o({}, a), e)), n;
        },
        p = function (e) {
          var a = c(e.components);
          return t.createElement(i.Provider, { value: a }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var a = e.children;
            return t.createElement(t.Fragment, {}, a);
          },
        },
        m = t.forwardRef(function (e, a) {
          var n = e.components,
            r = e.mdxType,
            l = e.originalType,
            i = e.parentName,
            p = s(e, ["components", "mdxType", "originalType", "parentName"]),
            m = c(n),
            f = r,
            h = m["".concat(i, ".").concat(f)] || m[f] || u[f] || l;
          return n
            ? t.createElement(h, o(o({ ref: a }, p), {}, { components: n }))
            : t.createElement(h, o({ ref: a }, p));
        });
      function f(e, a) {
        var n = arguments,
          r = a && a.mdxType;
        if ("string" == typeof e || r) {
          var l = n.length,
            o = new Array(l);
          o[0] = m;
          var s = {};
          for (var i in a) hasOwnProperty.call(a, i) && (s[i] = a[i]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : r),
            (o[1] = s);
          for (var c = 2; c < l; c++) o[c] = n[c];
          return t.createElement.apply(null, o);
        }
        return t.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    8009: function (e, a, n) {
      n.r(a),
        n.d(a, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return i;
          },
          metadata: function () {
            return c;
          },
          toc: function () {
            return p;
          },
          default: function () {
            return m;
          },
        });
      var t = n(7462),
        r = n(3366),
        l = (n(7294), n(3905)),
        o = ["components"],
        s = { sidebar_position: 2 },
        i = "Schema rules",
        c = {
          unversionedId: "enforce/builtin-enforce-plugins/schema_rules",
          id: "enforce/builtin-enforce-plugins/schema_rules",
          isDocsHomePage: !1,
          title: "Schema rules",
          description:
            "While less common when using Vest, sometimes it might be useful to validate a value against a schema. Vest comes with some schema validation rules that are handy for data-shape validation.",
          source: "@site/docs/enforce/builtin-enforce-plugins/schema_rules.md",
          sourceDirName: "enforce/builtin-enforce-plugins",
          slug: "/enforce/builtin-enforce-plugins/schema_rules",
          permalink: "/docs/enforce/builtin-enforce-plugins/schema_rules",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/enforce/builtin-enforce-plugins/schema_rules.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Compound rules",
            permalink: "/docs/enforce/builtin-enforce-plugins/compound_rules",
          },
          next: {
            title: "Creating Custom Rules",
            permalink: "/docs/enforce/creating_custom_rules",
          },
        },
        p = [
          {
            value: "enforce.shape() - Lean schema validation.",
            id: "enforceshape---lean-schema-validation",
            children: [
              {
                value: "enforce.optional() - nullable values",
                id: "enforceoptional---nullable-values",
                children: [],
                level: 3,
              },
              {
                value: "partial() - allows supplying a subset of keys",
                id: "partial---allows-supplying-a-subset-of-keys",
                children: [],
                level: 3,
              },
              {
                value: "enforce.loose() - loose shape matching",
                id: "enforceloose---loose-shape-matching",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "enforce.isArrayOf() - array shape matching",
            id: "enforceisarrayof---array-shape-matching",
            children: [],
            level: 2,
          },
        ],
        u = { toc: p };
      function m(e) {
        var a = e.components,
          n = (0, r.Z)(e, o);
        return (0, l.kt)(
          "wrapper",
          (0, t.Z)({}, u, n, { components: a, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "schema-rules" }, "Schema rules"),
          (0, l.kt)(
            "p",
            null,
            "While less common when using Vest, sometimes it might be useful to validate a value against a schema. Vest comes with some schema validation rules that are handy for data-shape validation."
          ),
          (0, l.kt)(
            "p",
            null,
            "To use it, simply import these rules in your project:"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import "vest/enforce/schema";\n'
            )
          ),
          (0, l.kt)(
            "p",
            null,
            "These rules will then become available in ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "enforce"),
            ":"
          ),
          (0, l.kt)(
            "ul",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ul" },
              (0, l.kt)(
                "a",
                { parentName: "li", href: "#schema-rules" },
                "Schema rules"
              ),
              (0, l.kt)(
                "ul",
                { parentName: "li" },
                (0, l.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, l.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "#enforceshape---lean-schema-validation",
                    },
                    "enforce.shape() - Lean schema validation."
                  ),
                  (0, l.kt)(
                    "ul",
                    { parentName: "li" },
                    (0, l.kt)(
                      "li",
                      { parentName: "ul" },
                      (0, l.kt)(
                        "a",
                        {
                          parentName: "li",
                          href: "#enforceoptional---nullable-values",
                        },
                        "enforce.optional() - nullable values"
                      )
                    ),
                    (0, l.kt)(
                      "li",
                      { parentName: "ul" },
                      (0, l.kt)(
                        "a",
                        {
                          parentName: "li",
                          href: "#partial---allows-supplying-a-subset-of-keys",
                        },
                        "partial() - allows supplying a subset of keys"
                      )
                    ),
                    (0, l.kt)(
                      "li",
                      { parentName: "ul" },
                      (0, l.kt)(
                        "a",
                        {
                          parentName: "li",
                          href: "#enforceloose---loose-shape-matching",
                        },
                        "enforce.loose() - loose shape matching"
                      )
                    )
                  )
                ),
                (0, l.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, l.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "#enforceisarrayof---array-shape-matching",
                    },
                    "enforce.isArrayOf() - array shape matching"
                  )
                )
              )
            )
          ),
          (0, l.kt)(
            "h2",
            { id: "enforceshape---lean-schema-validation" },
            "enforce.shape() - Lean schema validation."
          ),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("inlineCode", { parentName: "p" }, "enforce.shape()"),
            " validates the structure of an object."
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce({\n  firstName: "Rick",\n  lastName: "Sanchez",\n  age: 70,\n}).shape({\n  firstName: enforce.isString(),\n  lastName: enforce.isString(),\n  age: enforce.isNumber(),\n});\n'
            )
          ),
          (0, l.kt)("p", null, "You may also chain your validation rules:"),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce({\n  age: 22,\n}).shape({\n  age: enforce.isNumber().isBetween(0, 150),\n});\n"
            )
          ),
          (0, l.kt)(
            "p",
            null,
            "You may also nest calls to shape in order to validate a deeply nested object."
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce({\n  user: {\n    name: {\n      first: "Joseph",\n      last: "Weil",\n    },\n  },\n}).shape({\n  user: enforce.shape({\n    name: enforce.shape({\n      first: enforce.isString(),\n      last: enforce.isString(),\n    }),\n  }),\n});\n'
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "enforceoptional---nullable-values" },
            "enforce.optional() - nullable values"
          ),
          (0, l.kt)(
            "p",
            null,
            "In regular cases, a missing value would cause a validation failure. To prevent that from happening, mark your optional keys with ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "enforce.optional"),
            "."
          ),
          (0, l.kt)(
            "p",
            null,
            "enforce.optional will pass validations of a key that's either not defined, undefined or null."
          ),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("inlineCode", { parentName: "p" }, "enforce.optional"),
            " takes as its arguments all the rules that their value must pass."
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce({\n  firstName: "Rick",\n  lastName: "Sanchez",\n}).shape({\n  firstName: enforce.isString(),\n  middleName: enforce.optional(enforce.isString()),\n  lastName: enforce.isString(),\n});\n'
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "partial---allows-supplying-a-subset-of-keys" },
            "partial() - allows supplying a subset of keys"
          ),
          (0, l.kt)(
            "p",
            null,
            'When supplying a "shape" or a "loose" matcher, enforce requires at least the keys that are specified by the matcher, unless you manually wrap them with "optional". ',
            (0, l.kt)("inlineCode", { parentName: "p" }, "partial"),
            " is a shorthand for applyong the ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "optional"),
            " modifier on all shape object keys. By wrapping the input of a matcher with ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "partial"),
            ", you can supply a subset of the keys that are required as if you had used ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "optional"),
            " on each key."
          ),
          (0, l.kt)(
            "p",
            null,
            "To be used, ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "partial"),
            " needs to be imported directly from ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "vest/enforce/schema"),
            ":"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { partial } from "vest/enforce/schema";\n'
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce({}).shape(\n  partial({\n    firstName: enforce.isString(),\n    lastName: enforce.isString(),\n  })\n);\n"
            )
          ),
          (0, l.kt)(
            "p",
            null,
            "This won't throw because all the fields are now treated as optional."
          ),
          (0, l.kt)(
            "h3",
            { id: "enforceloose---loose-shape-matching" },
            "enforce.loose() - loose shape matching"
          ),
          (0, l.kt)(
            "p",
            null,
            "By default, shape will treat excess keys in your data object as validation errors. If you wish to allow support for excess keys in your object's shape, you can use ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "enforce.loose()"),
            " which is a shorthand to ",
            (0, l.kt)(
              "inlineCode",
              { parentName: "p" },
              "enforce.shape(data, shape, { loose: true })"
            ),
            "."
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce({ name: "Laura", code: "x23" }).shape({ name: enforce.isString() });\n// \ud83d\udea8 This will throw an error because `code` is not defined in the shape\n'
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce({ name: "Laura", code: "x23" }).loose({ name: enforce.isString() });\n// \u2705 This will pass with `code` not being validated\n'
            )
          ),
          (0, l.kt)(
            "h2",
            { id: "enforceisarrayof---array-shape-matching" },
            "enforce.isArrayOf() - array shape matching"
          ),
          (0, l.kt)(
            "p",
            null,
            "enforce.isArrayOf can be used to determine the allowed types and values within an array. It will run against each element in the array, and will only pass if all items meet at least one of the validation rules."
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1, 2, "hello!"]).isArrayOf(enforce.isString(), enforce.isNumber());\n'
            )
          ),
          (0, l.kt)(
            "p",
            null,
            "You can also combine ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "isArrayOf"),
            " with other rules to validate other array properties:"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(someArrayValue)\n  .isArrayOf(enforce.isString(), enforce.isNumber().lessThan(3))\n  .longerThan(2);\n"
            )
          ),
          (0, l.kt)("p", null, "And as part of shape:"),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce({ data: [1, 2, 3] }).shape({\n  data: enforce.isArrayOf(enforce.isNumber()),\n});\n"
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
