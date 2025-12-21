
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const header = req.headers.authorization;
        const token = header?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token" });
        const decoded = jwt.verify(token, config.jwtSecret as string) as any;
        if (!roles.includes(decoded.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        (req as any).user = decoded;
        next();
    };
};

export default authorize;