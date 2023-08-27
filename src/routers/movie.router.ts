import { Router } from "express";
import { movieControllers } from "../controllers";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";
import middlewares from "../middlewares";

export const movieRouter: Router = Router();

movieRouter.post(
  "",
  middlewares.verifyMovieExists,
  middlewares.validateBody(movieCreateSchema),
  movieControllers.create
);
movieRouter.get("", middlewares.pagination, movieControllers.read);

movieRouter.use("/:id", middlewares.verifyMovieExists);

movieRouter.patch(
  "/:id",
  middlewares.validateBody(movieUpdateSchema),
  movieControllers.partialUpdate
);
movieRouter.delete("/:id", movieControllers.destroy);
