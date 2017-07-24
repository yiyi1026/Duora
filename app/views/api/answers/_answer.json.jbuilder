json.answer do
  json.id answer.id
  json.body answer.body
  json.author answer.author, :id, :username, :avatar, :description
  json.commentsIds answer.comments do |comment|
    json.id comment.id
  end
end
