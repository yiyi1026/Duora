# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Question.delete_all
Answer.delete_all

#guest = {user:{username: 'guest', email: 'guest@guest.com', password:'123456'}}
guest1 = User.create!({username: 'guest1', email: 'guest1@guest.com', password: 'guest1'})
guest2 = User.create!({username: 'guest2', email: 'guest2@guest.com', password: 'guest2'})
guest3 = User.create!({username: 'guest3', email: 'guest3@guest.com', password: 'guest3'})

answer1 = Answer.create!({body:'answer1bodytoquestion2', author_id: guest2.id})
answer2 = Answer.create!({body:'answer2bodytoquestion1', author_id: guest3.id})
answer3 = Answer.create!({body:'answer3bodytoquestion3', author_id: guest1.id})
answer4 = Answer.create!({body:'answer4bodytoquestion3', author_id: guest2.id})


question1 = Question.create!({title: 'quesTitle1', body: 'quesBody1', author_id: guest3.id, answersIds: [answer3.id]})
question2 = Question.create!({title: 'quesTitle2', body: 'quesBody2', author_id: guest1.id, answersIds: [answer1.id]})
question3 = Question.create!({title: 'quesTitle3', body: 'quesBody3', author_id: guest2.id, answersIds: [answer2.id, answer4.id]})
