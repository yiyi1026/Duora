json.extract! comment, :id, :answer_id, :updated_at
json.question do
  json.extract! comment.answer.question, :id, :title, :body, :updated_at
end
json.author do
  json.extract! comment.author, :id, :username, :email, :description, :avatar
end
