import { GraphQLNonNull, GraphQLString } from "graphql";
import { userModel, userType } from "../model";

export const removeUser = {
  type: userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args) => {
    const removedUser = await userModel.findByIdAndRemove(args.id);
    if (!removedUser) {
      throw new Error("error");
    }
    return removedUser;
  }
};
