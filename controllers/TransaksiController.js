import Transaksi from "../model/TransaksiModel.js";
import Customer from "../model/CustomerModel.js";
import Stock from "../model/StockModel.js";
import Invoice from "../model/InvoiceModel.js";

export const getAllTransaksi = async (req, res) => {
    try {
        const transaksi = await Transaksi.findAll({
            include: [
                {
                    model: Customer,
                    as: 'customer'
                },
                {
                    model: Stock,
                    as: 'stock'
                }
            ]
        });
        res.status(200).json(transaksi);
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Terjadi kesalahan saat getAllTransaksi" });
    }
};

export const getTransaksiById = async (req, res) => {
    try {
        const { id } = req.params; // Mengambil ID dari parameter URL
        const transaksi = await Transaksi.findByPk(id, {
            include: [
                {
                    model: Customer,
                    as: 'customer'
                },
                {
                    model: Stock,
                    as: 'stock'
                }
            ]
        }); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!transaksi) {
            return res.status(404).json({ message: "Transaksi tidak ditemukan" });
        }
        res.status(200).json(transaksi);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createTransaksi = async (req, res) => {
    try {
        const { tanggal_transaksi, total_transaksi, status_transaksi, id_customer, id_stock } = req.body;
        const transaksi = await Transaksi.create({ tanggal_transaksi, total_transaksi, status_transaksi, id_customer, id_stock });
        res.status(200).json(transaksi);
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Gagal membuat createTransaksi" });
    }
};

export const updateTransaksi = async (req, res) => {
    try {
        const { tanggal_transaksi, total_transaksi, status_transaksi, id_customer, id_stock} = req.body;
        const data = await Transaksi.update({ tanggal_transaksi, total_transaksi, status_transaksi, id_customer, id_stock }, {
            where: {
                id_transaksi: req.params.id
            }
        });
        res.status(200).json("Transaksi berhasil terupdate");
    } catch (err) {
        res.status(500).json({ err: err.message, message: "Gagal mengupdate Transaksi" });
    }
};

export const deleteTransaksi = async (req, res) => {
    try {
        const { id } = req.params;

        // Hapus entri terkait di tabel invoice
        await Invoice.destroy({ where: { id_transaksi: id } }); // Pastikan untuk mengganti dengan model yang sesuai

        // Hapus transaksi
        const deleted = await Transaksi.destroy({ where: { id_transaksi: id } });
        if (deleted) {
            res.status(200).json(`Transaksi ke ${id} berhasil dihapus`);
        } else {
            res.status(404).json({ message: "Transaksi tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Gagal menghapus Transaksi" });
    }
}