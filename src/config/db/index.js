const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/movie-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB Database successfully');
    } catch (error) {
        console.log('Connected to MongoDB Database Failure');
        console.log(error);
    }
}

module.exports = { connect };
