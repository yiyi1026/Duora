# json.extract! topics, :email, :id, :username
json.extract! topic, :id, :name
json.questionsIds topic.questionsIds
json.questions topic.questions.each do |question|
  json.partial! "api/questions/question", question: question
  # json.topic topic
end
