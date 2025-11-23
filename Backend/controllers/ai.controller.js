import { generateAI } from "../services/ai.service.js";
export const getResult=async(req,res)=>{
    try{
        const{prompt}=req.query;
        const result=await generateAI(prompt);
        res.send(result)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}