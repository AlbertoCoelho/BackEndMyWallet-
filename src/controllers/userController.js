import * as userService from "../services/userServices.js";

export async function createUser (req,res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(422);
    }

    await userService.createUser({ name, email, password });
    res.sendStatus(201);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn (req,res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(422);
    }

    const token = userService.signIn({ email, password });

    res.send(token);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}