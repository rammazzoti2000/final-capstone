class Users::SessionsController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: %i[create destroy]
  # before_action :logged_in?, except: [:destroy]

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      login @user
      render json: {
        logged_in?: true,
        code: 200,
        user: {
          name: @user.name
        }
      }
    else
      render json: {
        code: 400,
        errors: { Error: ['no such user',
                          'verify credentials and try again or signup'] }
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
