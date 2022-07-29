import mongodb from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()
const client = new mongodb.MongoClient(process.env.MONGO_SER)


export const conection = async (callbak) => {
  await client.connect();

  const result = await callbak(client.db(proocess.env.DB_NAME));

  return result
};
