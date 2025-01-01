export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T | null;
}

export const createApiResponse = <T>(
  data: T | null = null,
  message: string = 'success',
  code: number = 200
): ApiResponse<T> => {
  return {
    code,
    message,
    data
  }
}
