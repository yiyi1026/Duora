# 1. Select Technology 
 + ruby
 + javascript
 + sql
# 2. Library & Tools
 + rails
 + react
 + sqlite3 (progresql)
 + redux
 + jbuilder
 + jquery
 + etc..
# 3. Tables
 + user
   - id
   - username
   - password digest
   - session
   - self description
   - avatar
 + question
   - id
   - question title
   - question author (user.id)
   - question content
 + answer
   - id
   - answer author
   - answer content
 + vote
   - id
   - answer id 
   - up vote
   - down vote
 + (bonus of bonus) question_comment
   - id
   - question id
   - comment author
   - comment content
 + answer_comment
   - id
   - answer id
   - comment author
   - comment content
 + topic
   - id
   - topic name
   - (bonus of bonus) parent topic id
 + (bonus) comment_reply 
   - id
   - comment id
   - reply author
   - reply content
 + join tables
    - tagging (question and topic)
    - (bonus of bonus) follow_question (question and user)
    - (bonus of bonus) follow_user (user and user)

# 4. models
  **TODO**

# 5. data model UML diagram
   **TODO**

# 6. pages
 + sign up
 + sign in
 + home page (listing questions)
 + search questions
 + question page (listing answers)
 + answer page (listing comments)
 + submit question page
 + submit answer page
 + submit comment page
 + submit reply page
 + list questions by tag page
 + user profile page
 + etc...

# 7. setup and deploy on heroku
 + investigate
 + setup
 + deploy

# 8. progress proposal
 + day 1
   - setup project
   - setup data model
   - signup signin page
 + day 2
   - input widget
   - question pages
 + day 3
   - continue question pages
   - answer pages
 + day 4
   - comment/reply pages
 + day 5
   - voting
 + day 6
   - tagging
 + day 7
   - search questions / list by tagging
 + day 8
   - css style tuning
 + day 9
   - css style tuning
 + day 10
   - css style tuning
 + day 11
   - deploy on heroku