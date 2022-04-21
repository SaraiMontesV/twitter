const User = require("./../../app/models/User");

describe("Unit Test ", () => {
  test("Case 1: Create User", () => {
    const user = new User(1, "Sarai", "SaraiMV", "Bio");
    expect(user.id).toBe(1);
    expect(user.username).toBe("Sarai");
  });

  test("Case 2: Dates in attributes User", () => {
    const user = new User(1, "Sarai", "SaraiMV", "Bio");
    expect(user.dateCreated).not.toBeUndefined();
  });

  test("Case 3: Adding getters", () => {
    const user = new User(1, "Sarai", "SaraiMV", "Bio");
    expect(user.getUsername).toBe("Sarai");
  });
});
