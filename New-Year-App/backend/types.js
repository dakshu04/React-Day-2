const zod = require('zod');
/*
 { //for first
  title : string,
  description : string,
 }

 {  //for the third one
   id : string
 }
   */

 const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
 })

 const updateTodo = zod.object({
    id : zod.string(),
 })

 module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
 }