import express from 'express'; //ecma
import globalErrorHandler from './middlewares/globalErrorHandler';
import noteRoutes from './note/noteRoutes';

const app = express();

app.use("/api/notes", noteRoutes);
app.use(globalErrorHandler)
export default app;
