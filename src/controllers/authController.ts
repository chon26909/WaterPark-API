import { Request, Response } from 'express';
import { IRequestLogin, IRequestRegister } from '../types/auth';
import { comparePassword, generatePassword, generateSalt, generateToken } from '../helpers/auth';
import User from '../models/User';

export const login = async (req: Request, res: Response) => {
    const { email, password }: IRequestLogin = req.body;
    const user = await User.findOne({ email });
    if (user) {
        const valid = await comparePassword(password, user.password, user.salt);
        if (valid) {
            const token = generateToken(user._id);
            return res.status(200).json({ message: 'success', token });
        } else {
            return res.status(400).json({ message: 'password is incorrect' });
        }
    }

    return res.status(400).json({ message: 'email not found' });
};
export const register = async (req: Request, res: Response) => {
    const { email, password, firstname, lastname }: IRequestRegister = req.body;

    try {
        const salt = await generateSalt();
        const hashPassword = await generatePassword(password, salt);

        const data = {
            email,
            password: hashPassword,
            salt,
            firstname,
            lastname,
        };

        const { _id } = await User.create(data);

        const token = generateToken(_id);

        res.status(201).json({ message: 'success', token });
    } catch (error) {
        console.log(error);
    }
};
