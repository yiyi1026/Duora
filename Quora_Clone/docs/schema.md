# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | string    |
author_id   | integer   | not null, foreign key (references users), indexed

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
answer_id   | integer   | not null, foreign key (references answers), indexed
author_id   | integer   | not null, foreign key (references users), indexed


## asked_questions (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
author_id          | string    | not null, foreign key (references users), indexed
question_id        | string    | not null, foreign key (references questions), indexed

## user_answers (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
user_id            | string    | not null, foreign key (references users), indexed
answer_id          | string    | not null, foreign key (references answers), indexed

## user_subscribed_topics (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
user_id            | string    | not null, foreign key (references users), indexed
topic_id           | string    | not null, foreign key (references topics), indexed


## topic_questions (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
topic_id           | string    | not null, foreign key (references topics), indexed
question_id        | string    | not null, foreign key (references questions), indexed

## question_answers (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
question_id        | string    | not null, foreign key (references questions), indexed
answer_id          | string    | not null, foreign key (references answers), indexed

## answer_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
answer_id   | integer   | not null, foreign key (references answers), indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
