const mongoose = require('mongoose')
const Mock = require('mongodb-memory-server')

const connect = async() => {
    const mongo = await Mock.MongoMemoryServer.create()
    const uri = mongo.getUri()
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    mongoose.connect(uri, mongooseOpts)
}

const closeDatabase = async() => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
}

const clearDatabase = async() => {
    const collections = mongoose.connection.collection;
    for (const key in collections) {
        const collection = collections[key]
        await collection.deleteMany();
    }
}

module.exports = {
    connect,
    closeDatabase,
    clearDatabase
}