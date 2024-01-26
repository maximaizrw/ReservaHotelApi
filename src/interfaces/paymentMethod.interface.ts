import { Model } from 'sequelize';

export interface PaymentMethod extends Model{
    id: number,
    description: string;
}