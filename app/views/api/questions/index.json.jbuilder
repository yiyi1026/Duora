# json.questions do
#   json.array! @questions do |question|
#     json.partial! "api/questions/question", question: question
#     json.answers question.answers do |answer|
#       json.extract! answer, :id, :body, :author_id
#       json.author answer.author, :id, :username, :description, :avatar
#     end
#   end
# end


@questions.each do |question|
  json.set! question.id do
    json.partial! 'question', question: question
  end
end
# @questions.each do |question|
#   json.set! question.id do
#     json.partial! 'answer', answer: question.answers
#   end
# end
