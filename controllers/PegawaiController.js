// import Customer from "../models/CustomerModels.js";
import Customer from "../model/CustomerModel.js";
import Pegawai from "../model/PegawaiModel.js";
import Sales from "../model/SalesModel.js";
import Stock from "../model/StockModel.js";

export const getAllPegawai = async (req, res) => {
    try{
        const pegawai = await Pegawai.findAll({
            include: [
                {
                    model: Customer,
                    as: 'customer'
                },
                {
                    model: Sales,
                    as: 'sales'
                },
                {
                    model: Stock,
                    as: 'stock'
                }
            ]
        });
        res.status(200).json(pegawai)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPegawai"})
    }
};

export const getPegawaiById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const pegawai = await Pegawai.findByPk(id,{
            include: [
                {
                    model: Customer,
                    as: 'customer'
                },
                {
                    model: Pegawai,
                    as: 'pegawai'
                }
            ]
        }); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!pegawai) {
            return res.status(404).json({ message: "Pegawai tidak ditemukan" });
        }
        res.status(200).json(pegawai);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createPegawai = async (req, res) => {
    try{
        const { nama, jabatan, telepon, email, id_customer, id_sales, id_stock } = req.body;
        const pegawai = await Pegawai.create({nama, jabatan, telepon, email, id_customer, id_sales, id_stock });
        res.status(200).json(pegawai);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createPegawai"})
    }
}

export const updatePegawai = async (req, res) => {
    try {
        const { nama, jabatan, telepon, email, id_customer, id_sales, id_stock } = req.body
        const data = await Pegawai.update({ nama, jabatan, telepon, email, id_customer, id_sales, id_stock }, {
            where: {
                id_pegawai: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Pegawai"})
    }

}

export const deletePegawai = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Pegawai.destroy({where: {id_pegawai:id}});
        res.status(200).json(deleted + `Stock ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Pegawai"})
    }
}