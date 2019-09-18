class User < ApplicationRecord

      attr_reader :password

  validates :email, :session_token, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password_digest, presence: true

  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :friendships, 
     dependent: :destroy

  has_many :friends,
  through: :friendships,
  source: :friend

  has_many :posts, 
     dependent: :destroy

  has_many :friends_posts,
  through: :friends,
  source: :posts

  has_many :post_photos,
    through: :posts,
    source: :photo_attachment

    has_many :post_blobs,
    through: :posts,
    source: :photo_blob

  has_one_attached :profile_photo

  has_one_attached :cover_photo

  has_many :comments, 
     dependent: :destroy

  has_many :reactions, 
     dependent: :destroy

  has_many :messages

  

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

  def mutual_friends(current_user, user)
    return -1 if current_user.friends.include?(user) 
    return -1 if current_user.id == user.id
    hash = {}
    count = 0 
      current_user.friends.each do |user|
        hash[user.id] = true
      end

      user.friends.each do |user|
        if hash[user.id]
          count += 1
        end
      end
    count
  end

  def suggested_friends 
    users = User.all.sort_by {|user| -self.mutual_friends(self, user)}
    users[0..4]
  end 

  def grab_posts(last_post)
    @posts = current_user.friends_posts.where("posts.created_at > ?", last_post.created_at).order("created_at DESC")
  end

  

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return false unless user
    if user.is_password?(password)
      return user
    else
      return false
    end
  end

end
