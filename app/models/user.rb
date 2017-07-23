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
	validates :email, uniqueness: true, presence: true
	# validates :email, email_format: { message: "doesn't look like an email address" }
  # or this format?? {minimum: 6, allow_nil: true}
	validates :password, length: {minimum: 6}, allow_nil: :true

	#associations
	has_many :questions,   #author has written many questions
		foreign_key: :author_id,
		primary_key: :id,
		class_name: :Question

	# has_many :answers,  #author has written many answers
	# 	through: :questions,
	# 	source: :answer
	has_many :topic_taggings

	# has_many :subscribed_topics, through: :topic_taggings, source: :topic

	after_initialize :ensure_session_token

  #do we need it?
	before_validation :ensure_session_token_uniqueness

  attr_reader :password

	def password= password
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		user && user.is_password?(password) ? user : nil
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		# self.session_token = SecureRandom.base64
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = SecureRandom.urlsafe_base64
		end
		self.session_token
	end

end
