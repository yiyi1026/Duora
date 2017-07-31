# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Topic.delete_all
TopicTagging.delete_all
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
topic4 = Topic.create!({name:'Art'})
topic5 = Topic.create!({name:'Movie'})
topic6 = Topic.create!({name:'Computer Science'})
topic7 = Topic.create!({name:'Health'})
topic8 = Topic.create!({name:'Comic'})
topic9 = Topic.create!({name:'Travel'})
topic10 = Topic.create!({name:'Life'})
topic11 = Topic.create!({name:'Food'})
topic12 = Topic.create!({name:'Study'})


topic_tagging1 = TopicTagging.create!({topic_id: topic1.id, user_id: guest1.id})
topic_tagging2 = TopicTagging.create!({topic_id: topic2.id, user_id: guest3.id})
topic_tagging3 = TopicTagging.create!({topic_id: topic3.id, user_id: guest5.id})
topic_tagging4 = TopicTagging.create!({topic_id: topic5.id, user_id: guest2.id})
topic_tagging5 = TopicTagging.create!({topic_id: topic4.id, user_id: guest4.id})
topic_tagging6 = TopicTagging.create!({topic_id: topic4.id, user_id: guest6.id})
topic_tagging7 = TopicTagging.create!({topic_id: topic3.id, user_id: guest3.id})
topic_tagging8 = TopicTagging.create!({topic_id: topic1.id, user_id: guest2.id})
topic_tagging9 = TopicTagging.create!({topic_id: topic2.id, user_id: guest7.id})
topic_tagging10 = TopicTagging.create!({topic_id: topic1.id, user_id: guest6.id})
topic_tagging11 = TopicTagging.create!({topic_id: topic2.id, user_id: guest1.id})
topic_tagging12 = TopicTagging.create!({topic_id: topic1.id, user_id: guest8.id})
topic_tagging13 = TopicTagging.create!({topic_id: topic2.id, user_id: guest9.id})

