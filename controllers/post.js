const Post = require('../models/Post');
//const cloudinary = require('../middleware/cloudinary');
//const Comment = require("../models/Comment");

module.exports = {
    getHome: async(req, res) => {
        try {
            const requests = await Post.find({ user: req.user.id });
            const openRequests= await Post.countDocuments({
                userId: req.user.id,
                statusClosed: false
              });
            res.render("home.ejs", {
                requests: requests,
                open: openRequests,
                user: req.user
             });

        } catch (err) {
            console.log(err);
        }
    },
};