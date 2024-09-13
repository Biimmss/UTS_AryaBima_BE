import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Sales from "./SalesModel.js";
import Stock from "./StockModel.js";

const Customer = db.define(
  "Customer",
  {
    id_customer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },     
    telepon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Customer",
    timestamps: true,
  }
);

// Relasi Customer ke Stock (Customer dapat memiliki banyak Stock)
// Customer.hasMany(Stock, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// Relasi Customer ke Sales (Customer dapat memiliki banyak Sales)
// Sales.belongsTo(Customer, {
//   foreignKey: "id_customer",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
export default Customer;
