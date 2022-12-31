export const createError = (status: number, message: string) => {
  const err: any = new Error();
  err.status = status;
  err.message = message;
  return err;
};
