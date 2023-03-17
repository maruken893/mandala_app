import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  'mandala_db',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      useUTC: false,
    },
    timezone: '+09:00',
  }
);

export default sequelize;
