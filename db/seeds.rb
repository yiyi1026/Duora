# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

guest0 = User.create!({username: 'guest0', email: 'guest0@guest.com', password:'guest0'})
#guest = {user:{username: 'guest', email: 'guest@guest.com', password:'123456'}}
guest1 = User.create!({username: 'guest1', email: 'guest1@guest.com', password:'guest1'})
guest2 = User.create!({username: 'guest2', email: 'guest2@guest.com', password:'guest2'})
