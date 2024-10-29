// import { DataTypes } from "sequelize";
// import Sales from "./SalesModel.js";
// import db from "../utils/connection.js";

// const Pegawai = db.define(
//   "Pegawai",
//   {
//      id_pegawai: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     nama: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     jabatan: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     telepon: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "Pegawai",
//     timestamps: true,
//   }
// );

// Relasi Pegawai ke Sales (Pegawai dapat memiliki banyak Sales)
// Pegawai.hasMany(Sales, {
//   foreignKey: "id_pegawai",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// export default Pegawai;
