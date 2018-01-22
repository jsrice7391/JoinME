module.exports = function(sequelize, Datatype) {
    var User = sequelize.define("User", {
        name: Datatype.STRING,
        phone: Datatype.STRING,
        password: Datatype.STRING,
        email: { type: Datatype.STRING, unique: true },
        uid: Datatype.STRING
    });


    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.belongsToMany(models.Project, {
            through: "UserProject",
            onDelete: "cascade"
        });
    };
    // Project.belongsToMany(User, { through: 'UserProject' });
    // User.belongsToMany(Project, { through: 'UserProject' });
    return User;
}