import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      _id
      fName
      lName
      email
      lists {
        _id
        title
        listItems {
          _id
          itemName
          itemPrice
          itemSize
          itemUrl
        }
      }
      savedStores {
        _id
        name
        url
        image
      }
    }
  }
`;

export const GET_LIST = gql`
  query GetList($listId: ID!) {
    list(listId: $listId) {
      _id
      userId {
        _id
        fName
        lName
        email
      }
      title
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

export const GET_STORES = gql`
  query GetStores {
    stores {
      _id
      name
      url
      image
    }
  }
`;
