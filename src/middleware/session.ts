import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        console.log(req.headers);
        if (!jwtByUser) {
            res.status(401).send("NEED_SESSION");
            return;
        }
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401).send("SESSION_INVALED");
            return;
        }
        next();
    } catch (e) {
        res.status(401).send("SESSION_INVALED");
    }
}

export { checkJwt }