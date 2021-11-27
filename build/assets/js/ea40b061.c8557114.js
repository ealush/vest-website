"use strict";(self.webpackChunkvest_website=self.webpackChunkvest_website||[]).push([[352],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(a),m=r,h=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return a?t.createElement(h,s(s({ref:n},p),{},{components:a})):t.createElement(h,s({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8009:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={sidebar_position:2},i="Schema rules",c={unversionedId:"enforce/builtin-enforce-plugins/schema_rules",id:"enforce/builtin-enforce-plugins/schema_rules",isDocsHomePage:!1,title:"Schema rules",description:"While less common when using Vest, sometimes it might be useful to validate a value against a schema. Vest comes with some schema validation rules that are handy for data-shape validation.",source:"@site/docs/enforce/builtin-enforce-plugins/schema_rules.md",sourceDirName:"enforce/builtin-enforce-plugins",slug:"/enforce/builtin-enforce-plugins/schema_rules",permalink:"/docs/enforce/builtin-enforce-plugins/schema_rules",editUrl:"https://github.com/ealush/vest-website/edit/main/website/docs/enforce/builtin-enforce-plugins/schema_rules.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Compound rules",permalink:"/docs/enforce/builtin-enforce-plugins/compound_rules"},next:{title:"Creating Custom Rules",permalink:"/docs/enforce/creating_custom_rules"}},p=[{value:"enforce.shape() - Lean schema validation.",id:"enforceshape---lean-schema-validation",children:[{value:"enforce.partial() - allows supplying a subset of keys",id:"enforcepartial---allows-supplying-a-subset-of-keys",children:[],level:3},{value:"enforce.loose() - loose shape matching",id:"enforceloose---loose-shape-matching",children:[],level:3}],level:2},{value:"enforce.isArrayOf() - array shape matching",id:"enforceisarrayof---array-shape-matching",children:[],level:2}],u={toc:p};function f(e){var n=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schema-rules"},"Schema rules"),(0,o.kt)("p",null,"While less common when using Vest, sometimes it might be useful to validate a value against a schema. Vest comes with some schema validation rules that are handy for data-shape validation."),(0,o.kt)("p",null,"To use it, simply import these rules in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import "vest/enforce/schema";\n')),(0,o.kt)("p",null,"These rules will then become available in ",(0,o.kt)("inlineCode",{parentName:"p"},"enforce"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#schema-rules"},"Schema rules"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enforceshape---lean-schema-validation"},"enforce.shape() - Lean schema validation."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enforcepartial---allows-supplying-a-subset-of-keys"},"enforce.partial() - allows supplying a subset of keys")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enforceloose---loose-shape-matching"},"enforce.loose() - loose shape matching")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enforceisarrayof---array-shape-matching"},"enforce.isArrayOf() - array shape matching"))))),(0,o.kt)("h2",{id:"enforceshape---lean-schema-validation"},"enforce.shape() - Lean schema validation."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"enforce.shape()")," validates the structure of an object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'enforce({\n  firstName: "Rick",\n  lastName: "Sanchez",\n  age: 70,\n}).shape({\n  firstName: enforce.isString(),\n  lastName: enforce.isString(),\n  age: enforce.isNumber(),\n});\n')),(0,o.kt)("p",null,"You may also chain your validation rules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"enforce({\n  age: 22,\n}).shape({\n  age: enforce.isNumber().isBetween(0, 150),\n});\n")),(0,o.kt)("p",null,"You may also nest calls to shape in order to validate a deeply nested object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'enforce({\n  user: {\n    name: {\n      first: "Joseph",\n      last: "Weil",\n    },\n  },\n}).shape({\n  user: enforce.shape({\n    name: enforce.shape({\n      first: enforce.isString(),\n      last: enforce.isString(),\n    }),\n  }),\n});\n')),(0,o.kt)("h3",{id:"enforcepartial---allows-supplying-a-subset-of-keys"},"enforce.partial() - allows supplying a subset of keys"),(0,o.kt)("p",null,'When supplying a "shape" or a "loose" matcher, enforce requires at least the keys that are specified by the matcher, unless you manually wrap them with "optional". ',(0,o.kt)("inlineCode",{parentName:"p"},"partial")," behaves like ",(0,o.kt)("inlineCode",{parentName:"p"},"optional")," but for a whole object instead of for specific keys. By wrapping the input of a matcher with ",(0,o.kt)("inlineCode",{parentName:"p"},"partial"),", you can supply a subset of the keys that are required as if you had used ",(0,o.kt)("inlineCode",{parentName:"p"},"optional")," on each key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"enforce({}).shape(\n  enforce.partial({\n    firstName: enforce.isString(),\n    lastName: enforce.isString(),\n  })\n);\n")),(0,o.kt)("p",null,"This won't throw because all the fields are now treated as optional."),(0,o.kt)("h3",{id:"enforceloose---loose-shape-matching"},"enforce.loose() - loose shape matching"),(0,o.kt)("p",null,"By default, shape will treat excess keys in your data object as validation errors. If you wish to allow support for excess keys in your object's shape, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"enforce.loose()")," which is a shorthand to ",(0,o.kt)("inlineCode",{parentName:"p"},"enforce.shape(data, shape, { loose: true })"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'enforce({ name: "Laura", code: "x23" }).shape({ name: enforce.isString() });\n// \ud83d\udea8 This will throw an error because `code` is not defined in the shape\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'enforce({ name: "Laura", code: "x23" }).loose({ name: enforce.isString() });\n// \u2705 This will pass with `code` not being validated\n')),(0,o.kt)("h2",{id:"enforceisarrayof---array-shape-matching"},"enforce.isArrayOf() - array shape matching"),(0,o.kt)("p",null,"enforce.isArrayOf can be used to determine the allowed types and values within an array. It will run against each element in the array, and will only pass if all items meet at least one of the validation rules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'enforce([1, 2, "hello!"]).isArrayOf(enforce.isString(), enforce.isNumber());\n')),(0,o.kt)("p",null,"You can also combine ",(0,o.kt)("inlineCode",{parentName:"p"},"isArrayOf")," with other rules to validate other array properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"enforce(someArrayValue)\n  .isArrayOf(enforce.isString(), enforce.isNumber().lessThan(3))\n  .longerThan(2);\n")),(0,o.kt)("p",null,"And as part of shape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"enforce({ data: [1, 2, 3] }).shape({\n  data: enforce.isArrayOf(enforce.isNumber()),\n});\n")))}f.isMDXComponent=!0}}]);