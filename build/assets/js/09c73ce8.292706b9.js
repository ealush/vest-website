"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [944],
  {
    3905: function (e, n, t) {
      t.d(n, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return m;
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
      function a(e, n) {
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
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                o(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function l(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var s = r.createContext({}),
        u = function (e) {
          var n = r.useContext(s),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
        },
        c = function (e) {
          var n = u(e.components);
          return r.createElement(s.Provider, { value: n }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return r.createElement(r.Fragment, {}, n);
          },
        },
        d = r.forwardRef(function (e, n) {
          var t = e.components,
            o = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            c = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(t),
            m = o,
            f = d["".concat(s, ".").concat(m)] || d[m] || p[m] || a;
          return t
            ? r.createElement(f, i(i({ ref: n }, c), {}, { components: t }))
            : r.createElement(f, i({ ref: n }, c));
        });
      function m(e, n) {
        var t = arguments,
          o = n && n.mdxType;
        if ("string" == typeof e || o) {
          var a = t.length,
            i = new Array(a);
          i[0] = d;
          var l = {};
          for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : o),
            (i[1] = l);
          for (var u = 2; u < a; u++) i[u] = t[u];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, t);
      }
      d.displayName = "MDXCreateElement";
    },
    1250: function (e, n, t) {
      t.r(n),
        t.d(n, {
          frontMatter: function () {
            return l;
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
            return d;
          },
        });
      var r = t(7462),
        o = t(3366),
        a = (t(7294), t(3905)),
        i = ["components"],
        l = { sidebar_position: 4 },
        s = "Creating Custom Rules",
        u = {
          unversionedId: "enforce/creating_custom_rules",
          id: "enforce/creating_custom_rules",
          isDocsHomePage: !1,
          title: "Creating Custom Rules",
          description:
            "By default, enforce comes with a list of rules that are available to be used. They intentionally do not cover all the cases that can be encountered in a real-world application but instead focus on the most common use cases.",
          source: "@site/docs/enforce/creating_custom_rules.md",
          sourceDirName: "enforce",
          slug: "/enforce/creating_custom_rules",
          permalink: "/docs/enforce/creating_custom_rules",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/enforce/creating_custom_rules.md",
          tags: [],
          version: "current",
          sidebarPosition: 4,
          frontMatter: { sidebar_position: 4 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Schema rules",
            permalink: "/docs/enforce/builtin-enforce-plugins/schema_rules",
          },
          next: {
            title: "Consuming external rules",
            permalink: "/docs/enforce/consuming_external_rules",
          },
        },
        c = [
          {
            value: "Inline logic with <code>condition</code>",
            id: "inline-logic-with-condition",
            children: [],
            level: 2,
          },
          {
            value: "Reusable custom rules with enforce.extend",
            id: "reusable-custom-rules-with-enforceextend",
            children: [],
            level: 2,
          },
          {
            value: "Custom rules return value",
            id: "custom-rules-return-value",
            children: [],
            level: 2,
          },
          {
            value: "Traversing the input object in your custom Rules",
            id: "traversing-the-input-object-in-your-custom-rules",
            children: [
              {
                value: "Usage example",
                id: "usage-example",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "Custom Rule Typescript Support",
            id: "custom-rule-typescript-support",
            children: [],
            level: 2,
          },
        ],
        p = { toc: c };
      function d(e) {
        var n = e.components,
          t = (0, o.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "creating-custom-rules" },
            "Creating Custom Rules"
          ),
          (0, a.kt)(
            "p",
            null,
            "By default, enforce comes with a list of rules that are available to be used. They intentionally do not cover all the cases that can be encountered in a real-world application but instead focus on the most common use cases."
          ),
          (0, a.kt)(
            "h2",
            { id: "inline-logic-with-condition" },
            "Inline logic with ",
            (0, a.kt)("inlineCode", { parentName: "h2" }, "condition")
          ),
          (0, a.kt)(
            "p",
            null,
            "Sometimes you would need to add some custom logic to your validation. For that you can use ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "enforce.condition"),
            " which accepts a function."
          ),
          (0, a.kt)(
            "p",
            null,
            "Your provided function will receive the enforced value and returns either a boolean or a rule-return object."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "// Passes if the value is `1`\nenforce(1).condition((value) => {\n  return value === 1;\n});\n"
            )
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(2).condition((value) => {\n  return {\n    pass: value === 1,\n    message: "value must be one",\n  };\n});\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "reusable-custom-rules-with-enforceextend" },
            "Reusable custom rules with enforce.extend"
          ),
          (0, a.kt)(
            "p",
            null,
            'To make it easier to reuse logic across your application, sometimes you would want to encapsulate bits of logic in rules that you can use later on, for example, "what\'s considered a valid email".'
          ),
          (0, a.kt)(
            "p",
            null,
            "Rules are called with the argument passed to enforce(x) followed by the arguments passed to ",
            (0, a.kt)("inlineCode", { parentName: "p" }, ".yourRule(y, z)"),
            "."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce.extend({\n  yourRule(x, y, z) {\n    return {\n      pass: true,\n      message: () => "",\n    };\n  },\n});\n'
            )
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce.extend({\n  isValidEmail: (value) => value.indexOf("@") > -1,\n  hasKey: (value, key) => value.hasOwnProperty(key),\n  passwordsMatch: (passConfirm, options) =>\n    passConfirm === options.passConfirm && options.passIsValid,\n});\n\nenforce(user.email).isValidEmail();\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "custom-rules-return-value" },
            "Custom rules return value"
          ),
          (0, a.kt)(
            "p",
            null,
            "Rules can either return boolean indicating success or failure, or an object with two keys. ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "pass"),
            " indicates whether the validation is successful or not, and message provides a function with no arguments that return an error message in case of failure. Thus, when pass is false, message should return the error message for when enforce(x).yourRule() fails."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce.extend({\n  isWithinRange(received, floor, ceiling) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () =>\n          `expected ${received} not to be within range ${floor} - ${ceiling}`,\n        pass: true,\n      };\n    } else {\n      return {\n        message: () =>\n          `expected ${received} to be within range ${floor} - ${ceiling}`,\n        pass: false,\n      };\n    }\n  },\n});\n"
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "traversing-the-input-object-in-your-custom-rules" },
            "Traversing the input object in your custom Rules"
          ),
          (0, a.kt)(
            "p",
            null,
            "Sometimes you would need to traverse your enforced object from within your rule to get other values that are present at some other nesting level."
          ),
          (0, a.kt)(
            "p",
            null,
            "Let's assume we have a custom rule that makes its decision by factoring in two different values, one inside a nested object, and the other by a property in a parent object."
          ),
          (0, a.kt)(
            "p",
            null,
            "Consider this user object. It looks fine, but if you look closely, you'll see that our johndoe listed a friend with the same user name. This can't happen."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "{\n  name: {\n    first: 'John',\n    last: 'Doe'\n  },\n  username: 'johndoe',\n  friends: ['Mike', 'Jim', 'johndoe']\n}\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "To access context you simply need to call ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "enforce.context()"),
            " within your custom rule. The function will return an object that matches this structure:"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre" },
              'Object {\n  "meta": Object {},\n  "parent": [Function],\n  "value": Object {},\n}\n'
            )
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "value"),
              " contains the current value in the level you're at"
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "meta"),
              " will contain the name of the current key if called within ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "shape"),
              " or ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "loose"),
              ", or ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "index"),
              " if called within ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "isArrayOf"),
              "."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "parent"),
              " is a function that traverses up to the parent context, and you can access all its keys as if you're in that level. You can traverse up to the top level by chaining ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "parent"),
              " calls. When no levels left, parent will return ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "null"),
              "."
            )
          ),
          (0, a.kt)("h3", { id: "usage-example" }, "Usage example"),
          (0, a.kt)(
            "p",
            null,
            "First, declare your custom rule in which you want to use a value that's higher up.\nIn the following example, we're getting the context, and checking if our ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "value"),
            ' equals to the "username" that\'s defined two levels up.'
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce.extend({\n  isFriendTheSameAsUser: (value) => {\n    const context = enforce.context();\n\n    if (value === context.parent().parent().value.username) {\n      return { pass: false };\n    }\n\n    return true;\n  },\n});\n"
            )
          ),
          (0, a.kt)("p", null, "We'll use it like this:"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce({\n  username: "johndoe",\n  friends: ["Mike", "Jim", "johndoe"],\n}).shape({\n  username: enforce.isString(),\n  friends: enforce.isArrayOf(enforce.isString().isFriendTheSameAsUser()),\n});\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "custom-rule-typescript-support" },
            "Custom Rule Typescript Support"
          ),
          (0, a.kt)(
            "p",
            null,
            "When adding custom rules, you might want to also add typescript support for it, for autocompletion and type checking within your project. To do so, add your new custom rules to a d.ts file like that:"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              "// global.d.ts\n\ndeclare global {\n  namespace n4s {\n    interface EnforceCustomMatchers<R> {\n      myCustomRule(): R;\n      myOtherCustomRule(value: string): R;\n    }\n  }\n}\n\nexport {};\n"
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
