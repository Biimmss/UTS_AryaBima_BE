import Pembayaran from '../model/PembayaranModel.js'
import Customer from '../model/CustomerModel.js';
import Pegawai from '../model/PegawaiModel.js';


export const getAllPembayaran = async (req, res) => {
    try{
        const pembayaran = await Pembayaran.findAll({
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
        });
        res.status(200).json(pembayaran)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPembayaran"})
    }
};


export const getPembayaranById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const pembayaran = await Pembayaran.findByPk(id,{
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
        if (!pembayaran) {
            return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
        }
        res.status(200).json(pembayaran);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createPembayaran = async (req, res) => {
    try{
        const { metode_pembayaran, tanggal_pembayaran, jumlah_pembayaran, id_customer, id_pegawai} = req.body;
        const pembayaran = await Pembayaran.create({metode_pembayaran, tanggal_pembayaran, jumlah_pembayaran, id_customer, id_pegawai});
        res.status(200).json(pembayaran);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createPembayaran"})
    }
}

export const updatePembayaran = async (req, res) => {
    try {
        const { metode_pembayaran, tanggal_pembayaran, jumlah_pembayaran } = req.body
        const data = await Pembayaran.update({ metode_pembayaran, tanggal_pembayaran, jumlah_pembayaran }, {
            where: {
                id_pembayaran: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Pembayaran"})
    }

}
export const deletePembayaran = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Pembayaran.destroy({where: {id_pembayaran:id}});
        res.status(200).json(deleted + `Stock ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Pembayaran"})
    }
}