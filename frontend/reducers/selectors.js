import {values} from 'lodash';

export const selectAllQuestions = (questions) => {
  if (questions && questions.allIds) {
    return questions.allIds.map(id => questions.byId[id]);
  } else {
    return [];
  }
};

export const selectSearchedQuestions = (questions) => {
  if (questions && questions.allIds) {
    return questions.allIds.map(id => questions.byId[id]);
  } else {
    return [];
  }
};

export const selectAllAnswers = (answers) => {
  if (answers && answers.allIds) {
    return answers.allIds.map(id => answers.byId[id]);
  } else {
    return [];
  }
};

export const selectSingleQuestion = (question) => {
  if (question && question.allIds) {
    return question.allIds.map(id => question.byId[id]);
  } else {
    return [];
  }
};

export const selectSingleAnswer = (answer) => {
  if (answer && answer.allIds) {
    return answer.allIds.map(id => answer.byId[id]);
  } else {
    return [];
  }
};

export const selectAllComments = (comments) => {
  if (comments && comments.allIds) {
    return comments.allIds.map(id => comments.byId[id]);
  } else {
    return [];
  }
};

export const CommentsByAnswerId = (comments, answerId) => {
  const commentsByAnswerId = [];
  if (!comments.allIds){
    return commentsByAnswerId;
  }
  comments.allIds.forEach(
    commentId => {
      const comment = comments.byId[commentId];
      if (comment.answer_id === answerId) {
        commentsByAnswerId.push(comment);
      }
    }
  );
  return commentsByAnswerId;
};

export const selectAllTopics = (topics) => {
  if (topics && topics.allIds) {
    return topics.allIds.map(id => topics.byId[id]);
  } else {
    return [];
  }
};
