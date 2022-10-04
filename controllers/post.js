var Post = require('../models/Post');

module.exports = {
    getHome: async(req, res) => {
        try {
            var requests = await Post.find({ user: req.user.id });
            var openRequests= await Post.countDocuments({
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