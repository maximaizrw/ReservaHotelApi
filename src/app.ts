import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router } from "./routes";
const PORT = process.env.PORT;
import { dbConnect } from "./config/database";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    dbConnect();
});




