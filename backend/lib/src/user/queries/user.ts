import { GraphQLList, GraphQLObjectType } from "graphql";
import { userModel, userType } from "../model";

// Query
export const userQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: async () => {
          const user = await userModel.find();
          if (!user) {
            throw new Error("error while fetching data");
          }
          return user;
        }
      }
    };
  }
});
