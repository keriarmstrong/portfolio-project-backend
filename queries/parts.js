const db = require("../db/dbConfig");

const getAllParts = async () => {
    try{
        const allParts = await db.any("SELECT * FROM parts");
        return allParts;
    }catch (error){
        return error;
    }
};

const getAPart = async (id) => {
    try{
        const part = await db.one("SELECT * FROM parts WHERE id=$1", id);
        return show;
    }catch (error) {
        return error;
    }
};

const createRequest = async (partReturn) => {
    try{
        const returnRequest = await db.one(
            "INSERT INTO parts (date, part, part_number, part_status, new_sn, old_sn, tracking, technician, returnable, days_past_due) VALUES RETURNING *",
            [
                partReturn.date, 
                partReturn.part, 
                partReturn.part_number, 
                partReturn.part_status, 
                partReturn.new_sn, old_sn, 
                partReturn.tracking, 
                partReturn.technician, 
                partReturn.returnable, 
                partReturn.days_past_due,
            ]
        );
        return returnRequest;
    } catch (error){
        return error;
    }
};

const updatePart = async (id, part) => {
    try{
        const updatePart = await db.one("UPDATE parts SET date=$1, part=$2, part_number=$3, part_status=$4, new_sn=$5, old_sn=$6, tracking=$7, technician=$8, returnable=$9, days_past_due=$10 WHERE id=$11 RETURNING *",
        [
            part.date, 
            part.part, 
            part.part_number, 
            part.part_status, 
            part.new_sn, old_sn, 
            part.tracking, 
            part.technician, 
            part.returnable, 
            part.days_past_due,
        ]);
    }catch (error) {
        return error;
    }
};

const deletePart = async (id) => {
    try{
        const deletedPart = await db.one("DELERE FROM parts WHERE id=$1 RETURNING *", id);
        return deletedPart;
    }catch (error){
        return error;
    }
};

module.exports = {
    getAllParts,
    getAPart,
    createRequest,
    updatePart,
    deletePart
};