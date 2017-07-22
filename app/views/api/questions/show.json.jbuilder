# json.set! question
#   json.partial! "api/questions/question", question: @question
# end
  json.partial! "api/questions/question", question: @question

# json.name @question.name

# json.answers @question.answers do |answer|
#   json.body answer.body
#   # json.comments answer.comments, :body
# end
