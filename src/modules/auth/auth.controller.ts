import { Request, Response } from "express";
import { authService } from "./auth.service";


const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const result = await authService.loginUser(email, password);

        if (result === null) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        if (result === false) {
            return res.status(404).json({
                success: false,
                message: "Invalid Password"
            })
        }

        const { password: _, ...userWithoutPassword } = result.user

        return res.status(200).json({
            success: true,
            message: "Login Successfull",
            data: {
                token: result.token,
                user: userWithoutPassword
            }
        });


    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

export const authController = {
    loginUser
}