json.extract! answer, :id, :body, :question_id, :author_id, :updated_at, :created_at

json.author do
  json.extract! answer.author, :id, :username, :email, :description, :avatar
end
