# json.extract! topics, :email, :id, :username
json.extract! topic, :id, :name
json.questionsIds topic.questionsIds
