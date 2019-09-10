class User < ApplicationRecord

      attr_reader :password

  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :friendships

  has_many :friends,
  through: :friendships,
  source: :friend

  has_many :posts

  has_many :friends_posts,
  through: :friends,
  source: :posts

  has_one_attached :profile_photo

  has_one_attached :cover_photo

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    save!
    self.session_token
  end

  def is_password?(password) 
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def is_friend?(user)
    friend_ids = self.friends.map{|friend| friend.id}

    friend_ids.include?(user.id)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user.is_password?(password)
      return user
    else
      return false
    end
  end

end
