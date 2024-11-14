import { Category } from "./category";

export interface Question {
  id: number;
  title: string;
  content: string;
  is_resolved: boolean;
  comments_count: number;
  likes_count: number;
  views_count: number;
  categories: Category[];
  created_at: string;
  updated_at: string;
}
