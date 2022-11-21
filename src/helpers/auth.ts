import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const generateSalt = () => {
    return bcrypt.genSalt();
};

export const generatePassword = (password: string, salt: string) => {
    return bcrypt.hash(password, salt);
};

export const comparePassword = async (
    enterPassword: string,
    savedPassword: string,
    salt: string
) => {
    return (await generatePassword(enterPassword, salt)) === savedPassword;
};

export const generateToken = (uid: string) => {
    return jwt.sign({ uid: uid }, process.env.JWT_SECRET!, { algorithm: 'HS256', expiresIn: '1d' });
};
