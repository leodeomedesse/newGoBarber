class AppError {
  public readonly message: string;

  public readonly estatusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.estatusCode = statusCode;
  }
}

export default AppError;
