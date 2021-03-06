# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed
email           | string    | not null, indexed, unique
description     | string    |
avatar          | string    |
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
body        | text      |
author_id   | integer   | not null, foreign key (references users), indexed

## topics_questions(JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
topic_id           | integer   | not null, foreign key (references topics), indexed
question_id        | integer   | not null, foreign key (references questions), indexed

## answers
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
body               | text      | not null
question_id        | integer   | not null, foreign key (references questions), indexed
author_id          | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
answer_id   | integer   | not null, foreign key (references questions), indexed

## user_subscribed_topics(JOIN table)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
topic_id        | integer   | not null, foreign key (references topics), indexed
