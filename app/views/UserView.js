const User = require("./../models/User");

class UserView {
  static createUser(payload) {
    switch (payload) {
      case null:
        return { error: "payload no existe" };

      default:
        return new User(payload);
    }
  }
}
module.exports = UserView;
