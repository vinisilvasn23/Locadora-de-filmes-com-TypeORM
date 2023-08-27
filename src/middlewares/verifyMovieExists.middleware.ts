import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const verifyMovieExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const { name } = req.body;

  if (id) {
    const foundMovieById: Movie | null = await movieRepo.findOneBy({
      id: Number(id),
    });

    res.locals = { ...res.locals, foundMovieById };

    if (!foundMovieById) {
      throw new AppError("Movie not found", 404);
    }
  }

  if (name) {
    const foundMovieByName: Movie | null = await movieRepo.findOneBy({
      name: name,
    });

    if (foundMovieByName) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  return next();
};
