require 'rails_helper'

RSpec.describe Reading, type: :model do
  let!(:user) { create(:user) }
  let!(:readings) { create_list(:reading, 1, user_id: user.id) }
  let(:user_id) { user.id }
  let(:id) { readings.first.id }

  it { should belong_to(:user) }
  it { should validate_presence_of(:bedroom) }
  it { should validate_presence_of(:study) }
  it { should validate_presence_of(:garage) }
  it { should validate_presence_of(:living) }
  it { should validate_presence_of(:kitchen) }
  it { should validate_presence_of(:living) }
  it { should validate_presence_of(:available) }
  it { should validate_presence_of(:saved) }
end
