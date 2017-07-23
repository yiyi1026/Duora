# json.questions do
#   json.array! @questions do |question|
#     json.partial! "api/questions/question", question: question
#     json.answers question.answers do |answer|
#       json.extract! answer, :id, :body, :author_id
#       json.author answer.author, :id, :username, :description, :avatar
#     end
#   end
# end


json.questions do
  json.array! @questions do |question|
    # json.partial! "api/questions/question", question: question
    json.id question.id
    json.title question.title
    json.body question.body
    json.author question.author, :id, :username, :avatar, :description
    json.answers question.answers do |answer|
      json.extract! answer, :id, :body, :author_id
      json.author answer.author, :id, :username, :description, :avatar
    end
  end
end
# @questions.each do |question|
#   json.set! question.id do
#     json.partial! 'answer', answer: question.answers
#   end
# end
