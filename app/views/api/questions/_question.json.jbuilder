# json.question do
#   json.id question.id
#   json.title question.title
#   json.body question.body
#   json.answersIds question.answers do |answer|
#     json.id answer.id
#   end
# end

# json.question_author do
#   json.extract! question.author, :id, :username, :description, :avatar, :description
# end

#question nested in byId

json.question do
  json.id question.id
  json.title question.title
  json.body question.body
  # json.topic_id question.topic_id
  json.topic question.topic, :name, :id
  json.author question.author, :id, :username, :avatar, :description
  json.answersIds question.answers do |answer|
    json.id answer.id
  end
end
