import express from "express";
import getHomePage from "../controllers/homeController";
import aboutPage from "../controllers/aboutController";
import userController from "../controllers/userController";


const router = express.Router();

const initWebRoute = (app) =>{


    router.get('/',getHomePage);

    router.get('/about',aboutPage);


    router.get('/list-user/:trang',userController.listUser);
    router.get('/login',userController.login);
    router.get('/create-new-user',userController.newUser);
    router.get('/detail-user/:username',userController.detailUser);

    // router.get('/listUser',userController.getAllUser);
    // router.get('/detailUser/:id',userController.detailUser);

    router.use((req, res, next) => {
        res.status(404).send('Lỗi 404: Trang không tồn tại');
    });

    return app.use('/',router);
}
export default initWebRoute