import "dotenv/config";
import { Sequelize } from "sequelize";

//Configuración de la base de datos
const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

//Instanciar sequelize
const sequelize = new Sequelize(DB_DATABASE!, DB_USER!, DB_PASSWORD!, {
    host: DB_HOST,
    dialect: "postgres",
    // logging: false,
});

async function dbConnect() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        //await sequelize.sync();
        //console.log("Database synchronized");
    } catch (error) {
        console.log("Error connecting to database");
        console.log(error);
    }
}

export { sequelize, dbConnect };
