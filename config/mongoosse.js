const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb+srv://admin:1234@cluster0.ehvkm.mongodb.net/database?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, () => {
    console.log('connected to DB')
})