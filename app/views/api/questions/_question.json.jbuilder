# json.question do
#   json.id question.id
#   json.title question.title
#   json.body question.body
#   json.answersIds question.answers do |answer|
#     json.id answer.id
#   end
# end

json.extract! question, :id, :title, :body
# json.extract! answer, question.answer
#
json.topic do
  json.extract! question.topic, :id, :name
end
json.author do
  json.extract! question.author, :id, :username, :description, :avatar
end

json.answers do
  json.partial! 'api/answers/answer', collection: question.answers, as: :answer
end

# json.question do
#   json.answersIds question.answers do |answer|
#     json.id answer.id
#   end
# end
#
# end
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
