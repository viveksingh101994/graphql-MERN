export * from "./user";
import { addUser } from "./addUser";
import { removeUser } from "./deleteUser";
import { updateUser } from "./updateUser";

export const mutation = {
  addUser,
  removeUser,
  updateUser
};
