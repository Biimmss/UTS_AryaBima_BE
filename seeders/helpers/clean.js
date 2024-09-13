import Customer from "../../model/CustomerModel.js";
import Stock  from "../../model/StockModel.js";
import Pembayaran  from "../../model/PembayaranModel.js";
import Sales  from "../../model/SalesModel.js";
import Pegawai  from "../../model/PegawaiModel.js";

export default async function clean() {
  await Customer.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Sales.destroy({
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
  await Pegawai.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}