import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userService from "../repositories/userRepository.js";

export async function createUser ({ name, email, password }) {
  const existingUser = await userService.findUserQuery(email);

  if(existingUser.rows[0]){
    return res.sendStatus(409);
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  userService.createUserQuery({name,email,password: hashedPassword});
}

export async function signIn({ email, password }) {
  const user = await userService.findUserQuery(email);

  if(!user || !bcrypt.compareSync(password, user.password)) {
    return res.sendStatus(401);
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return token;
}