question1 = Question.create!({title: 'Is there an honest evaluation out there to help me determine if I am cut out to be a programmer/developer?',  body: '', author_id: guest3.id, topic_id: topic6.id})
question2 = Question.create!({title: 'What does AI code look like?', body: '', author_id: guest1.id, topic_id: topic6.id})
question3 = Question.create!({title: 'How do I build a deep learning machine with $10k budget?', body: 'I could add extra $3K if necessary.
Answer Request', author_id: guest2.id, topic_id: topic6.id})
question4 = Question.create!({title: 'Am I an unqualified software developer if I know nothing about Linux, backend and scaling after working 6 years?', body: '', author_id: guest4.id, topic_id: topic6.id})
question5 = Question.create!({title: 'Is deep learning better than machine learning (statistical learning), even if its data set is small?', body: '', author_id: guest5.id, topic_id: topic6.id})

question6 = Question.create!({title: 'I accidentally ate 4 oz of pure pork fat, how bad is this for me?', body: '', author_id: guest6.id, topic_id: topic7.id})
question7 = Question.create!({title: "If I eat an egg and then eat sugar, will it all get registered as fat by my stomach?", body: '', author_id: guest5.id, topic_id: topic7.id})
question8 = Question.create!({title: 'What is your dream', body: '', author_id: guest1.id, topic_id: topic7.id})
question9 = Question.create!({title: 'What is the meaning of life?', body: '', author_id: guest1.id, topic_id: topic6.id})
question10 = Question.create!({title: 'What is it like to go to AppAcademy?', body: '', author_id: guest1.id, topic_id: topic6.id})
question11 = Question.create!({title: "Who is Captain America's girl friend?", body: '', author_id: guest2.id, topic_id: topic8.id})
question12 = Question.create!({title: 'How to you choose where to work?', body: '', author_id: guest3.id, topic_id: topic6.id})
question13 = Question.create!({title: 'What is the best place to travel?', body: '', author_id: guest3.id, topic_id: topic9.id})
question14 = Question.create!({title: 'Where do you want to go if you could time travel?', body: '', author_id: guest3.id, topic_id: topic1.id})
question15 = Question.create!({title: 'When is the best time to travel to Hawaii?', body: '', author_id: guest6.id, topic_id: topic9.id})
question16 = Question.create!({title: 'Which beach do you like most?', body: '', author_id: guest6.id, topic_id: topic9.id})
question17 = Question.create!({title: 'What is your way of learning coding?', body: '', author_id: guest6.id, topic_id: topic6.id})
question18 = Question.create!({title: 'Which is your favorite coding language?', body: '', author_id: guest7.id, topic_id: topic6.id})
question19 = Question.create!({title: 'Which song do you like most?', body: '', author_id: guest7.id, topic_id: topic3.id})
question20 = Question.create!({title: 'Why do you choose Apple products?', body: '', author_id: guest7.id, topic_id: topic10.id})
question21 = Question.create!({title: 'What is your favorite food?', body: '', author_id: guest7.id, topic_id: topic11.id})
question22 = Question.create!({title: "What is one website article you would recommend people to read?", body: '', author_id: guest7.id, topic_id: topic6.id})

question_topic_tagging1  = QuestionTopicTagging.create!({topic_id: topic1.id, question_id: question1.id})
question_topic_tagging2  = QuestionTopicTagging.create!({topic_id: topic2.id, question_id: question3.id})
question_topic_tagging3  = QuestionTopicTagging.create!({topic_id: topic3.id, question_id: question5.id})
question_topic_tagging4  = QuestionTopicTagging.create!({topic_id: topic5.id, question_id: question2.id})
question_topic_tagging5  = QuestionTopicTagging.create!({topic_id: topic4.id, question_id: question4.id})
question_topic_tagging6  = QuestionTopicTagging.create!({topic_id: topic11.id, question_id: question6.id})
question_topic_tagging7  = QuestionTopicTagging.create!({topic_id: topic7.id, question_id: question3.id})
question_topic_tagging8  = QuestionTopicTagging.create!({topic_id: topic6.id, question_id: question2.id})
question_topic_tagging9  = QuestionTopicTagging.create!({topic_id: topic2.id, question_id: question7.id})
question_topic_tagging10 = QuestionTopicTagging.create!({topic_id: topic8.id, question_id: question6.id})
question_topic_tagging11 = QuestionTopicTagging.create!({topic_id: topic9.id, question_id: question1.id})
question_topic_tagging12 = QuestionTopicTagging.create!({topic_id: topic10.id, question_id: question8.id})
question_topic_tagging13 = QuestionTopicTagging.create!({topic_id: topic12.id, question_id: question9.id})

answer1 = Answer.create!({body:"Software development is an extremely broad field. You can easily be highly qualified for one aspect of software development but highly unqualified for another. It’s important to learn the fundamentals and principles and then learn specifics as needed to address specific needs. Unfortunately, too many employers of software developers only judge them on application-specific knowledge and skills and, as a result, they only employ them for a few years and then they are obsolete.", author_id: guest2.id, question_id: question7.id})
answer2 = Answer.create!({body:'Why?', author_id: guest3.id, question_id: question1.id})
answer3 = Answer.create!({body:"It looks like a headache with countless notes on how it should or should not behave that will probably one day be erased and replaced because said code did not fulfill its function.
It also probably has a gigantic list of variables, depending on how complex it is and. Probably some unused variables that the programmer forgot about and/or multiple variables supposed to serve the same purpose but that got repeated as the. Programmer forgot about their existence.

Probably has a bunch of if statements inside if statements inside if statement inside if statement inside.....

Also has a bunch of statements turned into notes as the programmer thought he found a better solution and replaced it with another piece of code but wasn't quite sure if it worked and kept it around just in case and eventually forgot about it.It probably has a huge database attached to it somwhere.In short, AI looks like a pain in the bottom of the person who created it.", author_id: guest2.id, question_id: question2.id})
answer4 = Answer.create!({body:"i would suggest, you should checkout popular Machine Learning Service providers like:

Google Cloud
Amazon ML etc
These are popular providers who charge as you use with high end computing resources.Hope this helps.", author_id: guest5.id, question_id: question5.id})
answer5 = Answer.create!({body:"For small datasets (and in some circumstances also for larger ones) you might often be better off with Random Forests or the Bayesian equivalent, BART. Besides the error, deep networks might take hours to train whereas random forests are almost instantly trained. Bayesian trees usually work better than their frequentist counterpart but take much longer to train as they rely on MCMC sampling.", author_id: guest5.id, question_id: question5.id})
answer6 = Answer.create!({body:'Pure pork fat is LARD. Thick, white, greasy, just the thing for excellent pie pastry, but how on earth could you “accidentally” eat a quarter-pound (110 grams) of pure lard???

I am sure most dietitians would strongly recommend against making a daily habit of scarfing down a good handful of lard with its 900 kcal. But I am sure that once in an “accidental” while, perhaps on “sleep-eating” excursions, no great damage would be done.

[I do know of a young farm lad who was tempted by a bet that he couldn’t eat a pound of butter. (Lard and butter are both almost ‘pure” animal fats). He took up the challenge, and spent most of the afternoon in the privvy. Butter (and possibly lard) has a remarkable “loosening effect”.]

By the way, if this is the same person who a few days ago asked about “accidentally” eating raw chicken, I can hardly wait for the next accident to be reported…', author_id: guest1.id, question_id: question6.id})
answer7 = Answer.create!({body:"No, it will not. Fat, sugar, and protein are all perceived differently by your digestive system.

Fat, and fat alone, triggers the release of the hormone cholecystokinin, which both stimulates the release of bile and digestive enzymes and also suppresses hunger. In other words, when you eat a meal with a high fat content, you quickly feel “satiated” and lose your desire to eat more. The bile and digestive enzymes break down the fat and emulsify it, so that it can be absorbed into your bloodstream. It is then carried to the liver, which stores and processes it. Some of the fat you eat is broken down for energy, but much of it is used in the process of maintaining your body. Many hormones are derived from lipids and cholesterol, and in addition your body is constantly making new cells as part of the process of maintaining itself. All of these cells are built partly from lipids which are the main components of fat.

Sugar doesn’t need a whole lot of digestion, it gets absorbed into the bloodstream very quickly and easily. The feedback from your digestive system to your brain to tell it to stop eating sugar is much weaker, which is why you can eat a much larger amount of candy than you can of eggs. You never feel “full” from candy until either your stomach is physically full and starts to stretch, which triggers a different feedback mechanism using the hormone ghrelin, or until the insulin level in your blood rises quite a bit above its resting level.

In response to sugar consumption, your pancreas releases insulin, which triggers your body cells to increase their uptake of sugar from the blood. All of your body cells will use as much as they need for energy, and the liver converts some of the remainder into glycogen. If there is still more sugar coming in to the bloodstream from your digestive system than your body can use right now, your adipose cells will suck it up and turn it into fat. This is a survival reflex that we inherited from millions of generations of ancestors who faced periodic starvation, and we cannot avoid it now even though it serves us poorly in modern times. If you are in the habit of eating sugar every day, your body cells will eventually develop insulin resistance which means that they respond more poorly to insulin. Among other effects, this further weakens the satiety feedback response so that you need to eat even more sugar until you finally start to feel full.

Protein triggers an entirely different feedback mechanism, but as you didn’t ask about it I will leave it for another answer.", author_id: guest4.id, question_id: question7.id})
answer8 = Answer.create!({body:'<div class="inline_editor_content" id="__w2_CUiVwzp_content">   <span class="inline_editor_value">      <div id="RQnCji"></div>      <span class="rendered_qtext">         <p class="qtext_para">Thanks for the A2A. They can’t tell from a picture. Because they don’t always dress in their traditional garments. Below is a picture of Uighur people.</p>         <div class="qtext_image_wrapper"><img class="portrait qtext_image zoomable_in zoomable_in_feed lazy_loaded lazy_loading" src="https://qph.ec.quoracdn.net/main-qimg-e4c7f76f10b764ddae00c4e069c757b2.webp" master_src="https://qph.ec.quoracdn.net/main-qimg-e4c7f76f10b764ddae00c4e069c757b2-c" master_w="370" master_h="462" style="opacity: 1;"></div>         <p class="qtext_para">Not so obvious when they’re not dressed in traditional garments.</p>         <div class="qtext_image_wrapper"><img class="landscape qtext_image zoomable_in zoomable_in_feed lazy_loaded lazy_loading" src="https://qph.ec.quoracdn.net/main-qimg-95ea3c83f69b7bbf4bd6cdba784e26e7.webp" master_src="https://qph.ec.quoracdn.net/main-qimg-c88c96ae8dee0cf3378ad7dc19ddbb14-c" master_w="1024" master_h="768" style="opacity: 1;"></div>         <p class="qtext_para">If you want to find your relatives, try 23 and me. Sometimes you can discover distant cousins that way.</p>      </span>   </span></div>', author_id: guest3.id, question_id: question2.id})
answer9 = Answer.create!({body:'answer9bodytoquestion5', author_id: guest2.id, question_id: question5.id})
answer10 = Answer.create!({body:'answer10bodytoquestion7', author_id: guest2.id, question_id: question7.id})


comment1 = Comment.create!({body: 'You can find anything on the internet', answer_id: answer4.id, author_id: guest1.id})
comment2 = Comment.create!({body: 'So much fun here', answer_id: answer3.id, author_id: guest2.id})
comment3 = Comment.create!({body: 'So much fun here', answer_id: answer2.id, author_id: guest3.id})
comment4 = Comment.create!({body: 'Let me help you find that', answer_id: answer4.id, author_id: guest4.id})
comment5 = Comment.create!({body: "It's really interesting", answer_id: answer5.id, author_id: guest5.id})
comment6 = Comment.create!({body: "It's really interesting", answer_id: answer6.id, author_id: guest6.id})
comment7 = Comment.create!({body: 'So much fun here', answer_id: answer7.id, author_id: guest7.id})
comment8 = Comment.create!({body: 'You can find anything on the internet', answer_id: answer8.id, author_id: guest8.id})
comment9 = Comment.create!({body: 'So much fun here', answer_id: answer9.id, author_id: guest7.id})
comment10 = Comment.create!({body: "It's really interesting", answer_id: answer10.id, author_id: guest6.id})
comment11 = Comment.create!({body: 'Have fun surfing on internet', answer_id: answer1.id, author_id: guest1.id})
comment12 = Comment.create!({body: 'Have fun surfing on internet', answer_id: answer6.id, author_id: guest3.id})
comment13 = Comment.create!({body: 'So much fun here', answer_id: answer7.id, author_id: guest3.id})
comment14 = Comment.create!({body: 'You can find anything on the internet', answer_id: answer6.id, author_id: guest4.id})
comment15 = Comment.create!({body: "It's really interesting", answer_id: answer5.id, author_id: guest5.id})
comment16 = Comment.create!({body: 'commentbody4', answer_id: answer3.id, author_id: guest7.id})
comment17 = Comment.create!({body: 'Have fun surfing on internet', answer_id: answer2.id, author_id: guest6.id})
comment18 = Comment.create!({body: 'You can find anything on the internet', answer_id: answer1.id, author_id: guest8.id})
comment19 = Comment.create!({body: 'So much fun here', answer_id: answer2.id, author_id: guest9.id})
comment20 = Comment.create!({body: 'You can find anything on the internet', answer_id: answer3.id, author_id: guest3.id})
