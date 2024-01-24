import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user";
import { encrypt, verify } from "../utils/bcryptjs.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, first_name, last_name, role_id }: User) => {
    const checkIs = await UserModel.findOne({ where: { email } });
    if (checkIs) throw new Error('Email already exists');
    const passwordHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passwordHash, first_name, last_name, role_id });

    return registerNewUser;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ where: { email } });
    if (!checkIs) throw new Error('Email or password incorrect');

    const passwordHash = checkIs.password;
    const isCorrect = await verify(password, passwordHash);

    if (!isCorrect) throw new Error('Email or password incorrect');

    const token = generateToken(checkIs.email);

    const data = {
        token,
        user: checkIs,
    }

    return data;
}

export { registerNewUser, loginUser };