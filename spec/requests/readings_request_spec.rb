require 'rails_helper'

RSpec.describe 'Readings', type: :request do
  let!(:user) { create(:user) }
  let!(:readings) { create_list(:reading, 2, user_id: user.id) }
  let(:user_id) { user.id }
  let(:id) { readings.first.id }

  describe 'POST /api/v1/readings' do
    let!(:valid_attributes) do
      { bedroom: 1,
        study: 1,
        garage: 1,
        living: 1,
        kitchen: 1,
        guest: 1,
        consumption: 1,
        available: 1,
        saved: 1,
        user_id: 1 }
    end

    context 'when the readings creation' do
      before { post '/api/v1/readings', params: valid_attributes }

      it 'returns error code 401 before login' do
        expect(json['code']).to eq(401)
      end
    end
    context 'when the request is invalid' do
      before do
        post '/api/v1/readings', params: { bedroom: ' ',
                                           study: ' ',
                                           garage: 1,
                                           living: 1,
                                           kitchen: 1,
                                           guest: 1,
                                           consumption: 1,
                                           available: 1,
                                           saved: 1,
                                           user_id: 1 }
      end

      it 'return status code 401 before login' do
        expect(json['code']).to eq(401)
      end
    end
  end

  describe 'GET /api/v1/readings' do
    before { get '/api/v1/readings' }

    context 'when all readings are hidden before required login' do
      it 'returns error code 401' do
        expect(json['code']).to eq(401)
      end
    end
  end

  describe 'GET /api/v1/readings/user/:user_id' do
    before { get "/api/v1/readings/user/#{user_id}" }

    context 'when users readings are hidden before required login' do
      it 'returns error code 401' do
        expect(json['code']).to eq(401)
      end
    end
    context 'when user does not exists' do
      let(:user_id) { 0 }

      it 'returns status code 401' do
        expect(json['code']).to eql(401)
      end
    end
  end

  describe 'GET /api/v1/user/:user_id/reading/:id' do
    before { get "/api/v1/user/#{user_id}/reading/#{id}" }

    context 'when user single reading is hidden before required login' do
      it 'returns status code 401' do
        expect(json['code']).to eq(401)
      end

      context 'when user does not exists' do
        let(:user_id) { 0 }

        it 'returns status code 401' do
          expect(json['code']).to eql(401)
        end
      end
    end
  end
end
