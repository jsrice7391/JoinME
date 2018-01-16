module.exports = function(sequelize, DataTypes) {
  var Steps = sequelize.define("Post", {
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
        type: DataTypes.booleanField,
        allowNull: false,
        default:false}
  });

  Steps.associate = function (models) {
    models.Steps.belongsTo(models.project, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Steps;
};
