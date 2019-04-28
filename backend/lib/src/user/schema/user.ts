import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { mutation, userQuery } from "../queries";

export const userSchema = new GraphQLSchema({
  query: userQuery,
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutation
  })
});
