module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    product_name: DataTypes.TEXT,
    department: DataTypes.TEXT,
    price: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER
  });
  return Product;
};
