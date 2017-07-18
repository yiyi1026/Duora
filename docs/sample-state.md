```
{
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
        author_id: 'authorId1',
        answerIds:['answerId1', 'answerId9']
      },
      'questionId9': {
        id: 'questionId9',
        title: 'title9',
        body: 'body9',
        author_id: 'authorId2',
        answerIds:['answerId6', 'answerId4'],
      }
    },
    allIds: ['questionId5','questionId9'],
    popularityIds: ['questionId9','questionId5']
  },
  topic_question: {
    byId: {
      'join1': {
        id: 'join1',
        topic_id: 'topicId1',
        question_id: 'questionId9'
      },
      'join3': {
        id: 'join3',
        topic_id: 'topicId5',
        question_id: 'questionId7'
      }
    },
    allIds: ['join1', 'join3'],
    popularityIds: ['join3', 'join1']
  }
  answers: {
    byId: {
      'answerId1': {
        id: 'answerId1',
        body: 'answerId1body',
        author_id: 'authorId1',
        commentsIds: ['commentId1', 'commentId10']
      },
      'answerId7': {
        id: 'answerId7',
        body: 'answerId7body',
        author_id: 'authorId4'
      }

    },
    allIds: ['answerId5', 'answerId7'],
    popularityIds: ['answerId1', 'answerId5']
  },
  comments: {
    byId: {    
      'commentId1': {
        id: 'commentId1',
        body: 'body',
        author_id: 'authorId4'
      }
    },
    allIds: ['commentId1']
  }
  users: {
    byId: {      
      'userId1': {
        id: 'userId1',
        username: 'Someone',
        email: 'abc@gmail.com',
        topicsIds: {['topicId4']}
      },
      'userId6': {
        id: 'userId6',
        username: 'Another',
        email: 'xyz@gmail.com',
        topicsIds: {['topicId1']}
      }
    },
    allIds: ['userId6', 'userId1']
  }
}
```
