import Customer from "../model/CustomerModel.js";
// import Order from "../models/OrderModels.js";
// import Table from "../models/TableModels.js";

export const getAllCustomer = async (req, res) => {
    try{
        const customer = await Customer.findAll();
        res.status(200).json(customer)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllCustomer"})
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const customer = await Customer.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!customer) {
            return res.status(404).json({ message: "Customer tidak ditemukan" });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createCustomer = async (req, res) => {
    try {
        const { nama, alamat, telepon, email } = req.body;
        const customer = await Customer.create({
            nama,
            alamat,
            telepon,
            email
        });
        res.status(201).json({
            message: "Customer berhasil dibuat",
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat customer",
            error: error.message
        });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const { nama, alamat, telepon, email } = req.body
        const data = await Customer.update({ nama, alamat, telepon, email }, {
            where: {
                id_customer: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Customer"})
    }

}


export const deleteCustomer = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Customer.destroy({where: {id_customer:id}});
        res.status(200).json(deleted + ` Customer ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Stock"})
    }
}
