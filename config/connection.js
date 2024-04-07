import Sequelize from 'sequelize';
import dotenv from 'dotenv'; // Import sensitive data from .env

dotenv.config();

const sequelize = process.env.JAWSDB_URL 
  ? new Sequelize(process.env.JAWSDB_URL) // JAWSDB_URL is for HEROKU
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // This is for Local
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;
