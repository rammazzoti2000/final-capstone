FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { 'somepassword' }
    password_confirmation { 'somepassword' }
    units { 1800 }
    target { 5 }
  end
end
