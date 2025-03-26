import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.DB_USER," 1");
const sequelize= new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.USER_PASS, {
    host: process.env.DB_HOST, dialect: "mysql",logging:false,
});
console.log(process.env.USER_PASS," 2");
const DB = async(res,req) => {
    try {
        await sequelize.authenticate();
        console.log("authenticated");
    } catch (e) {
        console.error(e);
    }
}
DB();
export default sequelize;