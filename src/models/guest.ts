import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Guest } from '../interfaces/guest.interface';
import { BookingModel } from './booking';

const GuestModel = sequelize.define<Guest>('guest', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(50),
        validate: {
            is: /^[a-z]+$/i,
        },
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        validate: {
            is: /^[a-z]+$/i,
        },
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATE,
        validate: {
            isDate: true,
        },
        allowNull: false,
    },
    nationality: {
        type: DataTypes.STRING(50),
        validate: {
            is: /^[a-z]+$/i,
        },
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: true,
        },
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(20),
        validate: {
            is: /^[0-9]+$/i,
        },
        allowNull: false
    },
    booking_id: {
        type: DataTypes.INTEGER,
        references: {
            model: BookingModel,
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: false,
});

export { GuestModel };



