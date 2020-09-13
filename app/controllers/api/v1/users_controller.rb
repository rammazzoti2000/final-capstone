class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      units: params[:units],
      target: params[:target],
    )
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
      render json: @users.errors
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
      render json: @users.errors
    end
  end

  def destroy; end
end
