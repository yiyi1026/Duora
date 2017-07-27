import {values} from 'lodash';

export const selectAllQuestions = (questions) => {
  if (questions && questions.allIds) {
    console.log(questions);
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
  console.log(answers);
  if (answers && answers.allIds) {
    console.log(answers.allIds.map(id => answers.byId[id]));
    return answers.allIds.map(id => answers.byId[id]);
  } else {
    return [];
  }
};

export const selectSingleQuestion = (question) => {
  console.log('selector');
  console.log(question);
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
  // console.log(comments);
  if (comments && comments.allIds) {
    console.log(comments.allIds.map(id => comments.byId[id]));
    return comments.allIds.map(id => comments.byId[id]);
  } else {
    return [];
  }
};
