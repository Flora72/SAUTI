export default {
  appName: 'Sauti API',
  port: parseInt(process.env.PORT || '4000', 10),
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/sauti',
  dbName: process.env.DB_NAME || 'sauti',
};
