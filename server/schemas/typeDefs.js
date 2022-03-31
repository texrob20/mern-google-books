// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String    
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    savedBooks(username: String): [Book]
    book(_id: ID!): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(username: String!): User
    removeBook(username: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;