# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Topic.delete_all
Question.delete_all
Answer.delete_all
Comment.delete_all


#guest = {user:{username: 'guest', email: 'guest@guest.com', password:'123456'}}
guest1 = User.create!({username: 'Mario', email: 'guest1@guest.com', password: 'guest1', description: 'the princess saver', avatar: 'user_1.png'})
guest2 = User.create!({username: 'Deadpool', email: 'guest2@guest.com', password: 'guest2', description: 'Bad Deadpool... Good Deadpool!', avatar: 'user_2.png'})
guest3 = User.create!({username: 'TheBigBoo', email: 'guest3@guest.com', password: 'guest3', description: "I don't feel any different", avatar: 'user_3.png'})
guest4 = User.create!({username: 'Bowser', email: 'guest4@guest.com', password: 'guest4', description: 'Hear me! I will kidnap Peach OVER and OVER until I pull it off!', avatar: 'user_4.png'})
guest5 = User.create!({username: 'FlyMan', email: 'guest5@guest.com', password: 'guest5', description: 'Help me...', avatar: 'user_5.png'})
guest6 = User.create!({username: 'Goomba', email: 'guest6@guest.com', password: 'guest6', description: 'Seriously, I am not a hazelnut', avatar: 'user_6.png'})
guest7 = User.create!({username: 'Aiming', email: 'guest7@guest.com', password: 'guest7', description: "I am a bird, I can fly.", avatar: 'user_7.png'})
guest8 = User.create!({username: 'Bomber', email: 'guest8@guest.com', password: 'guest8', description: 'Boooooom~', avatar: 'user_8.png'})
guest9 = User.create!({username: 'Maskman', email: 'guest9@guest.com', password: 'guest9', description: 'Go Hulk Go!', avatar: 'user_9.png'})


topic1 = Topic.create!({name:'Time Travel'})
topic2 = Topic.create!({name:'Physics'})
topic3 = Topic.create!({name:'Music'})
# topic4 = Topic.create!({name:'Art'})
# topic5 = Topic.create!({name:'Movie'})

question1 = Question.create!({title: 'quesTitle1', body: 'quesBody1', author_id: guest3.id, topic_id: topic1.id})
question2 = Question.create!({title: 'quesTitle2', body: 'quesBody2', author_id: guest1.id, topic_id: topic2.id})
question3 = Question.create!({title: 'quesTitle3', body: 'quesBody3', author_id: guest2.id, topic_id: topic3.id})

answer1 = Answer.create!({body:'answer1bodytoquestion2', author_id: guest2.id, question_id: question1.id})
answer2 = Answer.create!({body:'answer2bodytoquestion1', author_id: guest3.id, question_id: question2.id})
answer3 = Answer.create!({body:'answer3bodytoquestion3', author_id: guest1.id, question_id: question3.id})
answer4 = Answer.create!({body:'answer4bodytoquestion3', author_id: guest2.id, question_id: question1.id})


comment1 = Comment.create!({body: 'commentbody1', answer_id: answer1.id, author_id: guest1.id})
comment2 = Comment.create!({body: 'commentbody1', answer_id: answer3.id, author_id: guest2.id})
comment3 = Comment.create!({body: 'commentbody1', answer_id: answer2.id, author_id: guest3.id})
