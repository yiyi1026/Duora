# json.answer do
#   json.id answer.id
#   json.body answer.body
#   json.question_id answer.question_id
#   json.created_at answer.created_at
#   json.author answer.author, :id, :username, :avatar, :description
#   json.commentsIds answer.comments do |comment|
#     json.id comment.id
#   end
# end

json.extract! answer, :id, :body, :question_id, :updated_at, :created_at

json.author do
  json.extract! answer.author, :id, :username, :email, :description, :avatar
end
# json.comments answer.comments do |comment|
# end
