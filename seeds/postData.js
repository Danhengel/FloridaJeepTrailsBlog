import { Post } from "../models";

const postData = [
  {
    title: "First Florida JEEP Blog Post",
    content: "This is florida jeep trails blog 1.",
    user_id: 1,
  },

  {
    title: "Second Florida JEEP Blog Post",
    content: "This is florida jeep trails blog 2.",
    user_id: 2,
  },
  {
    title: "Third Florida JEEP Blog Post",
    content: "This is florida jeep trails blog 3.",
    user_id: 3,
  },
  {
    title: "Fourth Florida JEEP Blog Post",
    content: "This is florida jeep trails blog 4.",
    user_id: 4,
  },
  {
    title: "Fifth Florida JEEP Blog Post",
    content: "This is florida jeep trails blog 5.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;