---
sidebar_position: 2
---

# skipWhen: Conditional Exclusion

In some cases we might need to skip a test or a group based on a given condition, for example - based on the intermediate state of the currently running suite. To allow this, you can use `skipWhen`. `skipWhen` takes a boolean expression and a callback with tests.
If the expression is true, the tests within the callback will be skipped. Otherwise, the tests will run as normal.

In the following example, we're skipping the server side verification of the username if the username is invalid to begin with:

```js
import { create, test, enforce, skipWhen } from "vest";

const suite = create((data = {}) => {
  test("username", "Username is required", () => {
    enforce(data.username).isNotEmpty();
  });

  skipWhen(suite.get().hasErrors("username"), () => {
    test("username", "Username already exists", () => {
      // this is an example for a server call
      return doesUserExist(data.username);
    });
  });
});
export default suite;
```
