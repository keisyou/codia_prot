export interface Comment {
  id: number;
  question_id: number;
  content: string;
  replies: Reply[];
  created_at: string;
  updated_at: string;
}

export interface Reply {
  id: number;
  comment_id: number;
  content: string;
  created_at: string;
  updated_at: string;
}
