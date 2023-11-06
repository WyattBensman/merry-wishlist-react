const typeDefs = `
type User {
    _id: ID!
    fName: String!
    lName: String!
    email: String!
    password: String!
    lists: [List]!
    savedStores: [Store]!
  }
  
  type List {
    _id: ID!
    active: Boolean!
    title: String!
    userId: ID!
    listItems: [ListItem]!
  }
  
  type ListItem {
    _id: ID!
    itemName: String!
    itemPrice: Float!
    itemSize: String
    itemUrl: String!
  }
  
  type Store {
    _id: ID!
    name: String!
    url: String!
    image: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    list(listId: ID!): List
    stores: [Store]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(input: CreateUserInput!): Auth
    createList(title: String!, userId: ID!): List
  }

input CreateUserInput {
    fName: String!
    lName: String!
    email: String!
    password: String!
}
`;

module.exports = typeDefs;
