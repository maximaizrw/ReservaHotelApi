import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user";
import { encrypt, verify } from "../utils/bcryptjs.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, first_name, last_name, role_id }: User) => {
    const user = await UserModel.findOne({ where: { email } });
    if (user) throw new Error('Email already exists');
    const passwordHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passwordHash, first_name, last_name, role_id });

    return registerNewUser;
}

const loginUser = async ({ email, password }: Auth) => {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) throw new Error('Email or password incorrect');

    const passwordHash = user.password;
    const isCorrect = await verify(password, passwordHash);

    if (!isCorrect) throw new Error('Email or password incorrect');

    const token = generateToken(user.email, user.role_id);

    const data = {
        token,
        user: user,
    }

    return data;
}

export { registerNewUser, loginUser };