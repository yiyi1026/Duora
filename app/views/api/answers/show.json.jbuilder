json.partial! "api/answers/answer", answer: @answer

json.comments @answer.comments do |comment|
  json.extract! comment, :id, :body, :author_id
  json.author comment.author, :id, :username, :description, :avatar
end
