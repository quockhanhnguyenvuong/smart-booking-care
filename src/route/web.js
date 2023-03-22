import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);

  // API create new user
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);

  //API read user
  router.get("/get-crud", homeController.displayGetCRUD);

  //API update user
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);

  //API delete user
  router.get("/delete-crud", homeController.deleteCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
