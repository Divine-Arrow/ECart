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
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

export default product;

/* 
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
*/