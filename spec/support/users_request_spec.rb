require 'rails_helper'

RSpec.describe 'Users', type: :request do
  let!(:users) { create_list(:user, 15) }
  let(:user_id) { users.last.id }

  describe 'Get /api/v1/users' do
    before { get '/api/v1/users' }

    it 'return all users' do
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(15)
    end

    it 'return status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/v1/users/:id' do
    before { get "/api/v1/users/#{user_id}" }

    context 'when user exists' do
      it 'resturns the user' do
        expect(json).not_to be_empty
        expect(json['data']['id']).to eq(user_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end
  context 'when user does not exist' do
    let(:user_id) { 9 }
    it 'returns nil' do
      expect(response).to eq(nil)
    end
  end

  describe 'POST /api/v1/users' do
    let!(:valid_attributes) do
      { user:
        { name: 'Bruce tester',
          email: 'tester@email.com',
          password: 'password',
          password_confirmation: 'password',
          units: 1800,
          target: 5 } }
    end

    context 'when the request is valid' do
      before { post '/api/v1/users', params: valid_attributes }

      it 'returns status code 200 when request is accepted' do
        expect(response).not_to have_http_status(400)
      end
    end

    context 'when the request is invalid' do
      before do
        post '/api/v1/users', params: { user:
        { name: ' ',
          email: ' ',
          password: 'password',
          password_confirmation: 'password',
          units: 1800, target: 5 } }
      end

      it 'return status code 400' do
        expect(json['code']).to eq(400)
      end

      it 'returns a validation error message' do
        expect(response.body).to match(/can't be blank/)
      end
    end
  end
end
