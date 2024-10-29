import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Invoice = db.define(
  "Invoice",
  {
     id_invoice: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal_invoice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_invoice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_invoice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Invoice",
    timestamps: true,
  }
);

export default Invoice;
