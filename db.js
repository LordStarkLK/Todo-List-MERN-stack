const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology:true
        };
        await mongoose.connect('mongodb+srv://user:S8HoSheut2DYHojX@nodetute.o8gnihd.mongodb.net/?retryWrites=true&w=majority',
        connectionParams);
        console.log("Connected to database")
    } catch (error) {
        console.log(error);
    }
}