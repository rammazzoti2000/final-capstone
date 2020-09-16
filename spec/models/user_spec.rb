require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:users) { create_list(:user, 10) }

  it { should have_many(:readings) }
  it { should validate_presence_of(:name) }
  it { should validate_length_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email) }
  it { should validate_presence_of(:password) }
  it { should validate_length_of(:password) }
  it { should validate_confirmation_of(:password) }
  it { should validate_presence_of(:units) }
  it { should validate_presence_of(:target) }
end
