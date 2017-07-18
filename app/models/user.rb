class User < ApplicationRecord
  # do we need index username?? should it be unique???
	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
  # or this format?? {minimum: 6, allow_nil: true}
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token

  #do we need it?
	before_validation :ensure_session_token_uniqueness

  attr_reader :password

	def password= password
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		user & user.is_password?(password) ? user : nil
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = SecureRandom.base64
		end
	end

end
