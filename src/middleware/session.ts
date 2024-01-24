import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        if (!jwtByUser) {
            res.status(401).send("SESSION_INVALED");
            return;
        }
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401).send("SESSION_INVALED");
        } else {
            next();
        }
    } catch (e) {
        res.status(401).send("SESSION_INVALED");
    }
}

export { checkJwt }