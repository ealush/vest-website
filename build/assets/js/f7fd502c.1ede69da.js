"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [582],
  {
    3905: function (e, t, r) {
      r.d(t, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return m;
        },
      });
      var n = r(7294);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      var u = n.createContext({}),
        l = function (e) {
          var t = n.useContext(u),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : s(s({}, t), e)), r;
        },
        p = function (e) {
          var t = l(e.components);
          return n.createElement(u.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        d = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            a = e.originalType,
            u = e.parentName,
            p = o(e, ["components", "mdxType", "originalType", "parentName"]),
            d = l(r),
            m = i,
            f = d["".concat(u, ".").concat(m)] || d[m] || c[m] || a;
          return r
            ? n.createElement(f, s(s({ ref: t }, p), {}, { components: r }))
            : n.createElement(f, s({ ref: t }, p));
        });
      function m(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var a = r.length,
            s = new Array(a);
          s[0] = d;
          var o = {};
          for (var u in t) hasOwnProperty.call(t, u) && (o[u] = t[u]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : i),
            (s[1] = o);
          for (var l = 2; l < a; l++) s[l] = r[l];
          return n.createElement.apply(null, s);
        }
        return n.createElement.apply(null, r);
      }
      d.displayName = "MDXCreateElement";
    },
    3500: function (e, t, r) {
      r.r(t),
        r.d(t, {
          frontMatter: function () {
            return o;
          },
          contentTitle: function () {
            return u;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return p;
          },
          default: function () {
            return d;
          },
        });
      var n = r(7462),
        i = r(3366),
        a = (r(7294), r(3905)),
        s = ["components"],
        o = { sidebar_position: 3 },
        u = "API Reference",
        l = {
          unversionedId: "api_reference",
          id: "api_reference",
          isDocsHomePage: !1,
          title: "API Reference",
          description:
            "Below is a list of all the API functions exposed by Vest.",
          source: "@site/docs/api_reference.md",
          sourceDirName: ".",
          slug: "/api_reference",
          permalink: "/docs/api_reference",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/api_reference.md",
          tags: [],
          version: "current",
          sidebarPosition: 3,
          frontMatter: { sidebar_position: 3 },
          sidebar: "tutorialSidebar",
          previous: { title: "Core Concepts", permalink: "/docs/concepts" },
          next: {
            title: "Vest's Suite",
            permalink: "/docs/writing_your_suite/vests_suite",
          },
        },
        p = [
          {
            value: "Vest&#39;s main export API",
            id: "vests-main-export-api",
            children: [],
            level: 2,
          },
          {
            value: "Suite Result API",
            id: "suite-result-api",
            children: [],
            level: 2,
          },
          {
            value: "Vest&#39;s external exports",
            id: "vests-external-exports",
            children: [],
            level: 2,
          },
        ],
        c = { toc: p };
      function d(e) {
        var t = e.components,
          r = (0, i.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, c, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "api-reference" }, "API Reference"),
          (0, a.kt)(
            "p",
            null,
            "Below is a list of all the API functions exposed by Vest."
          ),
          (0, a.kt)(
            "h2",
            { id: "vests-main-export-api" },
            "Vest's main export API"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "/docs/writing_your_suite/vests_suite#basic-suite-structure",
                  },
                  "create"
                ),
                " - Creates a new Vest suite. Returns a function that runs your validations."
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
                      href: "/docs/writing_your_suite/vests_suite#using-suiteget",
                    },
                    "suite.get"
                  ),
                  " - Returns the current validation state of the suite."
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "/docs/writing_your_suite/vests_suite##removing-a-single-field-from-the-suite-state",
                    },
                    "suite.remove"
                  ),
                  " - Removes a single field from the suite."
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "/docs/writing_your_suite/vests_suite#cleaning-up-our-validation-state",
                    },
                    "suite.reset"
                  ),
                  " - Resets the suite to its initial state."
                )
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "/docs/writing_tests/using_the_test_function",
                  },
                  "test"
                ),
                " - A single validation test inside your suite."
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
                      href: "/docs/writing_tests/advanced_test_features/test.each",
                    },
                    "test.each"
                  ),
                  " - Allows iteration over an array of values to dynamically run tests."
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "/docs/writing_tests/advanced_test_features/test.memo",
                    },
                    "test.memo"
                  ),
                  " - Memoizes a test run as long as its dependencies haven't changed."
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "/docs/writing_tests/warn_only_tests",
                    },
                    "warn"
                  ),
                  " - resides within the test body. Sets the test's severity to warning."
                )
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  { parentName: "p", href: "/docs/enforce/enforce" },
                  "enforce"
                ),
                " - Asserts that a value matches your desired result."
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
                      href: "/docs/enforce/creating_custom_rules",
                    },
                    "enforce.extend"
                  ),
                  " - Extends the enforce API with your own custom assertions."
                ),
                (0, a.kt)(
                  "li",
                  { parentName: "ul" },
                  (0, a.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "/docs/enforce/composing_enforce_rules",
                    },
                    "compose"
                  ),
                  " - Compose multiple enforcers into a single enforcer."
                )
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "/docs/writing_your_suite/including_and_excluding/skip_and_only#only-running-specific-tests-including",
                  },
                  "only"
                ),
                " - Makes Vest only run the provided field names."
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
                      href: "/docs/writing_your_suite/including_and_excluding/skip_and_only_group",
                    },
                    "only.group"
                  ),
                  " - Makes Vest only run the provided group names."
                )
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "/docs/writing_your_suite/including_and_excluding/skip_and_only#skipping-tests",
                  },
                  "skip"
                ),
                " - Makes Vest skip the provided field names."
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
                      href: "/docs/writing_your_suite/including_and_excluding/skip_and_only_group",
                    },
                    "skip.group"
                  ),
                  " - Makes Vest skip the provided group names."
                )
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "/docs/writing_your_suite/including_and_excluding/skipWhen",
                  },
                  "skipWhen"
                ),
                " - Skips a test when the provided condition is met."
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "/docs/writing_your_suite/optional_fields",
                  },
                  "optional"
                ),
                " - Allows you to mark a field as optional."
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "p",
                { parentName: "li" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "p",
                    href: "/docs/writing_tests/advanced_test_features/grouping_tests",
                  },
                  "group"
                ),
                " - Allows grouping multiple tests with a given name."
              )
            )
          ),
          (0, a.kt)("h2", { id: "suite-result-api" }, "Suite Result API"),
          (0, a.kt)(
            "p",
            null,
            "After running your suite, the results object is returned. It has the following functions:"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object#haserrors-and-haswarnings",
                },
                "hasErrors"
              ),
              " - Returns true if the suite or the provided field has errors."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object#haserrors-and-haswarnings",
                },
                "hasWarnings"
              ),
              " - Returns true if the suite or the provided field has warnings."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object##geterrors-and-getwarnings",
                },
                "getErrors"
              ),
              " - Returns an object with errors in the suite, or an array of objects for a specific field."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object##geterrors-and-getwarnings",
                },
                "getWarnings"
              ),
              " - Returns an object with warnings in the suite, or an array of objects for a specific field."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object#haserrorsbygroup-and-haswarningsbygroup",
                },
                "hasErrorsByGroup"
              ),
              " - Returns true if the provided group has errors."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object#haserrorsbygroup-and-haswarningsbygroup",
                },
                "hasWarningByGroup"
              ),
              " - Returns true if the provided group has warnings."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object#geterrorsbygroup-and-getwarningsbygroup",
                },
                "getErrorsByGroup"
              ),
              " - Returns an object with errors in the provided group."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object#geterrorsbygroup-and-getwarningsbygroup",
                },
                "getWarningsByGroup"
              ),
              " - Returns an object with warnings in the provided group."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object##isvalid",
                },
                "isValid"
              ),
              " - Returns true if the suite or the provided field is valid."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object#done",
                },
                "done"
              ),
              " - Accepts a callback that will run when the suite is done running."
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "vests-external-exports" },
            "Vest's external exports"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                { parentName: "li", href: "/docs/utilities/classnames" },
                "vest/classnames"
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                { parentName: "li", href: "/docs/utilities/promisify" },
                "vest/promisify"
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/enforce/composing_enforce_rules",
                },
                "vest/enforce-compose"
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
