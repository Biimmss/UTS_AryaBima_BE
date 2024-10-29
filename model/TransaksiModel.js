import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Transaksi = db.define(
  "Transaksi",
  {
    id_transaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal_transaksi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_transaksi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_transaksi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Transaksi",
    timestamps: true,
  }
);

export default Transaksi;
