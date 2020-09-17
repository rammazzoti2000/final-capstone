class AddReadingsController < ApplicationController
  def index; end

  def create
    @add_reading = current_user.build(reading_params)
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

  def reading_params
    params.require(:reading).permit(:quota, :units)
  end
end
