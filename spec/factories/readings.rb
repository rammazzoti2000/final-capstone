FactoryBot.define do
  factory :reading do
    bedroom { Faker::Number.between(from: 1, to: 10) }
    study { Faker::Number.between(from: 1, to: 10) }
    garage { Faker::Number.between(from: 1, to: 10) }
    living { Faker::Number.between(from: 1, to: 10) }
    kitchen { Faker::Number.between(from: 1, to: 10) }
    guest { Faker::Number.between(from: 1, to: 10) }
    consumption { Faker::Number.between(from: 1, to: 10) }
    available { Faker::Number.between(from: 1, to: 10) }
    saved { Faker::Number.between(from: 1, to: 10) }
    user_id { nil }
  end
end
