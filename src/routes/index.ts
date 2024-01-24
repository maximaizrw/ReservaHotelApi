import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

//Quitarle la extension al nombre del archivo
const cleanFileName = (fileName: string) => {
    return fileName.split(".")[0];

}

//Cargador dinamico de rutas
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router };