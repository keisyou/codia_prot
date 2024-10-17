export interface FetchApiProps {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  url: string;
  [key: string]: any;
}
