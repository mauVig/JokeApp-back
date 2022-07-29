import mongodb from 'mongodb'

const client = new mongodb.MongoClient('mongodb+srv://Dadu:DtX4gfhZuREDDtm@cluster0.so3wn.mongodb.net/?retryWrites=true&w=majority')


export const conection = async (callbak) => {
  await client.connect();

  const result = await callbak(client.db('tellJokes'));

  return result
};
