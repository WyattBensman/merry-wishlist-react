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
    title: String!
    listItems: [Item]!
  }
  
  type Item {
    _id: ID!
    itemName: String!
    itemPrice: Float!
    itemSize: SizeOptions
    itemUrl: String!
  }

  enum SizeOptions {
    -
    XS
    S
    M
    L
    XL
    XXL
    U.S. Men 4
    U.S. Men 4.5
    U.S. Men 5
    U.S. Men 5.5
    U.S. Men 6
    U.S. Men 6.5
    U.S. Men 7
    U.S. Men 7.5
    U.S. Men 8
    U.S. Men 8.5
    U.S. Men 9
    U.S. Men 9.5
    U.S. Men 10
    U.S. Men 10.5
    U.S. Men 11
    U.S. Men 11.5
    U.S. Men 12
    U.S. Men 12.5
    U.S. Men 13
    U.S. Women 4
    U.S. Women 4.5
    U.S. Women 5
    U.S. Women 5.5
    U.S. Women 6
    U.S. Women 6.5
    U.S. Women 7
    U.S. Women 7.5
    U.S. Women 8
    U.S. Women 8.5
    U.S. Women 9
    U.S. Women 9.5
    U.S. Women 10
    U.S. Women 10.5
    U.S. Women 11
    U.S. Women 11.5
    U.S. Women 12
    U.S. Women 12.5
    U.S. Women 13
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
    createUser(fName: String!, lName: String!, email: String!, password: String!): Auth
    createList(userId: ID!, title: String!): List
    deleteList(listId: ID!): List
    createItem(listId: ID!, itemName: String!, itemPrice: Float!, itemSize: String, itemUrl: String!): Item
    deleteItem(listId: ID!, itemId: ID!): Item
    saveStore(userId: ID!, storeId: ID!): User
    unsaveStore(userId: ID!, storeId: ID!): User
  }
}
`;

module.exports = typeDefs;
