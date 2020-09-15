class Reading < ApplicationRecord
  belongs_to :user
  validates :bedroom, :study, :garage,
            :living, :kitchen, :guest,
            :consumption, :available, :saved, presence: true
end
