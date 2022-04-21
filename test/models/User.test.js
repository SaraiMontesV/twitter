const User = require("./../../app/models/User");

describe("Unit Test ", () => {
  test("Case 1", () => {
    const user = new User(1, "Sarai", "Carlo", "Bio");
    expect(user.id).toBe(1);
    expect(user.username).toBe("Sarai");
  });
});
