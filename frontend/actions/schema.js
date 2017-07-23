imort { Schema, arrayOf } from 'normalizr';

export const question new Schema('question');
export const arrayOfQuestions = arrayOf(question);
