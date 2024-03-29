import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const generateToken = (email: string, role_id: number) => {
    const jwt = sign({ email, role_id }, JWT_SECRET, { expiresIn: '2h' });
    return jwt;
};

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};




export { generateToken, verifyToken };
