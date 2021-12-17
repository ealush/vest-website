"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [183],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return h;
        },
      });
      var i = n(7294);
      function r(e, t, n) {
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
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
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
      function u(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var o = i.createContext({}),
        l = function (e) {
          var t = i.useContext(o),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        c = function (e) {
          var t = l(e.components);
          return i.createElement(o.Provider, { value: t }, e.children);
        },
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        p = i.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            o = e.parentName,
            c = u(e, ["components", "mdxType", "originalType", "parentName"]),
            p = l(n),
            h = r,
            m = p["".concat(o, ".").concat(h)] || p[h] || d[h] || a;
          return n
            ? i.createElement(m, s(s({ ref: t }, c), {}, { components: n }))
            : i.createElement(m, s({ ref: t }, c));
        });
      function h(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var a = n.length,
            s = new Array(a);
          s[0] = p;
          var u = {};
          for (var o in t) hasOwnProperty.call(t, o) && (u[o] = t[o]);
          (u.originalType = e),
            (u.mdxType = "string" == typeof e ? e : r),
            (s[1] = u);
          for (var l = 2; l < a; l++) s[l] = n[l];
          return i.createElement.apply(null, s);
        }
        return i.createElement.apply(null, n);
      }
      p.displayName = "MDXCreateElement";
    },
    4354: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return u;
          },
          contentTitle: function () {
            return o;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return c;
          },
          default: function () {
            return p;
          },
        });
      var i = n(7462),
        r = n(3366),
        a = (n(7294), n(3905)),
        s = ["components"],
        u = { sidebar_position: 1 },
        o = "Vest's Suite",
        l = {
          unversionedId: "writing_your_suite/vests_suite",
          id: "writing_your_suite/vests_suite",
          isDocsHomePage: !1,
          title: "Vest's Suite",
          description:
            "All your validations reside in a Vest suite. The suite is a function that retains a javascript closure with the current validation state, and it returns the result object. It also exposes some methods to interact with the data, reset the state and handle async validations.",
          source: "@site/docs/writing_your_suite/vests_suite.md",
          sourceDirName: "writing_your_suite",
          slug: "/writing_your_suite/vests_suite",
          permalink: "/docs/writing_your_suite/vests_suite",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_your_suite/vests_suite.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "API Reference",
            permalink: "/docs/api_reference",
          },
          next: {
            title: "The Result Object",
            permalink: "/docs/writing_your_suite/result_object",
          },
        },
        c = [
          {
            value: "Basic suite structure",
            id: "basic-suite-structure",
            children: [],
            level: 2,
          },
          {
            value: "Running the suite",
            id: "running-the-suite",
            children: [],
            level: 2,
          },
          {
            value: "Getting the current suite state",
            id: "getting-the-current-suite-state",
            children: [
              {
                value: "Using the return value of our suite",
                id: "using-the-return-value-of-our-suite",
                children: [],
                level: 3,
              },
              {
                value: "Using suite.get()",
                id: "using-suiteget",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "Cleaning up our validation state",
            id: "cleaning-up-our-validation-state",
            children: [],
            level: 2,
          },
          {
            value: "Removing a single field from the suite state",
            id: "removing-a-single-field-from-the-suite-state",
            children: [],
            level: 2,
          },
        ],
        d = { toc: c };
      function p(e) {
        var t = e.components,
          n = (0, r.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "vests-suite" }, "Vest's Suite"),
          (0, a.kt)(
            "p",
            null,
            "All your validations reside in a Vest suite. The suite is a function that retains a javascript closure with the current validation state, and it returns the result object. It also exposes some methods to interact with the data, reset the state and handle async validations."
          ),
          (0, a.kt)(
            "h2",
            { id: "basic-suite-structure" },
            "Basic suite structure"
          ),
          (0, a.kt)(
            "p",
            null,
            "In its most basic shape, a suite is created by calling ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "create"),
            " imported from Vest."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create } from "vest";\n\nconst suite = create((data = {}) => {\n  // ...\n});\n'
            )
          ),
          (0, a.kt)("h2", { id: "running-the-suite" }, "Running the suite"),
          (0, a.kt)(
            "p",
            null,
            "Your suite accepts any number of arguments. You can access them from the suite callback:"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "const suite = create((data = {}, currentField) => {\n  // ...\n});\n\nsuite(formData, fieldName);\n"
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "getting-the-current-suite-state" },
            "Getting the current suite state"
          ),
          (0, a.kt)(
            "p",
            null,
            "There are two main ways of getting the current state of our suite."
          ),
          (0, a.kt)(
            "h3",
            { id: "using-the-return-value-of-our-suite" },
            "Using the return value of our suite"
          ),
          (0, a.kt)(
            "p",
            null,
            "When running our suite, it returns the current result object:"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "const result = suite(formData, fieldName);\n\nresult.hasErrors(); // boolean\n"
            )
          ),
          (0, a.kt)("h3", { id: "using-suiteget" }, "Using suite.get()"),
          (0, a.kt)(
            "p",
            null,
            "At any given moment (even within the suite itself!) you can run ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "suite.get()"),
            ". ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "suite.get()"),
            " returns the currently known validation state (may be partial if called within a running suite).\nThe result object returned by ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "suite.get()"),
            " is nearly identical to the result object returned by your suite, with the difference that it does not have the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "done"),
            " property that allows you to set callbacks for async validations."
          ),
          (0, a.kt)(
            "p",
            null,
            "This method is especially useful if we want to access our suite state from within a running suite, or when out of context - for example, from a different UI component than our form."
          ),
          (0, a.kt)(
            "h2",
            { id: "cleaning-up-our-validation-state" },
            "Cleaning up our validation state"
          ),
          (0, a.kt)(
            "p",
            null,
            "When you want to clean up the suite state, for example, when the user clears the form, or when you want to navigate out of the page in an SPA - but the user might return to it later on, you can call ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "suite.reset()"),
            ". This will reset the suite state and cancel any pending async validations that may still be running."
          ),
          (0, a.kt)(
            "h2",
            { id: "removing-a-single-field-from-the-suite-state" },
            "Removing a single field from the suite state"
          ),
          (0, a.kt)(
            "p",
            null,
            "Sometimes we want to remove a certain field from the suite state. For example, when the user removed a dynamically added field. In this case, we can call ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "suite.remove(fieldName)"
            ),
            ". This will remove the field from the suite state and cancel any pending async validations that may still be running."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
