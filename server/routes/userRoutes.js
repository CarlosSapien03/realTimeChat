const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/register", async (req, res) => {
  //pedir campos del frontend
  try {
    const { username, email, password } = req.body;

    //validar campos
    if (!username || !email || !password) {
      return res.status(400).json({ message: "llena todo pendejo" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Usuario existente." });
    }

    //crear usuario
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "Usuario creado exitosamente." });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ message: "Error del servidor." });
  }
});
