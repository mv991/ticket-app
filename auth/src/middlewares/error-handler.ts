import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errorrs/request-validation-error";
import { DatabaseConnectionError } from "../errorrs/database-connection-error";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("Handling error");
  }
  if (err instanceof DatabaseConnectionError) {
    console.log("Handling error db");
  }
  res.status(400).send({
    message: err.message,
  });
};
