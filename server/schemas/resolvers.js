const { User, List, ListItem, Store } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // Single User
    user: async (_, { userId }) => {
      try {
        /* return User.findOne({ _id: userId }); */
        return await User.findById(userId);
      } catch (err) {
        throw new Error(err);
      }
    },
    // Single List
    list: async (_, { listId }) => {
      try {
        return await List.findById(listId);
      } catch (err) {
        throw new Error(err);
      }
    },
    // All Stores
    stores: async () => {
      try {
        return await Store.find();
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    // Login
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user || !(await user.isCorrectPassword(password))) {
          throw new AuthenticationError();
        }

        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new Error(err);
      }
    },
    // Create User
    createUser: async (_, { input }) => {
      const user = await User.create(input);
      const token = signToken(user);
      return { token, user };
    },
    // Create List
    createList: async (_, { input }) => {
      try {
        const newList = await List.create(input);

        const userData = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { lists: newList._id } },
          { new: true }
        );

        return newList;
      } catch (err) {
        throw new Error(err);
      }
    },

    // Archive List
    archiveList: async (_, { listId }) => {
      const list = await List.findByIdAndUpdate(
        listId,
        { active: false },
        { new: true }
      );
      return list;
    },
    // Create List Item
    createItem: async (_, { input }) => {
      return await ListItem.create(input);
    },

    // Save Store
    saveStore: async (_, { storeId }, context) => {
      try {
        // Check if user is authenticated
        const authenticatedUser = authMiddleware(context.req);

        if (!authenticatedUser) {
          throw new AuthenticationError("User not authenticated");
        }

        const user = await User.findByIdAndUpdate(
          authenticatedUser._id,
          { $addToSet: { savedStores: storeId } }, // $addToSet ensures uniqueness
          { new: true } // Return the updated user object
        );

        // Check if the store was successfully added to the user's savedStores
        return user.savedStores.includes(storeId)
          ? await Store.findById(storeId)
          : null;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
