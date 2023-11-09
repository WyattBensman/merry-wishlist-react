import { gql } from "@apollo/client";

// Login Mutation
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        fName
        lName
        email
      }
    }
  }
`;

// Create User Mutation
export const CREATE_USER = gql`
  mutation CreateUser(
    $fName: String!
    $lName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      fName: $fName
      lName: $lName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        fName
        lName
        email
      }
    }
  }
`;

// Create List Mutation
export const CREATE_LIST = gql`
  mutation CreateList($title: String!) {
    createList(title: $title) {
      _id
      title
      active
      listItems {
        _id
        itemName
        itemPrice
        itemSize
        itemUrl
      }
    }
  }
`;

// Archive List Mutation
export const ARCHIVE_LIST = gql`
  mutation ArchiveList($listId: ID!) {
    archiveList(listId: $listId) {
      _id
      title
      active
    }
  }
`;

// Delete List Mutation
export const DELETE_LIST = gql`
  mutation DeleteList($listId: ID!) {
    deleteList(listId: $listId) {
      _id
      title
      active
    }
  }
`;

// Create Item Mutation
export const CREATE_ITEM = gql`
  mutation CreateItem(
    $listId: ID!
    $itemName: String!
    $itemPrice: Float!
    $itemSize: String
    $itemUrl: String!
  ) {
    createItem(
      listId: $listId
      itemName: $itemName
      itemPrice: $itemPrice
      itemSize: $itemSize
      itemUrl: $itemUrl
    ) {
      _id
      itemName
      itemPrice
      itemSize
      itemUrl
    }
  }
`;

// Delete Item Mutation
export const DELETE_ITEM = gql`
  mutation DeleteItem($listId: ID!, $itemId: ID!) {
    deleteItem(listId: $listId, itemId: $itemId) {
      _id
      itemName
      itemPrice
      itemSize
      itemUrl
    }
  }
`;

// Save Store Mutation
export const SAVE_STORE = gql`
  mutation SaveStore($userId: ID!, $storeId: ID!) {
    saveStore(userId: $userId, storeId: $storeId) {
      _id
      savedStores {
        _id
        name
        url
        image
      }
    }
  }
`;

// Unsave Store Mutation
export const UNSAVE_STORE = gql`
  mutation UnsaveStore($userId: ID!, $storeId: ID!) {
    unsaveStore(userId: $userId, storeId: $storeId) {
      _id
      savedStores {
        _id
        name
        url
        image
      }
    }
  }
`;
