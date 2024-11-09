# データベース設計

- [dbdocs](https://dbdocs.io/shtk0llq/codia)
- [dbdiagram](https://dbdiagram.io/d/codia-66efc5aca0828f8aa6a1ee3f)

## テーブル定義書

### users

| COLUMN            | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------------- | --------- | ------- | ------- | -------- | -------------- |
| id                | BIGINT    | PRIMARY |         | o        | o              |
| name              | VARCHAR   |         |         | o        |                |
| email             | VARCHAR   | UNIQUE  |         | o        |                |
| icon              | VARCHAR   |         |         |          |                |
| email_verified_at | TIMESTAMP |         |         |          |                |
| password          | VARCHAR   |         |         |          |                |
| remember_token    | VARCHAR   |         |         |          |                |
| created_at        | TIMESTAMP |         | NOW     | o        |                |
| updated_at        | TIMESTAMP |         | NOW     | o        |                |

---

### personal_access_tokens

| COLUMN         | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| -------------- | --------- | ------- | ------- | -------- | -------------- |
| id             | BIGINT    | PRIMARY |         | o        | o              |
| tokenable_type | VARCHAR   |         |         | o        |                |
| tokenable_id   | BIGINT    |         |         | o        |                |
| name           | VARCHAR   |         |         | o        |                |
| token          | VARCHAR   | UNIQUE  |         | o        |                |
| abilities      | TEXT      |         |         |          |                |
| last_used_at   | TIMESTAMP |         |         |          |                |
| expires_at     | TIMESTAMP |         |         |          |                |
| created_at     | TIMESTAMP |         | NOW     | o        |                |
| updated_at     | TIMESTAMP |         | NOW     | o        |                |

---

### providers

| COLUMN        | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ------------- | --------- | ------- | ------- | -------- | -------------- |
| id            | BIGINT    | PRIMARY |         | o        | o              |
| user_id       | BIGINT    | FOREGIN |         | o        |                |
| provider_name | VARCHAR   |         |         | o        |                |
| provider_id   | VARCHAR   |         |         | o        |                |
| access_token  | VARCHAR   |         |         | o        |                |
| refresh_token | VARCHAR   |         |         |          |                |
| expires_at    | TIMESTAMP |         |         |          |                |
| created_at    | TIMESTAMP |         | NOW     | o        |                |
| updated_at    | TIMESTAMP |         | NOW     | o        |                |

---

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

### comments

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| content     | TEXT      |         |         | o        |                |
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

### best_answers

| COLUMN      | TYPE      | KEY             | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | --------------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY         |         | o        | o              |
| comment_id  | BIGINT    | FOREGIN         |         | o        |                |
| question_id | BIGINT    | UNIQUE, FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |                 | NOW     | o        |                |
| updated_at  | TIMESTAMP |                 | NOW     | o        |                |

---

### categories

| COLUMN     | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------- | --------- | ------- | ------- | -------- | -------------- |
| id         | BIGINT    | PRIMARY |         | o        | o              |
| name       | VARCHAR   |         |         | o        |                |
| created_at | TIMESTAMP |         | NOW     | o        |                |
| updated_at | TIMESTAMP |         | NOW     | o        |                |

---

### category_question

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| category_id | BIGINT    | FOREGIN |         | o        |                |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

CONSTRAINT pk_category_question PRIMARY KEY (category_id, question_id)

---

### likes

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| user_id     | BIGINT    | FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### views

| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| id          | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREGIN |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

## ER 図

![codia](https://github.com/user-attachments/assets/30947eb1-c1e7-438f-9f8c-baed445b4a60)
