const userRoute = require("express").Router();
const userController = require("../controllers/userController");

userRoute.get("/", userController.getUsers);
userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
userRoute.put("/update/:id", userController.update);
userRoute.delete("/delete/:id", userController.delete);
userRoute.get("/details/:id", userController.getDetails);

module.exports = userRoute;
