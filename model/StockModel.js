import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Customer from "./CustomerModel.js";
import Sales from "./SalesModel.js";

const Stock = db.define(
  "Stock",
  {
    id_stock: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_mobil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    merk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    harga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Stock",
    timestamps: true,
  }
);

// Relasi Stock ke Customer (Stock dimiliki satu Customer)
// Stock.belongsTo(Customer, { foreignKey: 'id_customer' });

// Relasi Stock ke Sales (Stock dapat dimiliki banyak Sales)
// Stock.hasMany(Sales, {
//   foreignKey: 'id_stock',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// });

export default Stock;
