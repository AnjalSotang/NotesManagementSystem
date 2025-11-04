import { Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";

const createNote = async (req: Request, res: Response) => {
  try {
    const file = req.file
      ? `${envConfig.BACKEND_URL}/{req.file.filename}`
      : "https://i.pinimg.com/736x/a5/53/17/a55317f4dd2f74d099d48e3ac4a3bbc8.jpg";
    const { title, subtitle, description } = req.body;

    if (!title || !description || !subtitle) {
      res.status(400).json({
        message: "Title, subtitle and description are required",
      });
      return;
    }
    noteModel.create({
      title,
      subtitle,
      description,
      file: file,
    });
    res.status(201).json({ message: "Note created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
