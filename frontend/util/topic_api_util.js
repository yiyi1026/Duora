export const fetchAllTopics = () => (
  $.ajax({
    method: 'GET',
    url: '/api/topics',
  })
);

export const fetchSingleTopic = id => (
  $.ajax({
    method: 'GET',
    url: `/api/topics/${id}`,
  })
);

export const searchTopics = query => (
  $.ajax({
    method: 'GET',
    url: `/api/topics?query=${query}`,
  })
);

export const createTopic = topic => (
  $.ajax({
    method: 'POST',
    url: '/api/topics',
    data: { topic }
  })
);

export const updateTopic = topic => (
  $.ajax({
    method: 'PATCH',
    url: `/api/topics/${topic.id}`,
    data: { topic }
  })
)

export const deleteTopic = topic => (
  $.ajax({
    method: 'DELETE',
    url: `/api/topics/${topic.id}`
  })
)
