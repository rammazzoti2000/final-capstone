class Api::V1::AddReadingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :logged_in?

  def index; end

  def create
    @add_reading = current_user.add_readings.build(add_reading_params)
    if @add_reading.save
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

  def destroy; end

  private

  def add_reading_params
    params.require(:reading).permit(:quota, :units)
  end
end
