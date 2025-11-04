
import app from './src/app';
import envConfig from './src/config/config';
import connectDB from './src/config/db';


const startServer = async () => {
  
// Connect to the database
await connectDB();
  const PORT = envConfig.port || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();