// Importing Post model from ../models directory
import { User } from "../models";
// Array of dummy blog post data
const userData = [
  {
    username: "JeepUser1",
    email: "jeepuser1@example.com",
    password: "jeeppassword1",
  },
  {
    username: "JeepUser2",
    email: "jeepuser2@example.com",
    password: "jeeppassword2",
  },
  {
    username: "JeepUser3",
    email: "jeepuser3@example.com",
    password: "jeeppassword3",
  },
  {
    username: "JeepUser4",
    email: "jeepuser4@example.com",
    password: "jeeppassword4",
  },
  {
    username: "JeepUser5",
    email: "jeepuser5@example.com",
    password: "jeeppassword5",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;