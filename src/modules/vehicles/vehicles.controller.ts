import { Request, Response } from "express";
import { vehiclesService } from "./vehicles.service";

const createVehicle = async (req: Request, res: Response) => {
    try {
        const result = await vehiclesService.createVehicle(req.body);

        return res.status(201).json({
            success: true,
            message: "Vehicle created Successfully",
            data: result.rows[0]
        })
    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

export const vehiclesController = {
    createVehicle
}