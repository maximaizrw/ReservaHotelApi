import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { createItem, getItem, getItems, updateItem, deleteItem } from '../services/booking';
import { bookingNumber } from '../utils/bookingNumber.handle';


const getBooking = async (req: Request, res: Response) => {
    try {
        const responseItem = await getItem(req.params.id);
        res.send(responseItem);
    } 
    catch (e) {
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getBookings = async (req: Request, res: Response) => {
    try {
        const responseItems = await getItems();
        res.status(200).send({data: responseItems? responseItems: "NOT_FOUND"});
    }
    catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}

const createBooking = async (req: Request, res: Response) => {
    try {
        const booking = req.body;
        //booking.booking_number = await bookingNumber();
        //console.log(booking);


        const responseItem = await createItem(booking);
        res.status(200).send({data: responseItem });
    }
    catch (e) {
        handleHttp(res, "ERROR_CREATE_ITEM",e);
    }
}

const updateBooking = async (req: Request, res: Response) => {
    try {
        const responseItem = await updateItem(req.params.id, req.body);
        res.status(200).send({data: responseItem });
    }
    catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM",e);
    }
}

const deleteBooking = async (req: Request, res: Response) => {
    try {
        const responseItem = await deleteItem(req.params.id);
        res.status(200).send({ message: 'Booking deleted successfully' });
    }
    catch (e) {
        console.log(e);
        handleHttp(res, "ERROR_DELETE_ITEM",e);
    }
};

export { getBooking, getBookings, createBooking, updateBooking, deleteBooking };