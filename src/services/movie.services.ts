import { Movie } from "../entities";
import {
  MovieCreate,
  MovieRead,
  MovieUpdate,
  Pagination,
  PaginationParams,
} from "../interfaces";
import { movieRepo } from "../repositories";

const create = async (payload: MovieCreate): Promise<Movie> => {
  return await movieRepo.save(payload);
};

const read = async ({
  page,
  perPage,
  order,
  sort,
  nextPage,
  prevPage,
}: PaginationParams): Promise<Pagination> => {
  const [movies, count]: Array<MovieRead | number> =
    await movieRepo.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });

  return {
    prevPage: page > 1 ? prevPage : null,
    nextPage: count - page <= perPage ? null : nextPage,
    count: count,
    data: movies,
  };
};

const partialUpdate = async (
  movie: Movie,
  payload: MovieUpdate
): Promise<Movie> => {
  return await movieRepo.save({ ...movie, ...payload });
};

const destroy = async (movie: Movie): Promise<void> => {
  await movieRepo.remove(movie);
};

export default { create, read, partialUpdate, destroy };
