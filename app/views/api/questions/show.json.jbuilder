# json.set! question
#   json.partial! "api/questions/question", question: @question
# end

json.partial! "api/questions/question", question: @question

# json.answers @question.answers do |answer|
#   json.extract! answer, :id, :body, :author_id, :updated_at
#   json.author answer.author, :id, :username, :description, :avatar
#   json.comments answer.comments, :id, :body
# end
#
#
# json.question do
#   json.id question.id
#   json.title question.title
#   json.body question.body
#   # json.topic_id question.topic_id
#   json.topic question.topic, :name, :id
#   json.author question.author, :id, :username, :avatar, :description
#   json.answersIds question.answers do |answer|
#     json.id answer.id
#   end
#
# end
