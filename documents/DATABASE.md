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
| views       | BIGINT    |         | 0       | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### comments

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| content     | TEXT      |         |         | o        |                |
| is_best     | BOOLEAN   |         | FALSE   | o        |                |
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
| id          | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| category_id | BIGINT    | FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

## ER 図


