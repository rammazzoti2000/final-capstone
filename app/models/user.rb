class User < ApplicationRecord
  has_secure_password

  has_many :readings, dependent: :destroy

  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :password, confirmation: true, presence: true, length: { minimum: 6, maximum: 15 }
  validates :units, :target, presence: true
end
