const { User, bookSchema } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async () => {
        if (context.user){
            return User.findById()
        }
    },
  },
  Mutation: {
    login: async () => {

    },
    addUser: async () => {

    },
    saveBook: async () => {

    },
    removeBook: async () => {

    },
  },
};
