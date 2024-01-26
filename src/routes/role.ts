import { Router } from "express";
import { getItem, getItems, createItem, updateItem, deleteItem } from "../controllers/roleController";
import { checkJwt } from "../middleware/session";
import { checkRole } from "../middleware/role";

const router = Router();

/*
* http://localhost:3000/role -> GET
*/
router.get("/", checkJwt, checkRole(1), getItems);

/*
* http://localhost:3000/role/1 -> GET
*/
router.get("/:id", getItem);

/*
* http://localhost:3000/role -> POST
*/
router.post("/", createItem);

/*
* http://localhost:3000/role/1 -> PUT
*/
router.put("/:id", updateItem);

/*
* http://localhost:3000/role/1 -> DELETE
*/
router.delete("/:id", deleteItem);

export { router }