import { GraphQLNonNull, GraphQLString } from "graphql";
import { userModel, userType } from "../model";

export const updateUser = {
  type: userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args) => {
    const updatedUser = await userModel.findByIdAndUpdate(args.id, args);
    if (!updatedUser) {
      throw new Error("Error");
    }
    return updatedUser;
  }
};
