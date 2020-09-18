class Api::V1::Users::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user&.authenticate(params[:user][:password])
      login @user
      render json: {
        code: 200,
        user: {
          id: @user.id,
          name: @user.name
        }
      }
    else
      render json: {
        code: 400,
        errors: { Error: ['Email and/or Password don\'t match !'] }
      }
    end
  end

  def destroy
    @current_user = nil
    session.delete(:id)
  end

  private

  def user_params
    params[:user].permit(:email, :password)
  end
end
