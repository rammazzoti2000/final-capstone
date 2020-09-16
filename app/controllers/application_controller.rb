class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :login, :logged_in?, :current_user, :authorized_user?

  def login(user)
    session[:id] = user.id
  end

  def current_user
    @current_user ||= session[:id] && User.find_by_id(session[:id])
  end

  def logged_in?
    render json: { code: 401 } unless current_user
  end
end
