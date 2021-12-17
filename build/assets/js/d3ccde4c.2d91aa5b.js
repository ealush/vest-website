"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [566],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return d;
        },
        kt: function () {
          return f;
        },
      });
      var s = n(7294);
      function a(e, t, n) {
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
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
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
      function o(e, t) {
        if (null == e) return {};
        var n,
          s,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              s,
              a = {},
              i = Object.keys(e);
            for (s = 0; s < i.length; s++)
              (n = i[s]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (s = 0; s < i.length; s++)
            (n = i[s]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var l = s.createContext({}),
        c = function (e) {
          var t = s.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : r(r({}, t), e)), n;
        },
        d = function (e) {
          var t = c(e.components);
          return s.createElement(l.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return s.createElement(s.Fragment, {}, t);
          },
        },
        p = s.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            d = o(e, ["components", "mdxType", "originalType", "parentName"]),
            p = c(n),
            f = a,
            m = p["".concat(l, ".").concat(f)] || p[f] || u[f] || i;
          return n
            ? s.createElement(m, r(r({ ref: t }, d), {}, { components: n }))
            : s.createElement(m, r({ ref: t }, d));
        });
      function f(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var i = n.length,
            r = new Array(i);
          r[0] = p;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : a),
            (r[1] = o);
          for (var c = 2; c < i; c++) r[c] = n[c];
          return s.createElement.apply(null, r);
        }
        return s.createElement.apply(null, n);
      }
      p.displayName = "MDXCreateElement";
    },
    7102: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return o;
          },
          contentTitle: function () {
            return l;
          },
          metadata: function () {
            return c;
          },
          toc: function () {
            return d;
          },
          default: function () {
            return p;
          },
        });
      var s = n(7462),
        a = n(3366),
        i = (n(7294), n(3905)),
        r = ["components"],
        o = { sidebar_position: 1 },
        l = "classnames",
        c = {
          unversionedId: "utilities/classnames",
          id: "utilities/classnames",
          isDocsHomePage: !1,
          title: "classnames",
          description:
            "After validating user input, you usually need to also indicate the validation result on the page - most of the times by adding a class to your input element. One of the difficulties you are likely to face is that the logic for setting the class is not always the negation of hasErrors.",
          source: "@site/docs/utilities/classnames.md",
          sourceDirName: "utilities",
          slug: "/utilities/classnames",
          permalink: "/docs/utilities/classnames",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/utilities/classnames.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Composing enforce rules",
            permalink: "/docs/enforce/composing_enforce_rules",
          },
          next: { title: "promisify", permalink: "/docs/utilities/promisify" },
        },
        d = [],
        u = { toc: d };
      function p(e) {
        var t = e.components,
          n = (0, a.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, s.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "classnames" }, "classnames"),
          (0, i.kt)(
            "p",
            null,
            "After validating user input, you usually need to also indicate the validation result on the page - most of the times by adding a class to your input element. One of the difficulties you are likely to face is that the logic for setting the class is not always the negation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "hasErrors"),
            "."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "const addIsValidClass = !res.hasErrors(\"fieldName\"); // this does not ALWAYS mean 'valid'\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "What about when the field is skipped or not validated yet? It does not have errors, so ",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "res.hasErrors('fieldName')"
            ),
            " will return ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "false"),
            ", and by that logic, you might mistakenly add a ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "is-valid"),
            " class to your element."
          ),
          (0, i.kt)(
            "p",
            null,
            "In this case you will also need to check if the test actually ran - so:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const addIsValidClass = res.tests[fieldName] && !res.hasErrors("fieldName");\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "But this can get pretty cumbersome when added to multiple fields with different criteria (untested, invalid, hasWarning...)."
          ),
          (0, i.kt)(
            "p",
            null,
            "This is what ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "vest/classnames"),
            " is for. It is a tiny utility function, that allows you to specify classnames to be added for each criteria."
          ),
          (0, i.kt)(
            "p",
            null,
            "The way it works is simple. You call ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "classnames"),
            " with your result object, and the list of classes you want to be added for whenever the field is tested, untested, has warning or is invalid. It then returns a function that when called with a field name, returns a space delimited string of classes. If more than one class applies (both tested and invalid, for example) they will both be added to the string."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import classnames from "vest/classnames";\nimport suite from "./suite";\n\nconst res = suite(data);\n\nconst cn = classnames(res, {\n  untested: "is-untested", // will only be applied if the provided field did not run yet\n  tested: "some-tested-class", // will only be applied if the provided field did run\n  invalid: "my_invalid_class", // will only be applied if the provided field ran at least once and has an error\n  valid: "my_valid_class", // will only be applied if the provided field ran at least once does not have errors or warnings\n  warning: "my_warning_class", // will only be applied if the provided field ran at least once and has a warning\n});\n\nconst fieldOneClasses = cn("field_1"); // "is-untested"\nconst fieldTwoClasses = cn("field_2"); // "some-tested-class my_invalid_class"\nconst fieldThreeClasses = cn("field_3"); // "some-tested-class my_warning_class"\n'
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
