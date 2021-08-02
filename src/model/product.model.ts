import { DataTypes } from "sequelize";
import seqDb from "../config/db.config";

const product = seqDb.define("products", {
    _id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    desc: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
    isDisabled: {
        type: DataTypes.BOOLEAN
    }
});

export default product;