import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { RoleModel } from './role';

const UserModel = sequelize.define<any>('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING(50),
        validate: {
            is: /^[a-z]+$/i,
        },
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(50),
        validate: {
            is: /^[a-z]+$/i,
        },
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: true,
        },
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: RoleModel,
            key: 'id',
        },
        allowNull: false,
    },
},
    {
        timestamps: false,
    }
);

export { UserModel };


