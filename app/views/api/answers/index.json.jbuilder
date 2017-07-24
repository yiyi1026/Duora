json.answers do
  json.array! @answers do |answer|
    # json.partial! "api/answers/answer", answer: answer
    json.id answer.id
    json.title answer.title
    json.body answer.body
    json.created_at answer.created_at
    json.author answer.author, :id, :username, :avatar, :description
    json.comments answer.comments do |comment|
      json.extract! comment, :id, :body, :author_id
      json.author comment.author, :id, :username, :description, :avatar
    end
  end
end
