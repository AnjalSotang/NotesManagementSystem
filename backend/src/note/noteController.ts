import { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import createHttpError from "http-errors";

const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file
      ? `${envConfig.BACKEND_URL}/${req.file.filename}`
      : "https://i.pinimg.com/736x/a5/53/17/a55317f4dd2f74d099d48e3ac4a3bbc8.jpg";
    const { title, subtitle, description } = req.body;

    if (!title || !description || !subtitle) {
      res.status(400).json({
        message: "Title, subtitle and description are required",
      });
      return;
    }

    await noteModel.create({
      title,
      subtitle,
      description,
      file: file,
    });
    res.status(201).json({ message: "Note created successfully" });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Internal Server Error"));
  }
};

const listNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      messages: "Notes Fetched",
      note: notes,
    });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Internal Server Error"));
  }
};

const listNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const note = await noteModel.findById(id);
    if(!note){
      return next(createHttpError(404, "Note Not Found"));
    }
    res.status(200).json({
      messages: "Note Fetched",
      note: note,
    });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Internal Server Error"));
  }
};

const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
  await noteModel.findByIdAndDelete(id);
    res.status(200).json({
      messages: "Note Deleted"
    });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Internal Server Error"));
  }
};

const updateNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
  await noteModel.findByIdAndUpdate(id);
    res.status(200).json({
      messages: "Note Updated"
    });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Internal Server Error"));
  }
};




export { createNote, listNotes, listNote, deleteNote, updateNote };
