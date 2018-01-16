module.exports = function(sequelize, Datatype) {
    var User = sequelize.define("User", {
        name: Datatype.STRING,
    });
    []
    Project.belongsToMany(User, {through: 'UserProject'});
    User.belongsToMany(Project, {through: 'UserProject'});
    return User;
}