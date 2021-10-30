---
sidebar_position: 3
---

# Including and excluding groups

Similar to the way you use `skip` and `only` to include and exclude tests, you can use `skip.group` and `only.group` to exclude and include whole groups.

These two functions are very powerful and give you control of whole portions of your suite at once.

```js
import { create, test, group, enforce, skip } from "vest";

create((data) => {
  skip.group(data.userExists ? "signUp" : "signIn");

  test("userName", "Can't be empty", () => {
    enforce(data.username).isNotEmpty();
  });
  test("password", "Can't be empty", () => {
    enforce(data.password).isNotEmpty();
  });

  group("signIn", () => {
    test(
      "userName",
      "User not found. Please check if you typed it correctly.",
      findUserName(data.username)
    );
  });

  group("signUp", () => {
    test("email", "Email already registered", isEmailRegistered(data.email));

    test("age", "You must be at least 18 years old to join", () => {
      enforce(data.age).largerThanOrEquals(18);
    });
  });
});
```

## Things to note when using these functions

**only.group()**:
When using `only.group`, other groups won't be tested - but top-level tests that aren't nested in any groups will. The reasoning is that the top-level space is a shared and will always be tested. If you want only your group to run, nest everything else under groups as well.

If you combine `only.group` with `skip` if you skip a field inside a group that is included, that field will be excluded during this run regardless of its group membership.

**skip.group()**

If you combine `skip.group` with `only` your included field declared within the skipped group will be ignored.
