import db from "../utils/connection.js";
import Customer from "./CustomerModel.js";
import Pegawai from "./PegawaiModel.js";
import Sales from "./SalesModel.js";
import Stock from "./StockModel.js";
import Pembayaran from "./PembayaranModel.js";
import Admin from "./AdminModel.js";


// Relasi antara Pegawai dan Customer (Many-to-One)
Customer.hasMany(Pegawai, {
  foreignKey: 'id_customer',
  as: 'pegawai'
});
Pegawai.belongsTo(Customer, {
  foreignKey: 'id_customer',
  as: 'customer'
});

// Relasi antara Pegawai dan Sales (Many-to-One)
Sales.hasMany(Pegawai, {
  foreignKey: 'id_sales',
  as: 'pegawai'
});
Pegawai.belongsTo(Sales, {
  foreignKey: 'id_sales',
  as: 'sales'
});

// Relasi antara Pegawai dan Stock (Many-to-One)
Stock.hasMany(Pegawai, {
  foreignKey: 'id_stock',
  as: 'pegawai'
});
Pegawai.belongsTo(Stock, {
  foreignKey: 'id_stock',
  as: 'stock'
});

// Relasi antara Sales dan Customer (Many-to-One)
Customer.hasMany(Sales, {
  foreignKey: 'id_customer',
  as: 'sales'
});
Sales.belongsTo(Customer, {
  foreignKey: 'id_customer',
  as: 'customer'
});


// Relasi antara Pembayaran dan Customer (Many-to-One)
Customer.hasMany(Pembayaran, {
  foreignKey: 'id_customer',
  as: 'pembayaran'
});
Pembayaran.belongsTo(Customer, {
  foreignKey: 'id_customer',
  as: 'customer'
});

// Relasi antara Pembayaran dan Pegawai (Many-to-One)
Pegawai.hasMany(Pembayaran, {
  foreignKey: 'id_pegawai',
  as: 'pembayaran'
});
Pembayaran.belongsTo(Pegawai, {
  foreignKey: 'id_pegawai',
  as: 'pegawai'
});

// await Customer.sync();
// await Pegawai.sync();
// await Sales.sync();
// await Stock.sync();
// await Pembayaran.sync();

// await db.sync({force:true});

export { db, Customer, Pegawai, Sales, Stock , Pembayaran, Admin};




//sampah 

// Definisikan relasi setelah semua model diimpor

// // Relasi Customer ke Sales
// Customer.hasMany(Sales, { 
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE" 
// });

// Sales.belongsTo(Customer, {
//   foreignKey: "id_customer",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// // Relasi Pegawai ke Sales
// Pegawai.hasMany(Sales, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// Sales.belongsTo(Pegawai, {
//   foreignKey: "IdPegawai",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// // Relasi Stock ke Sales
// // Stock.hasMany(Sales, {
// //   onDelete: "CASCADE",
// //   onUpdate: "CASCADE",
// // });

// // Sales.belongsTo(Stock, {
// //   foreignKey: "id_stock",
// //   onDelete: "CASCADE",
// //   onUpdate: "CASCADE",
// // });

// // Relasi Sales ke Pembayaran
// Sales.hasMany(Pembayaran, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// Pembayaran.belongsTo(Sales, {
//   foreignKey: "id_sales",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

