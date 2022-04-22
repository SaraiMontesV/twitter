const User = require("./../models/User");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }

  static getInfo(user) {
    return [user.id, user.username, user.name, user.bio];
  }

  static updateUserUsername(user, newUsername) {
    user.username = newUsername;
    return user;
  }

  static getAllUsernames(user) {
    const usernames = [user[0].username, user[1].username, user[2].username];
    return usernames;
  }
}

module.exports = UserService;
