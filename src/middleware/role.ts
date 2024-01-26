import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkRole = (role: number) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const jwtByUser = req.headers.authorization || '';
            if (!jwtByUser) {
                res.status(401).send("NEED_SESSION");
                return;
            }
            const jwt = jwtByUser.split(' ').pop();
            const user = verifyToken(`${jwt}`);
            if (!user) {
                res.status(401).send("SESSION_INVALID");
                return;
            }
            // Verificar el rol del usuario
            console.log('user', user);
            if (typeof user !== 'string' && user.role_id !== role) {

                res.status(403).send("FORBIDDEN");
                return;
            }
            next();
        } catch (e) {
            res.status(401).send("SESSION_INVALID");
        }
    }
}

export { checkRole }