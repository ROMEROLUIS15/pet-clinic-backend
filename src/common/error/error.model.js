import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database/database.js'

export const Error = sequelize.define('errors', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    stack: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

export default Error