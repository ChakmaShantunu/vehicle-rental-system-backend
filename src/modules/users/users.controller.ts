import { Request, Response } from "express";
import { usersService } from "./users.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await usersService.createUser(req.body);
        return res.status(201).json({
            success: true,
            message: "Data Inserted Successfully",
            data: result.rows[0]
        })
    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await usersService.getUser();

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const result = await usersService.updateSingleUser(req.params.id as string, req.body);

        res.status(200).json({
            success: true,
            message: "Users updated successfully",
            data: result.rows
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

export const usersController = {
    createUser,
    getUser,
    updateSingleUser
}