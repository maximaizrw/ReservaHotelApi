import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { PaymentMethod } from '../interfaces/paymentMethod.interface';

const PaymentMethodModel = sequelize.define<PaymentMethod>('payment_method', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING
    }
},
    {
        timestamps: false
    });

export { PaymentMethodModel };