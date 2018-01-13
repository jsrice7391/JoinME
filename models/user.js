module.exports = function(sequelize, Datatype) {
    var User = sequelize.define("User", {
        name: Datatype.STRING,
    });

    return User;
}