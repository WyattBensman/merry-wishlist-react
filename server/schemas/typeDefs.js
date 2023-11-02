const typeDefs = `
type User {
    _id: ID!
    fName: String!
    lName: String!
    email: String!
    password: String!
    lists: [List]
    savedStores: [Store]
  }
  
  type List {
    _id: ID!
    active: Boolean!
    title: String!
    listItems: [ListItem]
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

  type Queries {
    user(userId: ID!): User
    list(listId: ID!): List
    stores: [Store]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(input: CreateUserInput!): Auth
    createList(input: CreateListInput!): List
    archiveList(listId: ID!): List
    createItem(input: CreateListItemInput!): ListItem
    editItem(itemId: ID!, input: EditListItemInput!): ListItem
    deleteItem(itemId: ID!): Boolean
    saveStore(userId: ID!, storeId: ID!): User
    unsaveStore(userId: ID!, storeId: ID!): User
  }

input CreateUserInput {
    fName: String!
    lName: String!
    email: String!
    password: String!
}

input CreateListInput {
    title: String!
  }

input CreateListItemInput {
    itemName: String!
    itemPrice: Float!
    itemSize: String
    itemUrl: String!
  }
  
  input EditListItemInput {
    itemName: String
    itemPrice: Float
    itemSize: String
    itemUrl: String
  }
`;
