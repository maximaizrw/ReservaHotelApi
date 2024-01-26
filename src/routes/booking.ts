import { Router } from "express";
import { getBookings, getBooking, createBooking, updateBooking, deleteBooking } from "../controllers/bookingController";

const router = Router();

/*
* http://localhost:3000/booking -> GET
*/
router.get("/", getBookings);

/*
* http://localhost:3000/booking/1 -> GET
*/
router.get("/:id", getBooking);

/*
* http://localhost:3000/booking -> POST
*/
router.post("/", createBooking);

/*
* http://localhost:3000/booking/1 -> PUT
*/
router.put("/:id", updateBooking);

/*
* http://localhost:3000/booking/1 -> DELETE
*/
router.delete("/:id", deleteBooking);

export { router }

