const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect("mongodb+srv://rohipedia:Wg7OZi1BHojua8qv@cluster0.wt68v.mongodb.net/node-react?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true } )
        .then(() => console.log('Connected to database!'))
        .catch(() => {
            console.log('Connection failed!')
    });
}

module.exports = connect;