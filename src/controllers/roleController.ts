import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { RoleModel } from '../models/role';
import { insertRole, getRoles, getRole,deleteRole,updateRole } from '../services/role';
import { get } from 'http';


const getItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await getRole(req.params.id);
        res.send(responseItem);
    } 
    catch (e) {
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const responseItems = await getRoles();
        res.status(200).send({data: responseItems? responseItems: "NOT_FOUND"});
    }
    catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}

const createItem = async ({body}:Request, res: Response) => {
    try {
        const responseItem = await insertRole(body);
        res.status(200).send({data: responseItem });
    }
    catch (e) {
        handleHttp(res, "ERROR_CREATE_ITEM", e);
    }
};

const updateItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await updateRole(req.params.id, req.body);
        res.status(200).send({data: responseItem });
    }
    catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM",e);
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await deleteRole(req.params.id);
        res.status(200).send({ message: 'Role deleted successfully' });
    }
    catch (e) {
        console.log(e);
        handleHttp(res, "ERROR_DELETE_ITEM",e);
    }
};

export { getItem, getItems, createItem, updateItem, deleteItem };