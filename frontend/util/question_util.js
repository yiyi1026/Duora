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

//fetch questions for one specific topic
export const fetchQuestions = (topic_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/topics/${topic_id}/questions`
  });
}

export const createQuestion = question => (
  $.ajax({
    method: 'POST',
    url: '/api/questions',
    data: { question }
  })
);

//for edit question
export const updatequestion = question => (
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
