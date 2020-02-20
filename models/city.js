'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    name: DataTypes.STRING,
    lat: DataTypes.NUMERIC,
    long: DataTypes.NUMERIC,
    state: DataTypes.STRING
  }, {});
  city.associate = function(models) {
    // associations can be defined here
  };
  return city;
};