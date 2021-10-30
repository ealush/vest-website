---
sidebar_position: 1
---

## test.memo for memoized tests

In order to improve performance and runtime in heavy or long-running tests (such as async tests that go to the server), tests individual test results can be cached and saved for a later time, so whenever the exact same params appear again in the same runtime, the test result will be used from cache, instead of having to be re-evaluated.

### Usage:

Memoized tests are almost identical to regular tests, only with the added dependency array as the last argument. The dependency array is an array of items, that when identical (strict equality, `===`) to a previously presented array in the same test, its previous result will be used. You can see it as your cache key to the test result.

### Example:

```js
import { vest, test } from "vest";
export default create((data) => {
  test.memo(
    "username",
    "username already exists",
    () => doesUserExist(data.username),
    [data.username]
  );
});
```
