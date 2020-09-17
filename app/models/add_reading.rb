class AddReading < ApplicationRecord
  belongs_to :reading
  validates :quota, :units, presence: true
end
