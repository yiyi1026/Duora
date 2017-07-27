export const fetchSingleComment = id => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`
  })
);
// export const fetchAllComments
// export const searchComments = query => ($.ajax({method: 'GET', url: `/api/comments?query=${query}`}));

export const fetchCommentsByAnswerId = (answer_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments?answer_id=${answer_id}`,
  })
);

export const createComment = (comment) => (
  $.ajax({
    method: 'POST',
    url: '/api/comments/',
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
);

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`
  })
);
