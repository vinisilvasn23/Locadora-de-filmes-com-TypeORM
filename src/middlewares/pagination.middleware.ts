import { NextFunction, Request, Response } from "express";
import { PaginationParams } from "../interfaces";

export const pagination = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const queryPage: number = Number(req.query.page);
  const queryPerPage: number = Number(req.query.perPage);

  const page: number = queryPage > 0 ? queryPage : 1;
  const perPage: number =
    queryPerPage > 0 && queryPerPage <= 5 ? queryPerPage : 5;

  const baseUrl: string = "http://localhost:3000/movies";
  const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
  const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;

  const querySort: any = req.query.sort;
  const queryOrder: any = req.query.order;

  const orderOpts: string[] = ["asc", "desc"];
  const sortOpts: string[] = ["price", "duration"];

  let sort: string = sortOpts.includes(querySort) ? querySort : "id";
  let order: string = orderOpts.includes(queryOrder) ? queryOrder : "asc";

  if (!querySort) {
    order = "asc";
  }

  const pagination: PaginationParams = {
    page: (page - 1) * perPage,
    perPage,
    order,
    sort,
    prevPage,
    nextPage,
  };

  res.locals.pagination = pagination;

  return next();
};
