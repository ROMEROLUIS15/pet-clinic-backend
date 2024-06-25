import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database/database.js'

export const User = sequelize.define('users', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false,
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('client', 'developer', 'receptionist'),
        allowNull: false,
        defaultValue: 'client'
    },
    passwordChangedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
});

export default User