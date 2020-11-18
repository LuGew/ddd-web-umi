export interface HttpRequest {

  get(data: Object, success: (...parameters: any[]) => void, error: () => void): void;

  post(data: Object, success: (...parameters: any[]) => void, error: () => void): void;

  request(httpMethod: HttpMethod, data: Object, success: (...parameters: any[]) => void, error: () => void): void;
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}
