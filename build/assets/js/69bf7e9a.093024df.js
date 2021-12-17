"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [199],
  {
    3905: function (e, n, t) {
      t.d(n, {
        Zo: function () {
          return d;
        },
        kt: function () {
          return m;
        },
      });
      var i = t(7294);
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
      function r(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? r(Object(t), !0).forEach(function (n) {
                o(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : r(Object(t)).forEach(function (n) {
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
          i,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (t = r[i]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (t = r[i]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var l = i.createContext({}),
        u = function (e) {
          var n = i.useContext(l),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
        },
        d = function (e) {
          var n = u(e.components);
          return i.createElement(l.Provider, { value: n }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return i.createElement(i.Fragment, {}, n);
          },
        },
        p = i.forwardRef(function (e, n) {
          var t = e.components,
            o = e.mdxType,
            r = e.originalType,
            l = e.parentName,
            d = s(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(t),
            m = o,
            f = p["".concat(l, ".").concat(m)] || p[m] || c[m] || r;
          return t
            ? i.createElement(f, a(a({ ref: n }, d), {}, { components: t }))
            : i.createElement(f, a({ ref: n }, d));
        });
      function m(e, n) {
        var t = arguments,
          o = n && n.mdxType;
        if ("string" == typeof e || o) {
          var r = t.length,
            a = new Array(r);
          a[0] = p;
          var s = {};
          for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (a[1] = s);
          for (var u = 2; u < r; u++) a[u] = t[u];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, t);
      }
      p.displayName = "MDXCreateElement";
    },
    9676: function (e, n, t) {
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
            return d;
          },
          default: function () {
            return p;
          },
        });
      var i = t(7462),
        o = t(3366),
        r = (t(7294), t(3905)),
        a = ["components"],
        s = { sidebar_position: 1 },
        l = "Excluding and including tests",
        u = {
          unversionedId:
            "writing_your_suite/including_and_excluding/skip_and_only",
          id: "writing_your_suite/including_and_excluding/skip_and_only",
          isDocsHomePage: !1,
          title: "Excluding and including tests",
          description:
            "When performing validations in real-world scenarios, you may need to only run tests of a single field in your suite, or skip some tests according to some logic. That's why Vest includes skip() and only().",
          source:
            "@site/docs/writing_your_suite/including_and_excluding/skip_and_only.md",
          sourceDirName: "writing_your_suite/including_and_excluding",
          slug: "/writing_your_suite/including_and_excluding/skip_and_only",
          permalink:
            "/docs/writing_your_suite/including_and_excluding/skip_and_only",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_your_suite/including_and_excluding/skip_and_only.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "The Result Object",
            permalink: "/docs/writing_your_suite/result_object",
          },
          next: {
            title: "skipWhen: Conditional Exclusion",
            permalink:
              "/docs/writing_your_suite/including_and_excluding/skipWhen",
          },
        },
        d = [
          {
            value: "Only running specific tests (including)",
            id: "only-running-specific-tests-including",
            children: [],
            level: 3,
          },
          {
            value: "Skipping tests",
            id: "skipping-tests",
            children: [],
            level: 3,
          },
        ],
        c = { toc: d };
      function p(e) {
        var n = e.components,
          t = (0, o.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, i.Z)({}, c, t, { components: n, mdxType: "MDXLayout" }),
          (0, r.kt)(
            "h1",
            { id: "excluding-and-including-tests" },
            "Excluding and including tests"
          ),
          (0, r.kt)(
            "p",
            null,
            "When performing validations in real-world scenarios, you may need to only run tests of a single field in your suite, or skip some tests according to some logic. That's why Vest includes ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "skip()"),
            " and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "only()"),
            "."
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("inlineCode", { parentName: "p" }, "skip()"),
            " and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "only()"),
            " are functions that take a name of the test, or a list of names to either include or exclude fields from being validated. They should be called from the body of suite callback, and in order for them to take effect, they should be called before anything else."
          ),
          (0, r.kt)(
            "div",
            { className: "admonition admonition-danger alert alert--danger" },
            (0, r.kt)(
              "div",
              { parentName: "div", className: "admonition-heading" },
              (0, r.kt)(
                "h5",
                { parentName: "div" },
                (0, r.kt)(
                  "span",
                  { parentName: "h5", className: "admonition-icon" },
                  (0, r.kt)(
                    "svg",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "16",
                      viewBox: "0 0 12 16",
                    },
                    (0, r.kt)("path", {
                      parentName: "svg",
                      fillRule: "evenodd",
                      d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z",
                    })
                  )
                ),
                "IMPORTANT"
              )
            ),
            (0, r.kt)(
              "div",
              { parentName: "div", className: "admonition-content" },
              (0, r.kt)(
                "p",
                { parentName: "div" },
                "When using ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "only()"),
                " or ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "skip()"),
                " you must place them before any of the tests defined in the suite. Hooks run in order of appearance, which means that if you place your ",
                (0, r.kt)("inlineCode", { parentName: "p" }, "skip"),
                " hook after the field you're skipping - it won't have any effect."
              )
            )
          ),
          (0, r.kt)(
            "h3",
            { id: "only-running-specific-tests-including" },
            "Only running specific tests (including)"
          ),
          (0, r.kt)(
            "p",
            null,
            "When running validations upon user interactions, you will usually want to validate only the input the user currently interacts with, to prevent errors appearing for untouched inputs. For this, you can use ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "only()"),
            " with the name of the test currently being validated."
          ),
          (0, r.kt)(
            "p",
            null,
            "In the example below, we're assuming the argument ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "fieldName"),
            " is being populated with the name of the field we want to test. If none is passed, the call to ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "only"),
            " will be ignored, and all tests will run as usual. This allows us to test each field at a time during the interaction but test all on form submission."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, enforce, test, only } from "vest";\n\nconst suite = create((data, fieldName) => {\n  only(fieldName);\n\n  test("username", "Username is invalid", () => {\n    /* some validation logic*/\n  });\n  test("email", "Email is invalid", () => {\n    /* some validation logic*/\n  });\n  test("password", "Password is invalid", () => {\n    /* some validation logic*/\n  });\n});\n\nconst validationResult = suite(formData, changedField);\n'
            )
          ),
          (0, r.kt)("h3", { id: "skipping-tests" }, "Skipping tests"),
          (0, r.kt)(
            "p",
            null,
            "There are not many cases for skipping tests, but they do exist. For example, when you wish to prevent validation of a promo code when none provided."
          ),
          (0, r.kt)(
            "p",
            null,
            "In this case, and in similar others, you can use ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "skip()"),
            ". When called, it will only skip the specified fields. All other tests will run as they should."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, enforce, test, skip } from "vest";\n\nconst suite = create((data) => {\n  if (!data.promo) skip("promo");\n\n  // this test won\'t run when data.promo is falsy.\n  test("promo", "Promo code is invalid", () => {\n    /* some validation logic*/\n  });\n});\n\nconst validationResult = suite(formData);\n'
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
