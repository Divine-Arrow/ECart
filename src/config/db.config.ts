import { Sequelize  } from "sequelize";
/* 
type seqOptionType {
    host: string,
    dialect: string,
    pool: {
        max: number,
        min: number,
        acquire: number,
        idle: number
    }
};


const seqOptions: seqOptionType = {
    host: "localhost",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
} */

export default new Sequelize("ECart", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});