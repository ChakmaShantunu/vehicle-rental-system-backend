import express, { Request, Response } from "express"
import initDB from "./config/db";

const app = express();

app.use(express.json());

initDB();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! boss, great to see you')
});

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);

    res.status(201).json({
        success: true,
        message: "API is working"
    })
});

export default app;