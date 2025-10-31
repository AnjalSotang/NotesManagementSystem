import {config} from 'dotenv';
config();

const envConfig = {
    port: process.env.PORT,
};

export default envConfig;
// export const envConfig = Object.freeze(envConfig);