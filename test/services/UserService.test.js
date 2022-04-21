const UserService = require("./../../app/services/UserService");

describe("Test for UserService", () => {
  test("Case 1: Create a new user using the UserService", () => {
    const user = UserService.create(1, "Sarai", "SaraiMV");
    expect(user.username).toBe("Sarai");
    expect(user.name).toBe("SaraiMV");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
  
});
