# json.set! question
#   json.partial! "api/questions/question", question: @question
# end
json.partial! "api/questions/question", question: @question

# json.answers do
  # json.array! question.answers, :id, :author_id, :body
  # json.answer do
  json.answers @question.answers do |answer|
    # json.(answer, :id, :body)
    # json.id answer.id
    # json.body answer.body
    # json.(answer, :id, :body, :author_id)
    json.extract! answer, :id, :body, :author_id
    json.author answer.author, :id, :username, :description, :avatar
  end
# end
# json.name @question.name

# json.answers @question.answers do |answer|
#   json.body answer.body
#   # json.comments answer.comments, :body
# end
