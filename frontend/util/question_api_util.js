export const fetchAllQuestions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/questions',
  })
);

export const fetchSingleQuestion = id => (
  $.ajax({
    method: 'GET',
    url: `/api/questions/${id}`,
  })
);

export const createQuestion = question => (
  $.ajax({
    method: 'POST',
    url: '/api/questions',
    data: { question }
  })
);

export const updateQuestion = question => (
  $.ajax({
    method: 'PATCH',
    url: `/api/questions/${question.id}`,
    data: { question }
  })
)

export const deleteQuestion = question => (
  $.ajax({
    method: 'DELETE',
    url: `/api/questions/${question.id}`
  })
)
