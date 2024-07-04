import { Request, Response } from "express";
import {
  findAllUsers,
  findUserById,
  modifyUser,
  removeUser,
} from "../services/UserService";
import { UserDoesNotExistError } from "../utils/LibraryErrors";

async function getAllUsers(req: Request, res: Response) {
  try {
    let users = await findAllUsers();
    res.status(200).json({
      message: "User retrieved successfully",
      users,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to retrieve users at this time",
      error: error.message,
    });
  }
}

async function getUserById(req: Request, res: Response) {
  const userId = req.params.userId;
  try {
    let users = await findUserById(userId);
    res.status(200).json({
      message: "User found successfully",
      users,
    });
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({ message: "User requested does not exist" });
    } else {
      res.status(500).json({
        message: "Could not find user",
        error: error.message,
      });
    }
  }
}

async function updateUser(req: Request, res: Response) {
  const user = req.body;
  try {
    let updatedUser = await modifyUser(user);
    res.status(202).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({ message: "User requested does not exist" });
    } else {
      res.status(500).json({
        message: "Unable to update user currently",
        error: error.message,
      });
    }
  }
}

async function deleteUser(req: Request, res: Response) {
  const userId: string = req.params.userId;
  try {
    await removeUser(userId);
    res.status(202).json({
      message: "User deleted successfully",
    });
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({ message: "User requested does not exist" });
    } else {
      res.status(500).json({
        message: "Unable to delete user at this time",
        error: error.message,
      });
    }
  }
}

export default { getAllUsers, getUserById, updateUser, deleteUser };
