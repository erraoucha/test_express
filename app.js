const express =require('express')
const app = express()
app.use(express.json())
const users=[]
 

app.get('/users',(request,response)=>{
    response.send(users)
})

   
 app.post('/users',(request,response)=>{
    const user = request.body
    const findUser=users.find((x)=> x.id === user.id)
    if(findUser) {
        response.status(400).send('User already exists')
        return
    }
    users.push(user)
    response.status(201).send("craed")
     
     
 })

 app.delete('/users/:id',(request,response)=>{
    const { id }=request.params
    const findUserIndex=users.findIndex((x)=>x.id === id)

    if (findUserIndex == -1){
        response.status(404).send("user not found")
        return
    }

    users.splice(findUserIndex,1)
    response.status(200).send("user deleted")

 })
app.listen(3000,() =>{
    console.log("started on port 3000")
})