import db from "../utils/connection.js";
import Customer from "./CustomerModel.js";
// import Pegawai from "./PegawaiModel.js";
// import Sales from "./SalesModel.js";
import Stock from "./StockModel.js";
import Pembayaran from "./PembayaranModel.js";
import Admin from "./AdminModel.js";
import Transaksi from "./TransaksiModel.js";
import Invoice from "./InvoiceModel.js";

// Relasi antara Pegawai dan Customer (Many-to-One)
// Customer.hasMany(Pegawai, {
//   foreignKey: 'id_customer',
//   as: 'pegawai'
// });
// Pegawai.belongsTo(Customer, {
//   foreignKey: 'id_customer',
//   as: 'customer'
// });

// Relasi antara Pegawai dan Sales (Many-to-One)
// Sales.hasMany(Pegawai, {
//   foreignKey: 'id_sales',
//   as: 'pegawai'
// });
// Pegawai.belongsTo(Sales, {
//   foreignKey: 'id_sales',
//   as: 'sales'
// });

// Relasi antara Pegawai dan Stock (Many-to-One)
// Stock.hasMany(Pegawai, {
//   foreignKey: 'id_stock',
//   as: 'pegawai'
// });
// Pegawai.belongsTo(Stock, {
//   foreignKey: 'id_stock',
//   as: 'stock'
// });

// Relasi antara Sales dan Customer (Many-to-One)
// Customer.hasMany(Sales, {
//   foreignKey: 'id_customer',
//   as: 'sales'
// });
// Sales.belongsTo(Customer, {
//   foreignKey: 'id_customer',
//   as: 'customer'
// });

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
// Pegawai.hasMany(Pembayaran, {
//   foreignKey: 'id_pegawai',
//   as: 'pembayaran'
// });
// Pembayaran.belongsTo(Pegawai, {
//   foreignKey: 'id_pegawai',
//   as: 'pegawai'
// });

// Relasi antara Transaksi dan Customer (Many-to-One)
Customer.hasMany(Transaksi, {
  foreignKey: 'id_customer',
  as: 'transaksi'
});
Transaksi.belongsTo(Customer, {
  foreignKey: 'id_customer',
  as: 'customer'
});

// Relasi antara Transaksi dan Stock (Many-to-One)
Stock.hasMany(Transaksi, {
  foreignKey: 'id_stock',
  as: 'transaksi'
});
Transaksi.belongsTo(Stock, {
  foreignKey: 'id_stock',
  as: 'stock'
});

// Relasi antara Invoice dan Transaksi (Many to one)
Transaksi.hasMany(Invoice, {
  foreignKey: "id_transaksi",
  as: 'invoice'
})

Invoice.belongsTo(Transaksi, {
  foreignKey: "id_transaksi",
  as: 'transaksi'
})

// await Customer.sync();
// await Pegawai.sync();
// await Sales.sync();
// await Stock.sync();
// await Pembayaran.sync();
// await Transaksi.sync();

// await db.sync({force:true});

export { db, Customer, Stock, Pembayaran, Admin, Transaksi, Invoice };
