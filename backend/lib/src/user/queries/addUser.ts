import { GraphQLNonNull, GraphQLString } from "graphql";
import { userModel, userType } from "../model";

export const addUser = {
  type: userType,
  /* define the arguments that we should pass to the mutation
   here we require both user name and the email 
   the id will be generated automatically 
*/
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args) => {
    // under the resolve method we get our arguments

    const uModel = new userModel(args);
    const newUser = await uModel.save();
    if (!newUser) {
      throw new Error("error");
    }
    return newUser;
  }
};
