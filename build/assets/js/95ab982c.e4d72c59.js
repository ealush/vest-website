"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [382],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return m;
        },
      });
      var r = n(7294);
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
      function o(e, t) {
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
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var u = r.createContext({}),
        l = function (e) {
          var t = r.useContext(u),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        p = function (e) {
          var t = l(e.components);
          return r.createElement(u.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            o = e.originalType,
            u = e.parentName,
            p = i(e, ["components", "mdxType", "originalType", "parentName"]),
            d = l(n),
            m = a,
            g = d["".concat(u, ".").concat(m)] || d[m] || c[m] || o;
          return n
            ? r.createElement(g, s(s({ ref: t }, p), {}, { components: n }))
            : r.createElement(g, s({ ref: t }, p));
        });
      function m(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var o = n.length,
            s = new Array(o);
          s[0] = d;
          var i = {};
          for (var u in t) hasOwnProperty.call(t, u) && (i[u] = t[u]);
          (i.originalType = e),
            (i.mdxType = "string" == typeof e ? e : a),
            (s[1] = i);
          for (var l = 2; l < o; l++) s[l] = n[l];
          return r.createElement.apply(null, s);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    8938: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return i;
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
      var r = n(7462),
        a = n(3366),
        o = (n(7294), n(3905)),
        s = ["components"],
        i = { sidebar_position: 3 },
        u = "Grouping tests",
        l = {
          unversionedId: "writing_tests/advanced_test_features/grouping_tests",
          id: "writing_tests/advanced_test_features/grouping_tests",
          isDocsHomePage: !1,
          title: "Grouping tests",
          description:
            "In some cases it can be helpful to group tests together so you can include or exclude a portion of the suite with a single condition.",
          source:
            "@site/docs/writing_tests/advanced_test_features/grouping_tests.md",
          sourceDirName: "writing_tests/advanced_test_features",
          slug: "/writing_tests/advanced_test_features/grouping_tests",
          permalink:
            "/docs/writing_tests/advanced_test_features/grouping_tests",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_tests/advanced_test_features/grouping_tests.md",
          tags: [],
          version: "current",
          sidebarPosition: 3,
          frontMatter: { sidebar_position: 3 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "test.each",
            permalink: "/docs/writing_tests/advanced_test_features/test.each",
          },
          next: { title: "Enforce", permalink: "/docs/enforce/enforce" },
        },
        p = [
          {
            value: "Use cases",
            id: "use-cases",
            children: [
              {
                value: "1. Multi-stage form",
                id: "1-multi-stage-form",
                children: [],
                level: 3,
              },
              {
                value: "2. Skipping tests with shared fields",
                id: "2-skipping-tests-with-shared-fields",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "Querying the result object for groups",
            id: "querying-the-result-object-for-groups",
            children: [],
            level: 2,
          },
        ],
        c = { toc: p };
      function d(e) {
        var t = e.components,
          n = (0, a.Z)(e, s);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "grouping-tests" }, "Grouping tests"),
          (0, o.kt)(
            "p",
            null,
            "In some cases it can be helpful to group tests together so you can include or exclude a portion of the suite with a single condition.\nSimilar to the ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "describe"),
            " and ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "context"),
            " features provided by unit testing frameworks, Vest provides ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "group"),
            "."
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "https://codesandbox.io/s/vest-group-example-react-4i2ne",
              },
              "Try on CodeSandbox (React)"
            )
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test, group, enforce, skip } from "vest";\n\ncreate((data) => {\n  skip.group(data.userExists ? "signUp" : "signIn");\n\n  test("userName", "Can\'t be empty", () => {\n    enforce(data.username).isNotEmpty();\n  });\n  test("password", "Can\'t be empty", () => {\n    enforce(data.password).isNotEmpty();\n  });\n\n  group("signIn", () => {\n    test(\n      "userName",\n      "User not found. Please check if you typed it correctly.",\n      findUserName(data.username)\n    );\n  });\n\n  group("signUp", () => {\n    test("email", "Email already registered", isEmailRegistered(data.email));\n\n    test("age", "You must be at least 18 years old to join", () => {\n      enforce(data.age).largerThanOrEquals(18);\n    });\n  });\n});\n'
            )
          ),
          (0, o.kt)("h2", { id: "use-cases" }, "Use cases"),
          (0, o.kt)("h3", { id: "1-multi-stage-form" }, "1. Multi-stage form"),
          (0, o.kt)(
            "p",
            null,
            "You may have in your application a multi-screen form in which you want to validate each screen individually but submit it all at once."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// suite.js\nimport { create, test, group, enforce, only } from "vest";\n\nconst suite = create((data, currentTab) => {\n  only.group(currentScreen);\n\n  group("overview_tab", () => {\n    test("productTitle", "Must be at least 5 chars.", () => {\n      enforce(data.productTitle).longerThanOrEquals(5);\n    });\n\n    test("productDescription", "Can\'t be longer than 2500 chars.", () => {\n      enforce(data.productDescription).shorterThanOrEquals(2500);\n    });\n\n    test("productTags", "Please provide up to 5 tags", () => {\n      enforce(data.tags).lengthEquals(5);\n    });\n  });\n\n  group("pricing_tab", () => {\n    test("price", "5$ or more.", () => {\n      enforce(data.price).lte(5);\n    });\n\n    test("productExtras", "Can\'t be empty.", () => {\n      enforce(data.extras).isNotEmpty();\n    });\n  });\n});\n\nexport default suite;\n'
            )
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "// myFeature.js\n\nsuite(data, \"overview_tab\"); // will only validate 'overview_tab' group\nsuite(data, \"pricing_tab\"); // will only validate 'pricing_tab' group\n"
            )
          ),
          (0, o.kt)(
            "h3",
            { id: "2-skipping-tests-with-shared-fields" },
            "2. Skipping tests with shared fields"
          ),
          (0, o.kt)(
            "p",
            null,
            "You sometimes want to skip some tests on a certain condition but still run other tests with the same field-name."
          ),
          (0, o.kt)(
            "p",
            null,
            "In the example below, we don't mind skipping the ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "balance"),
            " field directly, but if we skip the ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "quantity"),
            " field directly, it won't be tested at all - even though it has one test outside of the group. That's why we skip the ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "used_promo"),
            "."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test, group, enforce, skip } from "vest";\n\nconst suite = create((data) => {\n  if (!data.usedPromo) skip.group("used_promo");\n  if (!data.paysWithBalance) skip.group("balance");\n\n  test(\n    "balance",\n    "Balance is lower than product price",\n    hasSufficientFunds(data.productId)\n  );\n\n  test("quantity", `Quantity on this item is limited to ${data.limit}`, () => {\n    enforce(data.quantity).lessThanOrEquals(data.limit);\n  });\n\n  group("used_promo", () => {\n    test(\n      "quantity",\n      "promo code purchases are limited to one item only",\n      () => {\n        enforce(data.quantity).equals(1);\n      }\n    );\n\n    test(\n      "promoCode",\n      "Promo code can only be used once",\n      isPromoCodeUsed(data.usedPromo)\n    );\n  });\n});\n'
            )
          ),
          (0, o.kt)(
            "h2",
            { id: "querying-the-result-object-for-groups" },
            "Querying the result object for groups"
          ),
          (0, o.kt)(
            "p",
            null,
            "Groups represent a portion of your validation suite, so when using ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "group"),
            ", you are likely to need to get the group-specific validation results.\nYour result object exposes the following methods:"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)("li", { parentName: "ul" }, "hasErrorsByGroup"),
            (0, o.kt)("li", { parentName: "ul" }, "hasWarningsByGroup"),
            (0, o.kt)("li", { parentName: "ul" }, "hasErrorsByGroup"),
            (0, o.kt)("li", { parentName: "ul" }, "hasWarningsByGroup")
          ),
          (0, o.kt)(
            "p",
            null,
            "Read more about these methods in ",
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/writing_your_suite/result_object",
              },
              "the result object"
            ),
            "."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
