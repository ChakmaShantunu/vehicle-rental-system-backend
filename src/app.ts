import express, { Request, Response } from "express"
import initDB from "./config/db";
import { usersRoutes } from "./modules/users/users.routes";
import { vehiclesRoutes } from "./modules/vehicles/vehicles.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();

app.use(express.json());

initDB();

app.use("/v1/users", usersRoutes);

app.use("/v1/vehicles", vehiclesRoutes);

app.use("/v1/auth", authRoutes);

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