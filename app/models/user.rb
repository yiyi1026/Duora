# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  description     :string
#  avatar          :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  # do we need index username?? should it be unique???
	validates :username, :password_digest, :session_token, presence: true
	validates :email, uniqueness: true
	# validates :email, email_format: { message: "doesn't look like an email address" }
  # or this format?? {minimum: 6, allow_nil: true}
	validates :password, length: {minimum: 6}, allow_nil: :true

	#associations
	has_many :questions,   #author has written many questions
		foreign_key: :author_id,
		class_name: :Question

	# has_many :answers,  #author has written many answers

end
