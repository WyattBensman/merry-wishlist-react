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
    userId: User!
    active: Boolean!
    title: String!
    listItems: [Item]!
  }
  
  type Item {
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
    getUserById(userId: ID!): User
    getListsByUserId(userId: ID!): [List]
    getStores: [Store]
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    createUser(fName: String!, lName: String!, email: String!, password: String!): Auth
    createList(userId: ID!, title: String!): List
    archiveList(listId: ID!): List
    deleteList(listId: ID!): List
    createItem(listId: ID!, itemName: String!, itemPrice: Float!, itemSize: String, itemUrl: String!): Item
    editItem(itemId: ID!, itemName: String!, itemPrice: Float!, itemSize: String, itemUrl: String!): Item
    deleteItem(itemId: ID!): Item
    saveStore(userId: ID!, storeId: ID!): User
    unsaveStore(userId: ID!, storeId: ID!): User
  }
}
`;

module.exports = typeDefs;
