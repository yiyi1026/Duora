## Component Hierarchy


**App**
- Header
- Main

  **HeaderContainer**
  - Header
   - HeaderAskForm

    **HeaderAskFormContainer**
       - AskaQuestion
       - SearchQuestion

  **MainContainer**
   - Sidebar
   - QuestionIndex

    **SideBarContainer**
     - Feeds
     - Topics

   **TopicContainer**
    - TopicName

**QuestionIndexContainer**
  - QuestionIndexItem

**QuestionsDetailContainer**
- QuestionDetail
- Answers
+ Comments

**All Forms**

  **AuthFormContainer**
  - AuthForm

  **QuestionContainer**
   - QuestionForm

  **AnswerContainer**
   - AnswerForm

  **CommentContainer**
  - CommentForm

  **AnswersIndexContainer**
    - AnswerItem
      +Comments



## Routes

|Path                                                             | Component                   |
|-----------------------------------------------------------------|-----------------------------|
| "/"                                                             | "App"                       |
| "/signup"                                                       | "AuthFormContainer"         |
| "/signin"                                                       | "AuthFormContainer"         |
| "/users/:userId"  (bonus)                                       | "UserViewContainer"         |
| "/questions/:questionId"                                        | "QuestionViewContainer"     |
| "/new-question"                                                 | "AskaQuestion"              |
