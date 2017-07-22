# json.extract! question,:id,  :title, :body, :author_id, :author, :answers

# questions.each do |question|
#   json.extract! question,:id,  :title, :body, :author_id, :author, :answers
# end
# json.answers do
#   json.partial! 'api/answers/answer', collection: question.answers, as: :answer
# json.answers question.answersIds

# json.answers
json.question do
  json.id question.id
  json.title question.title
  json.body question.body
end

json.question_author do
  json.extract! question.author, :id, :username, :description, :avatar, :description
end

json.question_answers do
  json.array! question.answers
    # json.partial! "api/answers/answer", answer: @answer
  # end

end
  # do
  #   json.extract! question.author, :id, :username, :avatar, :description
# end
  # json.answers question.answers do |answer|
  #   j.author_id do
  #     json.author_id answer.author_id
  #     json.body answer.body
  #   end
  # end
# end
