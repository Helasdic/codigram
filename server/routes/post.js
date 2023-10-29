const postRoute = require("express").Router();
const postController = require("../controllers/postController");

postRoute.get("/", postController.getPosts);
postRoute.post("/create", postController.create);
postRoute.put("/update/:id", postController.update);
postRoute.delete("/delete/:id", postController.delete);
postRoute.get("/details/:id", postController.getDetails);

module.exports = postRoute;
