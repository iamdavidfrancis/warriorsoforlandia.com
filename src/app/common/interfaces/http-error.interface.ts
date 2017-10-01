
export interface HttpError {
  status: number;
  title: string;
  message: string;
  originalError: Error;
}
