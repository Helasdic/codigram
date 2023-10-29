const { Post, User } = require("../models");

class PostController {
  static async getPosts(req, res) {
    try {
      let posts = await Post.findAll({
        include: [User],
        order: [["id", "ASC"]],
      });

      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { caption, image, userid } = req.body;

      let result = await Post.create({
        caption,
        image,
        userid,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
      let id = +req.params.id;

      let result = await Post.destroy({
        where: { id: id },
      });

      result === 1
        ? res.status(200).json({
            message: `Id ${id} has been deleted.`,
          })
        : res.status(400).json({
            message: `Id ${id} has not been deleted.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    try {
      let id = +req.params.id;
      const { caption, image, userid } = req.body;

      let result = await Post.update(
        {
          caption,
          image,
          userid,
        },
        {
          where: { id: id },
        }
      );

      result[0] === 1
        ? res.status(200).json({
            message: `Id ${id} has been updated.`,
            message: `there's Id ${id} not found`,
          })
        : res.status(400).json({
            message: `Id ${id} has not been updated.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getDetails(req, res) {
    try {
      const id = +req.params.id;

      let result = await Post.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Item id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = PostController;
