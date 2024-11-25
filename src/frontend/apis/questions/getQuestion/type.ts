export interface Question {
  id: number;
  title: string;
  content: string;
  is_resolved: boolean;
  created_at: string;
  updated_at: string;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
}
