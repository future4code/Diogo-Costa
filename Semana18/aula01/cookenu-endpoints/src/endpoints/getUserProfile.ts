import {Request, Response} from "express";
import {BaseDatabase} from "../data/BaseDatabase";
import {Authenticator} from "../services/Authenticator";
import {UserDatabase} from "../data/UserDatabase";
import { UserBusiness } from "../business/UserBusiness";

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;//já tem um token

    const userBusiness = new UserBusiness();
    const user = await userBusiness.getUserProfile(token);

    res.status(200).send({
      userName: user.name,
      userEmail: user.email,
      userId: user.id
    });
    
  }catch (e) {
    res.status(400).send({
      message: e.message
    })
  }
  await BaseDatabase.destroyConnection();
};