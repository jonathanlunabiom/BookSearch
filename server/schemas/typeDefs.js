const typeDefs = `
    type Book {
        _id: ID!
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID!   
        username: String!
        email: String! 
        bookCount: String! 
        savedBooks: [Book]
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login (email: String!, password:String!): Auth
        addUser (username: String!, email: String!, password: String!): Auth   
        saveBook (authors: [String], description: String!, title: String!, 
            bookId: ID!, image: String!, link: String!): User
        removeBook (bookId: ID!): User
    }
`;

module.exports = typeDefs;

// @unique
//input type graphql
