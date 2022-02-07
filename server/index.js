const express = require("express");
const app= express();
const cors=require("cors");
const pool=require("./db");
const { json } = require("express");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES


//Create income/expense
app.post("/expense",async(req,res)=>{
    try {
        //console.log(req.body);
        const { income_desc ,date_in ,category,amt } = req.body;
        const newInc=await pool.query("INSERT INTO income (income_desc,date_in,category,amt) VALUES($1,$2,$3,$4) RETURNING *", 
        [income_desc,date_in,category,amt] );
        res.json(newInc.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

//Get total income/expense
app.get("/expense",async(req,res)=>{
    try {
        const allInc= await pool.query("SELECT * FROM income")
        res.json(allInc.rows );
    } catch (error) {
        console.error(error.message);
    }
})

//Get a specific range of expense/income
app.get("/expense/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const inc=await pool.query("SELECT * FROM income where income_id=$1",[id])
        res.json(inc.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//Update income/expense
app.put("/expense/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const {amt}=req.body;
        const updateInc= await pool.query("UPDATE income SET amt=$1 where income_id=$2",
        [amt,id]
        )
        res.json("Row was updated");
    } catch (error) {
        console.error(error.message);
    }
})


//Delete a row
app.delete("/expense/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteInc=await  pool.query("DELETE FROM income WHERE income_id=$1",[id]);
        res.json("The specfied row was deleted");
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(5000,()=>{
    console.log("Server has started on port 5000");
});