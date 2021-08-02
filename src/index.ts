import express from "express";
// import seqDb from "@config/db.config";
// import productRouter from "@routes/routes";


import seqDb from "./config/db.config";
import productRouter from "./routes/product.routes";

export default class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.dbConnect();
        this.setupRoutes();
    }

    private config (): void {
        this.app.use(express.json());
    }

    private setupRoutes (): void  {
        this.app.use("/api", productRouter);
    }

    private dbConnect () {
        seqDb.authenticate()
            .then(() => console.log("DB connected.."))
            .catch(() => console.log("Facing error while connecting to DB.") );
    }
    
    init(port: number): Promise<number | string> {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => resolve(port))
                .on("error", () => reject("Somthing went wrong"));
        });
    }
}