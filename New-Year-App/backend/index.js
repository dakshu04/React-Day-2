// write basic express boiler plate code ,
// with express.json() middleware


const expres = require("express");
const { createTodo } = require("./types");
const app = express();  

// body {
// title : string;
// description : string;
// }

app.use(express.json()); //middle ware parse the incoming request bodies

app.post("/todo" , function(req, res) { //router
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongoDb
})

app.get("/todos", function(req, res) {

})

app.put("/completed", function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
})