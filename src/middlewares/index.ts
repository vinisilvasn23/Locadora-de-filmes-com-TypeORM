import { handleErrors } from "./handleErrors.middleware";
import { pagination } from "./pagination.middleware";
import { verifyMovieExists } from "./verifyMovieExists.middleware";
import { validateBody } from "./validateBody.middleware";

export default {
  handleErrors,
  pagination,
  verifyMovieExists,
  validateBody,
};
