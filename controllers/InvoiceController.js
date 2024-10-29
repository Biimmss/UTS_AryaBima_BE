import Invoice from "../model/InvoiceModel.js";
import Transaksi from "../model/TransaksiModel.js";

export const getAllInvoices = async (req, res) => {
    try{
        const invoices = await Invoice.findAll({
            include: [
                {
                    model: Transaksi,
                    as: 'transaksi'
                }
            ]
        });
        res.status(200).json(invoices)
    } catch(error){
        res.status(500).json({error: error.message, message: "terjadi kesalahan saat getAllInvoices"})
    }
};

export const getInvoiceById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const invoice = await Invoice.findByPk(id,{
            include: [
                {
                    model: Transaksi,
                    as: 'transaksi'
                }
            ]
        }); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!invoice) {
            return res.status(404).json({ message: "Invoice tidak ditemukan" });
        }
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createInvoice = async (req, res) => {
    try{
        const { tanggal_invoice, total_invoice, status_invoice, id_transaksi } = req.body;
        const invoice = await Invoice.create({tanggal_invoice, total_invoice, status_invoice, id_transaksi });
        res.status(200).json(invoice);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createInvoice"})
    }
}

export const updateInvoice = async (req, res) => {
    try {
        const { tanggal_invoice, total_invoice, status_invoice, id_transaksi } = req.body
        const data = await Invoice.update({ tanggal_invoice, total_invoice, status_invoice, id_transaksi }, {
            where: {
                id_invoice: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Invoice"})
    }

}

export const deleteInvoice = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Invoice.destroy({where: {id_invoice:id}});
        res.status(200).json(deleted + `Invoice ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Invoice"})
    }
}