export interface Question {
  id: number;
  title: string;
  content: string;
  is_resolved: boolean;
  categories: Category[];
  comments_count: number;
  likes_count: number;
  views_count: number
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
}
