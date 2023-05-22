const express = require("express");
const parts = express.Router();
const {
    getAllParts,
    getAPart,
    createRequest,
    updatePart,
    deletePart
} = require("../queries/parts")

//Get ALL
parts.get("/", async (req, res) => {
    const allParts = await getAllParts();
    if(allParts[0]){
        res.status(200).json(allParts);
    }else{
        res.status(500).json({error: "server error"});
    }
});

//Get A part
parts.get("/:id", async (req, res) => {
   const {id} = req.params;
   const part = await getAPart(id);
   if(part){
    res.json(part);
   }else{
    res.status(404).json({error: "resource not found"});
   }
});

// Create
parts.post("/", async (req, res) => {
    try{
        const part = await createRequest(req.body);
    }catch(error){
        res.status(404).json({error: error});
    }
});

//Update
parts.put("/:id", async (req, res) => {
    const {id} = req.params;
    const updatedPart = await updatePart(id, req.body);
    if(updatedPart.id){
        res.status(200).json(updatedPart);
    }else {
        res.status(404).json("part not found")
    }
});

//Delete
parts.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const deletedPart = await deletePart(id);
    if(deletedPart.id){
        res.status(200).json(deletedPart);
    }else{
        res.status(400).json({error: "No longer exists"})
    }
});

module.exports = parts