class AddReading < ApplicationRecord
  belongs_to :reading
  belongs_to :user
  validates :quota, :units, presence: true
end
