# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user
<!-- - `PATCH /api/users` -->
- `GET /api/users/:id` - show user profile(bonus part)

### Session

- `POST /api/session` - user login
- `DELETE /api/session` - user logout

### Questions

- `GET /api/questions` - questions index/search
  - accepts `topic_name` query param to list questions by topic
  <!-- - accepts pagination params (if I get there) -->
- `POST /api/questions` - create a new question
- `GET /api/questions/:id` - show a specific question
- `PATCH /api/questions/:id` - update a specific question
- `DELETE /api/questions/:id` - delete a specific question

### Answers

- `GET /api/questions/:questionId/answers` - show all answers(index) to a specific question
- `POST /api/questions/:questionId/answers` - create a new answer to a specific question
- `GET /api/questions/:questionId/answers/:answerId` - show a specific answer for a specific question
- `DELETE /api/questions/:questionId/answers/:answerId` - delete a specific answer for a specific question
- `PATCH /api/questions/:questionId/answers/:answerId` - update a specific answer for a specific question

### Comments

- `POST /api/questions/:questionId/answers/:answerId/comments` - create a new comment for a specific answer
- `GET /api/questions/:questionId/answers/:answerId/comments/` - show all comments for a specific answer

### Topics

- A question's topics will be included in the question show template
- `GET /api/topics`
  - includes query param for typeahead suggestions (when creating the question???)
- `POST /api/questions/:question_id/topics`: add topic to question by name
  - if question doesn't already exist, it will be created
- `DELETE /api/questions/:question_id/topics/:topic_name`: remove topic from question by name
