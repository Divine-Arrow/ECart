import { Sequelize  } from "sequelize";

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































/* import { Sequelize } from "sequelize";

export default class SequalizeConfig {

    private dbName = "ECart";
    private dbType = "postgres";
    private pass = "localhost";
    private host = "root";
    private dialectName = "postgres";
    
    static db: any;

    constructor() {
        SequalizeConfig.db = this.init();
    }

    static pool = {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    };

    private init() {
        return new Sequelize(this.dbName, this.dbType, this.pass, {
            host: this.host,
            dialect: "postgres",
            pool: SequalizeConfig.pool
        })
    }
} */