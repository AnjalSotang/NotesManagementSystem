import express from 'express'; //ecma
import globalErrorHandler from './middlewares/globalErrorHandler';
import noteRoutes from './note/noteRoutes';
import cors from 'cors';
import envConfig from './config/config';

const app = express();
//parse incoming json to handle undefined error
app.use(express.json());

//cors configuration
app.use(cors({
    origin: envConfig.frontendURL,
}));



//image public
app.use(express.static('./src/uploads/'))




app.use("/api/notes", noteRoutes);
app.use(globalErrorHandler)
export default app;
