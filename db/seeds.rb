# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

#guest = {user:{username: 'guest', email: 'guest@guest.com', password:'123456'}}
guest1 = User.create!({username: 'guest1', email: 'guest1@guest.com', password:'guest1'})
guest2 = User.create!({username: 'guest2', email: 'guest2@guest.com', password:'guest2'})
guest3 = User.create!({username: 'guest3', email: 'guest3@guest.com', password:'guest3'})


question1 = Question.create!({title: 'quesTitle1', body: 'quesBody1', author_id: guest3.id})
question2 = Question.create!({title: 'quesTitle2', body: 'quesBody2', author_id: guest1.id})
question3 = Question.create!({title: 'quesTitle3', body: 'quesBody3', author_id: guest2.id})
