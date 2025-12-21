import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../config";

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.headers.authorization;
        if (!header) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = header.split(" ")[1];
        const decoded = jwt.verify(token as string, config.jwtSecret as string);

        (req as any).user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default auth