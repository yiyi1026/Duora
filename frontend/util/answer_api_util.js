export const fetchAnswersByQuestionId = (question_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/answers?question_id=${question_id}`,
  })
);

export const fetchSingleAnswer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/answers/${id}`
  })
);

export const createAnswer = answer => (
  $.ajax({
    method: 'POST',
    url: '/api/answers/',
    data: { answer }
  })
);

export const updateAnswer = answer => (
  $.ajax({
    method: 'PATCH',
    url: `/api/answers/${answer.id}`,
    data:
      { answer }
  })
);

export const deleteAnswer = answer => (
  $.ajax({
    method: 'DELETE',
    url: `/api/answers/${answer.id}`
  })
);
