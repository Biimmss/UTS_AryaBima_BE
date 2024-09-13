import { DataTypes } from "sequelize";
import Sales from "./SalesModel.js";
import Customer from "./CustomerModel.js";
import Stock from "./StockModel.js";
// import Pembayaran from "./PembayaranModel.js";
import db from "../utils/connection.js";
import Pegawai from "./PegawaiModel.js";

const Pembayaran = db.define(
  "Pembayaran",
  {
    id_pembayaran: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    metode_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Pembayaran",
    // timestamps: true,
  }
);






// Relasi Pembayaran ke Sales
// Pembayaran.belongsTo(Sales, { foreignKey: 'id_sales' });

export default Pembayaran;
