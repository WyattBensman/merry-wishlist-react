const { User, List, Store } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getUserById: async (_, { userId }) => {
      try {
        const user = await User.findById(userId)
          .populate("lists") // Populate the 'lists' field with associated lists
          .populate("savedStores"); // Populate the 'savedStores' field with associated stores

        return user;
      } catch (error) {
        throw new Error(`Error fetching user: ${error.message}`);
      }
    },

    getListsByUserId: async (_, { userId }) => {
      try {
        const lists = await List.find({ userId }).populate("listItems"); // Populate the 'listItems' field with associated items

        return lists;
      } catch (error) {
        throw new Error(`Error fetching lists: ${error.message}`);
      }
    },

    getStores: async () => {
      try {
        const stores = await Store.find();

        return stores;
      } catch (error) {
        throw new Error(`Error fetching stores: ${error.message}`);
      }
    },
  },
  Mutation: {
    // LOGIN
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError();
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError();
      }

      const token = signToken(user);

      return { token, user };
    },
    // CREATE USER
    createUser: async (_, { fName, lName, email, password }) => {
      const newUser = await User.create({
        fname,
        lName,
        email,
        password,
      });
      const token = signToken(user);

      return { token, user };
    },
    // CREATE LIST
    createList: async (_, { title }, req) => {
      if (!req.user) {
        throw new AuthenticationError();
      }

      const list = await List.create({
        title,
        userId: req.user._id,
      });

      await User.findByIdAndUpdate(
        req.user._id, // Find user by their _id
        { $addToSet: { lists: list._id } }, // Add post._id to user's posts array
        { new: true }
      );

      return list;
    },
    // ARCHIVE LIST
    archiveList: async (_, { listId }, req) => {
      if (!req.user) {
        throw new AuthenticationError();
      }

      try {
        const archivedList = await List.findByIdAndUpdate(
          listId,
          { active: false },
          { new: true }
        );

        if (!archivedList || archivedList.userId.toString() !== req.user._id) {
          throw new Error(
            "List not found or you are not authorized to archive it."
          );
        }

        return archivedList;
      } catch (error) {
        throw new Error(`Error archiving list: ${error.message}`);
      }
    },
    // DELETE LIST
    deleteList: async (_, { listId }, req) => {
      if (!req.user) {
        throw new AuthenticationError();
      }

      const list = await List.findByIdAndDelete(listId);

      if (!list || list.author.toString() !== req.user._id) {
        throw new Error(
          "List not found or you are not authorized to delete this post."
        );
      }

      await User.findByIdAndUpdate(req.user._id, { $pull: { lists: listId } });

      return post;
    },
  },
};
