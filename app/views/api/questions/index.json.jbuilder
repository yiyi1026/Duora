json.array! @questions do |question|
  json.partial! 'api/questions/question', question: question
end

# @questions.each do |question|
#   json.set! question.id do
#     json.partial! 'answer', answer: question.answers
#   end
# end

# json.questions
  # json.array! @questions do |question|
    # json.partial! 'api/questions/question', questions: @questions
  # end
# end
