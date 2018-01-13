module.exports = function(sequelize, Datatype) {
    var User = sequelize.define("User", {
        name: Datatype.STRING,
    });

    User.belongsTo(Company);
    return User;
}