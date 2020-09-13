class Reading < ApplicationRecord
  belongs_to :user
  validates :bedroom, presence: true
  validates :study, presence: true
  validates :garage, presence: true
  validates :living, presence: true
  validates :kitchen, presence: true
  validates :guest, presence: true
  validates :consumption, presence: true
  validates :available, presence: true
  validates :saved, presence: true
end
