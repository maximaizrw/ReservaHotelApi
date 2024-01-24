import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth';
import { handleHttp } from '../utils/error.handle';

const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const ResponseUser = await registerNewUser(body);
        res.status(200).send(ResponseUser);
    } catch (e) {
        handleHttp(res, "ERROR_CREATE_USER");
    }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body;
        const ResponseUser = await loginUser({ email, password });
        res.status(200).send(ResponseUser);
    } catch (e) {
        handleHttp(res, "ERROR_LOGIN_USER");
    }
}

export { registerCtrl, loginCtrl };