```{
  session: {
    currentUser: {
      id: 'userId1',
      username: 'app-academy',
      email: abc@gmail.com,
      subscribed_topics: {[]}
    },
    errors:[]
  }
  forms: {
    AuthForm:{
      signUpForm: {errors: []},
      signInForm: {errors: []}
    }
    AskQuestionForm: {errors: ['body can't be blank']},
    AnswerForm: {errors: ['body can't be blank']},
    CommentForm: {errors: ['body can't be blank']}    
  },
  topics: {
    'topicId1': {
      id: 'topicId1',
      name: 'maths'
    },
    'topicId4': {
      id: 'topicId4',
      name: 'ruby'
    }
  },
  questions: {
    byId: {      
      'questionId5': {
        id: 'questionId5',
        title: 'title5',
        body: 'body5',
        author_Id: 'authorId1',
        answerIds:['answerId1', 'answerId9']
      },
      'questionId9': {
        id: 'questionId9',
        title: 'title9',
        body: 'body9',
        author_Id: 'authorId2',
        answerIds:['answerId6', 'answerId4'],
      }
    },
    allIds: ['questionId5','questionId9'],
    popularityIds: ['questionId9','questionId5']
  },
  answers: {
    byId: {
      'answerId1': {
        id: 'answerId1',
        body: 'answerId1body',
        author_Id: 'authorId1',
        commentsIds: ['commentId1', 'commentId10']
      },
      'answerId7': {
        id: 'answerId7',
        body: 'answerId7body',
        author_Id: 'authorId4'
      }

    },
    popularityIds: ['answerId1', 'answerId5']
  },
  comments: {
    byId: {    
      'commentId1': {
        id: 'commentId1',
        body: 'body',
        author_Id: 'authorId4'
      }
    }
  }
  users: {
    byId: {      
      'userId1': {
        id: 'userId1',
        username: 'Someone',
        email: 'abc@gmail.com',
        subscribed_topics: {[]}
      },
      'userId6': {
        id: 'userId6',
        username: 'Another',
        email: 'xyz@gmail.com',
        subscribed_topics: {[]}
      }
    }
  }
}```
