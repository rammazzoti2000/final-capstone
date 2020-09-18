class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {
        code: 200
      }
    else
      render json: {
        code: 400,
        errors: @user.errors.messages
      }
    end
  end

  def index
    @users = User.all
    if @users
      render json: {
        code: 200,
        data: User.all.as_json
      }
    else
      render json: @users.errors.messages
    end
  end

  def find_user
    @users = User.all
    @users = User.find(params[:id])
    if @users
      render json: {
        code: 200,
        data: @users.as_json
      }
    else
      render json: @users.errors.messages
    end
  end

  def destroy; end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :password,
      :password_confirmation,
      :units,
      :target
    )
  end
end
