
import app from './src/app';
import envConfig from './src/config/config';

const startServer = () => {
  const PORT = envConfig.port || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();