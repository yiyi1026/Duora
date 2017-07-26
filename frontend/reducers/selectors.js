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
    return questions.allIds.map(id => {
      if (id) {
        return questions.byId[id];
      }});
      return '';
  } else {
    return [];
  }
};

export const selectAllAnswers = (answers) => {
  console.log(answers);
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


// export const selectSingleQuestion = (questions) =>{
//   console.log(questions);
//   return questions.allIds.map(id => questions.byId[id]);
// };
//
// export const selectVisibleQuestions = (state, filter) => {
//   const allQuestions = selectAllQuestions(state);
//   switch(filter) {
//     case ALL:
//       return allQuestions;
//     default:
//       throw new Error(`Unknow filter ${filter}.`);
//   }
// };
