import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { createItem, getItem, getItems, updateItem, deleteItem } from '../services/guest';

const getGuest = async (req: Request, res: Response) => {
    try {
        const responseItem = await getItem(req.params.id);
        res.send(responseItem);
    } 
    catch (e) {
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getGuests = async (req: Request, res: Response) => {
    try {
        const responseItems = await getItems();
        res.status(200).send({data: responseItems? responseItems: "NOT_FOUND"});
    }
    catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}

const createGuest = async ({body}:Request, res: Response) => {
    try {
        const responseItem = await createItem(body);
        res.status(200).send({data: responseItem });
    }
    catch (e) {
        handleHttp(res, "ERROR_CREATE_ITEM", e);
    }
};

const updateGuest = async (req: Request, res: Response) => {
    try {
        const responseItem = await updateItem(req.params.id, req.body);
        res.status(200).send({data: responseItem });
    }
    catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM",e);
    }
}

const deleteGuest = async (req: Request, res: Response) => {
    try {
        const responseItem = await deleteItem(req.params.id);
        res.status(200).send({ message: 'Guest deleted successfully' });
    }
    catch (e) {
        console.log(e);
        handleHttp(res, "ERROR_DELETE_ITEM",e);
    }
};

export { getGuest, getGuests, createGuest, updateGuest, deleteGuest };

