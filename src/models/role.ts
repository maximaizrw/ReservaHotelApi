import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Role } from '../interfaces/role.interface';

const RoleModel = sequelize.define<Role>('role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        validate: {
            is: /^[a-z]+$/i,
        },
        unique: true,
        allowNull: false,
    },
},
    {
        timestamps: false,
    }
);

export { RoleModel };