const UserService = require("./../../app/services/UserService");

describe("Test for UserService", () => {
  test("Case 1: Create a new user using the UserService", () => {
    const user = UserService.create(1, "Sarai", "SaraiMV");
    expect(user.username).toBe("Sarai");
    expect(user.name).toBe("SaraiMV");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test("Case 2: Get all user data in a list", () => {
    const user = UserService.create(1, "Sarai", "SaraiMV");
    const userInfoList = UserService.getInfo(user);
    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("Sarai");
    expect(userInfoList[2]).toBe("SaraiMV");
    expect(userInfoList[3]).toBe("Sin bio");
  });

  test("Case 3: Update username", () => {
    const user = UserService.create(1, "Sarai", "SaraiMV");
    UserService.updateUserUsername(user, "Saraimv");
    expect(user.username).toBe("Saraimv");
  });

  test("Case 4: Given a list of users given me the list of username", () => {
    const user1 = UserService.create(1, "Sarai1", "Sara");
    const user2 = UserService.create(1, "Sarai2", "Sara");
    const user3 = UserService.create(1, "Sarai3", "Sara");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    console.log(usernames)
    expect(usernames).toContain("Sarai1");
    expect(usernames).toContain("Sarai2");
    expect(usernames).toContain("Sarai3");
  });
});
