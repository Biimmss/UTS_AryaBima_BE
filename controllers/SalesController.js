// import Customer from "../models/CustomerModels.js";
import Sales from '../model/SalesModel.js'
import Customer from '../model/CustomerModel.js';
// import Pembayaran from '../model/PembayaranModel.js'



export const getAllSales = async (req, res) => {
    try {
        const sales = await Sales.findAll({
            include: [{
                model: Customer,
                as: 'customer'
            }]
        });
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil data sales dengan customer",
            error: error.message
        });
    }
};



// export async function getAllSales(req, res) {
//   try {
//     const data = await Sales.findAll();
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

export const getAllSalesById = async (req, res) => {
    try {
        const { id } = req.params;
        const sales = await Sales.findByPk(id, {
            include: [{
                model: Customer,
                as: 'customer'
            }]
        });
        
        if (!sales) {
            return res.status(404).json({ message: "Sales not found" });
        }
        
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat mengambil data sales by ID",
            error: error.message
        });
    }
};

export async function createSales(req, res) {
  const { nama_sales, email_sales, id_customer } = req.body;
  try {
    const newSales = await Sales.create({ nama_sales, email_sales, id_customer});
    res.status(201).send(newSales);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating book");
  }
}

export async function updateSales(req, res) {
  const { id } = req.params;
  const { nama_sales, email_sales } = req.body;
  try {
    const [updated] = await Sales.update(
      { nama_sales, email_sales },
      { where: { id_sales: id } }
    );
    if (updated === 0) {
      return res.status(404).json({ message: "Sales not found" });
    }
    const updatedSales = await Sales.findByPk(id);
    res.status(200).json(updatedSales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating sales", error: error.message });
  }
}

export async function deleteSales(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Sales.destroy({
      where: { id_sales: id },
    });
    if (deleted === 0) {
      return res.status(404).json({ message: "Sales not found" });
    }
    res.status(200).json({ message: "Sales deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting sales", error: error.message });
  }
}

