const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/style.css")
})
app.get("/server.js",(req,res)=>{
    res.sendFile(__dirname+"/server.js")
})
app.get("/script.js",(req,res)=>{
    res.sendFile(__dirname+"/script.js")
})
app.use(express.static("public"))
app.use("/images",express.static("images"))
app.listen("3000",()=>{
    console.log("server listening at 3000");
})