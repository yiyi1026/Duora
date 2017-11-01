# json.extract! user, :email, :id, :username, :avatar, :description, :topics
# only thing need is the subscribed topics id
# json.subscribed_topics user.subscribed_topics.pluck(:id)
  json.extract! user, :email, :id, :username, :avatar, :description
  json.topic user.topics, :name
