{
  currentUser: {
    id: 1,
    username: "app-academy",
    asked_questions: {[]},
    answers: {[]},
    subscribed_topics: {[]}
  },
  forms: {
    AuthForm:{
      signUpForm: {errors: []},
      signInForm: {errors: []}
    }
    AskQuestionForm: {errors: ["body can't be blank"]},
    AnswerForm: {errors: ["body can't be blank"]},
    CommentForm: {errors: ["body can't be blank"]}    
  },
  topics: {[]},
  questions: {
    5: {
      id: 5,
      title: "title",
      body: "body",
      authorId: 1
    }
  }
  answers: {
    4: {
      id: 4,
      questionId: 1,
      body: "body",
      authorId: 2
    }
  },
  comments: {
    7: {
      id: 7,
      questionId: 1,
      body: "body",
      authorId: 2
    }
  }
}
