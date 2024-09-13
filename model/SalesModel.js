// models/SalesModel.js
import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Sales = db.define(
  "Sales",
  {
    id_sales: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_sales: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_sales: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Sales",
    timestamps: true,
  }
);

export default Sales;
