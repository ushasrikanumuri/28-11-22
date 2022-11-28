const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const Register=require("./registerschema.js")
const port=2002;
console.log(Register)
app.use(bodyparser.urlencoded({
     extended:true
}))
app.use(bodyparser.json())
app.use(cors())
mongoose.connect("mongodb+srv://kanumuriushasri:Ushasri2003@cluster0.usg2xsb.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("created mongodb database")
})
.catch((err)=>{
	console.log(err)
})
app.get("/",(req,res)=>{
	res.send("vibe alone")
})
app.post("/register",(req,res)=>{
	//const{username,password}=req.body
	const username="dummyuser",password="dummypassword"
	const newuser=new Register({
		username:username,
		password:password
	})
	newuser.save()
})
app.listen(port,()=>console.log("server is in port 2002"))

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               