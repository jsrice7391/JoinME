module.exports = function(sequelize, DataTypes) {
    var Step = sequelize.define("Step", {
        Step: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Step_description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        Completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    });

    Step.associate = function(models) {
        Step.belongsTo(models.Project, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Step;
};