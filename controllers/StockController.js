import Customer from "../model/CustomerModel.js";
import Stock from "../model/StockModel.js";


export const getAllStock = async (req, res) => {
    try{
        const stock = await Stock.findAll();
        res.status(200).json(stock)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllStock"})
    }
};

export const getAllStockById = async (req, res) => {
    try {
        const {id} = req.params// Mengambil ID dari parameter URL
        // return res.send("test")
        const stock = await Stock.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!stock) {
            return res.status(404).json({ message: "Stock tidak ditemukan" });
        }
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createStock = async (req, res) => {
    try{
        const { nama_mobil, merk, tahun, harga} = req.body;
        const stock = await Stock.create({nama_mobil, merk, tahun, harga});
        res.status(200).json(stock);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createStock"})
    }
}

export const updateStock = async (req, res) => {
    try {
        const { nama_mobil, merk, tahun, harga } = req.body
        const data = await Stock.update({ nama_mobil, merk, tahun, harga }, {
            where: {
                id_stock: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Stock"})
    }

}


// export const updateStock = async (req, res) => {
    
// const { id } = req.params;
// console.log(id)
//     try{
//         const { nama_mobil, merk, tahun, harga } = req.body;
//         const [updated] = await Stock.update({ nama_mobil, merk, tahun, harga }, { where: { id } });
//         // const updatedStock = await Stock.findByPk(id_stock);
//         // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
//         if (updated === 0){
//             res.status(404).json({error: error.message, message: "Stock tidak ter-update"})
//         }else{
//             res.status(200).json(updated);
//         }
//     }catch(error){
//         res.status(500).json({error: error.message, message: "gagal mengupdate Stock"})
//     }
// }

export const deleteStock = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Stock.destroy({where: {id_stock:id}});
        res.status(200).json(deleted + ` Stock ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Stock"})
    }
}