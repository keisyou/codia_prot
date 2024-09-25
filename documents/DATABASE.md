# データベース設計

- [dbdocs](https://dbdocs.io/shtk0llq/codia)
- [dbdiagram](https://dbdiagram.io/d/codia-66efc5aca0828f8aa6a1ee3f)

## テーブル定義書

### questions

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| title       | VARCHAR   |         |         | o        |                |
| content     | TEXT      |         |         | o        |                |
| is_resolved | BOOLEAN   |         | FALSE   | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### views

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| user_id     | BIGINT    | FOREGIN |         | o        |                |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### comments

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| content     | TEXT      |         |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### bestanswers

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| comment_id  | BIGINT    | FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### replies

| COLUMN     | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------- | --------- | ------- | ------- | -------- | -------------- |
| id         | BIGINT    | PRIMARY |         | o        | o              |
| comment_id | BIGINT    | FOREIGN |         | o        |                |
| content    | TEXT      |         |         | o        |                |
| created_at | TIMESTAMP |         | NOW     | o        |                |
| updated_at | TIMESTAMP |         | NOW     | o        |                |

---

### categories

| COLUMN     | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------- | --------- | ------- | ------- | -------- | -------------- |
| id         | BIGINT    | PRIMARY |         | o        | o              |
| name       | VARCHAR   |         |         | o        |                |
| created_at | TIMESTAMP |         | NOW     | o        |                |
| updated_at | TIMESTAMP |         | NOW     | o        |                |

---

### questions_categories

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| category_id | BIGINT    | FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

CONSTRAINT pk_question_category PRIMARY KEY (question_id, category_id)

## ER 図

![codia](https://github.com/user-attachments/assets/7703fe8e-f92c-437e-90e4-b5ed76230ac9)
