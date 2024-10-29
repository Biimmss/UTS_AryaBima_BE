import Customer from "../../model/CustomerModel.js";
import Stock  from "../../model/StockModel.js";
import Pembayaran  from "../../model/PembayaranModel.js";
// import Sales  from "../../model/SalesModel.js";
// import Pegawai  from "../../model/PegawaiModel.js";
import Transaksi from "../../model/TransaksiModel.js";
import Invoice from "../../model/InvoiceModel.js";

export default async function clean() {
  await Customer.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Transaksi.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Pembayaran.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Stock.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Invoice.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}