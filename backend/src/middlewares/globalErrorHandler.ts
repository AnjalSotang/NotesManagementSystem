import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { env } from "process";
import envConfig from "../config/config";

const globalErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
        stack: envConfig.environment === 'development' ? err.stack : "Something went wrong ",
    });
}

export default globalErrorHandler;