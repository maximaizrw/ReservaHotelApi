import { Model } from 'sequelize';

export interface Booking extends Model {
    id: number;
    check_in: Date;
    check_out: Date;
    price: number;
    payment_method_id: number;
    booking_number: number;
}