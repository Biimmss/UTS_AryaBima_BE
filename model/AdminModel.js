import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Admin = db.define('Admin', {
  id_admin: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  freezeTableName: true
});

export default Admin;