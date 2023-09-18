import pool from './../config/connectDB'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute
    ('SELECT * FROM `nguoiDung`')
    return rows
}
const detailUser = async (userId) =>{
    const [rows] = await pool.execute
    ('SELECT * FROM `nguoiDung` WHERE maNguoiDung=?',[userId])
    return rows[0]
}
export default {
    getAllUser,
    detailUser
}