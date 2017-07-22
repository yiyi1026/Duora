# json.set! question
#   json.partial! "api/questions/question", question: @question
# end
json.partial! "api/questions/question", question: @question

json.answers @question.answers do |answer|
  json.extract! answer, :id, :body, :author_id
  json.author answer.author, :id, :username, :description, :avatar
end



#{answers:{byId:[{id:1,..},{id:2,...}]}}
# json.answers do
#   json.byId @question.answers do |answer|
#     json.extract! answer, :id, :body, :author_id
#     json.author answer.author, :id, :username, :description, :avatar
#   end
# end
