import { Model } from 'sequelize'; // Import the base model interface

export interface Role extends Model {
    id: number;
    name: string;
}