import Customer from "../model/CustomerModel.js"
import Stock  from "../model/StockModel.js";
import Pembayaran  from "../model/PembayaranModel.js";
import Sales  from "../model/SalesModel.js";
import Pegawai  from "../model/PegawaiModel.js";
import clean from "./helpers/clean.js";
import '../model/index.js'

const createSeeder = async () => {
    await clean()
    const customer = await Customer.create({
        nama: "John Doe",
        alamat: "Jln. Soekarno",
        telepon:"0813-2323-4333",
        email:"john@gmail.com"    
    });
    
    const stock = await Stock.create({
        nama_mobil: "nissan",
        merk: "gtr r32",
        tahun: "1980",
        harga: "Rp250.000.000"
    });
    
    const sales = await Sales.create({
        nama_sales: "Peter Greg",
        email_sales: "12556677",
        id_customer:customer.dataValues.id_customer
    });

    const pegawai = await Pegawai.create({
        nama: "RAPLI",
        jabatan: "1",
        telepon: "0823-2244-3321",
        id_customer:customer.dataValues.id_customer,
        id_sales:sales.dataValues.id_sales,
        id_stock:stock.dataValues.id_stock
    });
    
    const pembayaran = await Pembayaran.create({
        metode_pembayaran: "CASH",
        tanggal_pembayaran: "12 November 2023",
        jumlah_pembayaran: "Rp300.000.000",
        id_customer:customer.dataValues.id_customer,
        id_pegawai:pegawai.dataValues.id_pegawai
    });
    
    // // console.log(customer.dataValues.id_customer)
    
    return { customer, stock, pembayaran, sales, pegawai };
}

const customer = await createSeeder()
// customer.map((a, i) => {
    //     console.log(JSON.stringify(a))
    // });