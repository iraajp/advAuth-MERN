import express from 'express';
const router = express.Router();
router.get('/join',(req,res)=>{
    res.send("Join page");
})
router.get('/access',(req,res)=>{
    res.send("Auth yourself");
});
router.get('/exit',(req,res)=>{
    res.send("exit page");
});
export default router;