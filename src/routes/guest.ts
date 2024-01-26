import { Router } from "express";
import { getGuest, getGuests, createGuest, updateGuest, deleteGuest } from "../controllers/guestController";

const router = Router();

/*
* http://localhost:3000/guest -> GET
*/
router.get("/", getGuests);

/*
* http://localhost:3000/guest/1 -> GET
*/
router.get("/:id", getGuest);

/*
* http://localhost:3000/guest -> POST
*/
router.post("/", createGuest);

/*
* http://localhost:3000/guest/1 -> PUT
*/
router.put("/:id", updateGuest);

/*
* http://localhost:3000/guest/1 -> DELETE
*/
router.delete("/:id", deleteGuest);

export { router }
