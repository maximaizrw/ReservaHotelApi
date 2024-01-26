import { Optional } from 'sequelize';
import { BookingModel } from '../models/booking';
import { Booking } from '../interfaces/booking.interface';

const createItem = async (role: Optional<any, string>) => {
    const responseInsert = await BookingModel.create(role);
    return responseInsert;
}

const getItem = async (id: string) => {
    const responseGet = await BookingModel.findByPk(id);
    return responseGet;
}

const getByBookingNumber = async (bookingNumber: number) => {
    const responseGet = await BookingModel.findOne({ where: { booking_number: bookingNumber } });
    return responseGet;
}

const getItems = async () => {
    const responseGet = await BookingModel.findAll();
    return responseGet;
}

const updateItem = async (id: string, data: Booking) => {
    const responseUpdate = await BookingModel.update(data, {
        where: { id: id }
    });
    return responseUpdate;
}

const deleteItem = async (id: string) => {
    const responseDelete = await BookingModel.destroy({
        where: { id: id }
    });
    return responseDelete;
}

export { createItem, getItem, getItems, updateItem, deleteItem, getByBookingNumber };