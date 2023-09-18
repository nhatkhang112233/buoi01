import express from "express";

const getHomePage = (req,res) =>{
    return res.render('index',{data:{title:'Trang chủ',page:'home'} });
}
// module.exports = {
//     getHomePage
// }
export default getHomePage