json.extract! question,:id,  :title, :body, :author_id, :author, :answers

# questions.each do |question|
#   json.extract! question,:id,  :title, :body, :author_id, :author, :answers
# end
# json.answers do
#   json.partial! 'api/answers/answer', collection: question.answers, as: :answer
# json.answers question.answersIds

# json.answers
