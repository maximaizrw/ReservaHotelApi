import { Optional } from 'sequelize';
import { GuestModel } from '../models/guest';
import { Guest } from '../interfaces/guest.interface';

const createItem = async (role: Optional<any, string>) => {
    const responseInsert = await GuestModel.create(role);
    return responseInsert;
}

const getItem = async (id: string) => {
    const responseGet = await GuestModel.findByPk(id);
    return responseGet;
}

const getItems = async () => {
    const responseGet = await GuestModel.findAll();
    return responseGet;
}

const updateItem = async (id: string, data: Guest) => {
    const responseUpdate = await GuestModel.update(data, {
        where: { id: id }
    });
    return responseUpdate;
}

const deleteItem = async (id: string) => {
    const responseDelete = await GuestModel.destroy({
        where: { id: id }
    });
    return responseDelete;
}

export { createItem, getItem, getItems, updateItem, deleteItem };




