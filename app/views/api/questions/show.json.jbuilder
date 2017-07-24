# json.set! question
#   json.partial! "api/questions/question", question: @question
# end
json.partial! "api/questions/question", question: @question

json.answers @question.answers do |answer|
  json.extract! answer, :id, :body, :author_id, :updated_at
  json.author answer.author, :id, :username, :description, :avatar
  json.comments answer.comments, :id, :body
end
