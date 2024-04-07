const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "LET'S GO!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I need directions!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I love the mud!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Look at that those wheels!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Look at all that mud!",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Is there a Jeep under there?",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Best Ever!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;