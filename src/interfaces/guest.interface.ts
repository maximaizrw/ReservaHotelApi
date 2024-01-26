import { Model } from 'sequelize';

export interface Guest extends Model {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    nationality: string;
    email: string;
    phone_number: string;
    booking_id: number;
}
