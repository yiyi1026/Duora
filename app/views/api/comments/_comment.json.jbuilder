json.extract! comment, :id, :answer_id, :updated_at, :body
# json.answer do
#   json.extract! comment.answer, :body, :updated_at
# end
json.author do
  json.extract! comment.author, :id, :username, :email, :description, :avatar
end

json.answer_id comment.answer.id
