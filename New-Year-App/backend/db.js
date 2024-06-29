/*
    Todo{
        title: string,
        description: string,
        completed: boolean
    }
*/

const mongoose = require('mongoose');
mongoose.connect("mongodb://react1:react1@ac-ofrzshx-shard-00-00.742bsou.mongodb.net:27017,ac-ofrzshx-shard-00-01.742bsou.mongodb.net:27017,ac-ofrzshx-shard-00-02.742bsou.mongodb.net:27017/?replicaSet=atlas-t3un3j-shard-0&ssl=true&authSource=admin")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}