import exprss from "express";
import { body, validationResult } from "express-validator";
import { Response, Request } from "express";
import { RequestValidationError } from "../errorrs/request-validation-error";
import { DatabaseConnectionError } from "../errorrs/database-connection-error";
const router = exprss.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    console.log("Creating a user...");
    throw new DatabaseConnectionError();

    res.send({});
  }
);
export { router as signupRouter };
