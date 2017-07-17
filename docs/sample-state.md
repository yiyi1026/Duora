{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy",
      email: abc@gmail.com,
      asked_questions: {[]},
      answers: {[]},
      subscribed_topics: {[]}
    },
    errors:[]
  }
  forms: {
    AuthForm:{
      signUpForm: {errors: []},
      signInForm: {errors: []}
    }
    AskQuestionForm: {errors: ["body can't be blank"]},
    AnswerForm: {errors: ["body can't be blank"]},
    CommentForm: {errors: ["body can't be blank"]}    
  },
  topics: {
    1: {
      id: 1,
      name: "maths"
    },
    4: {
      id: 4,
      name: 'ruby'
    }
  },
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
  users: {
    user1: {
      id: 1,
      username: "Someone",
      asked_questions: {[]},
      answers: {[]},
      subscribed_topics: {[]}
    },
    user2: {
      id: 1,
      username: "Someone",
      asked_questions: {[]},
      answers: {[]},
      subscribed_topics: {[]}
    }
  }
}
