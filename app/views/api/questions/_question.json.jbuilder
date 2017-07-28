# json.question do
#   json.id question.id
#   json.title question.title
#   json.body question.body
#   json.answersIds question.answers do |answer|
#     json.id answer.id
#   end
# end

json.extract! question, :id, :title, :body, :created_at, :updated_at
# json.extract! answer, question.answer
#

json.author do
  json.extract! question.author, :id, :username, :description, :avatar
end

json.answersIds question.answersIds
json.topicsIds question.topicsIds
