import {values} from 'lodash';
// export const selectAllQuestions = (questions) => values(questions)
//Is this right????
// export const selectSingleQuestion = ({question}) => values(question)
const ALL = 'ALL';

export const selectAllQuestions = (questions) =>{
  if(questions && questions.allIds){
    console.log(questions)
    return questions.allIds.map(id => questions.byId[id]);
  } else{
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
