// write basic express boiler plate code ,
// with express.json() middleware


const expres = require("express");
const { createTodo } = require("./types");
const { todo } = require("node:test");
const app = express();  

// body {
// title : string;
// description : string;
// }

app.use(express.json()); //middle ware parse the incoming request bodies

app.post("/todo" ,async function(req, res) { //router
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongoDb
    await todo.create({
        title : createPayload.title,
        description: createPayload.description,
        completed : false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", function(req, res) {
   const todos = await todo.find({});
   res.json({
    todos
   })
})

app.put("/completed",async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed : true
    })
    res.json({
        msg: "Todo marked as a completed"
    })
})