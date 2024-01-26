import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Booking } from '../interfaces/booking.interface';
import { PaymentMethodModel } from './paymentMethod';
import { bookingNumber } from '../utils/bookingNumber.handle';

const BookingModel = sequelize.define<Booking>('booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    check_in: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    check_out: {
       //DATEONLY
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    payment_method_id: {
        type: DataTypes.INTEGER,
        references: {
            model: PaymentMethodModel,
            key: 'id'
        },
        allowNull: false
    },
    booking_number: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        defaultValue: 0
    }
});

BookingModel.addHook('beforeCreate', async (booking: Booking, options) => {
    booking.booking_number = await bookingNumber();
});

export { BookingModel };



