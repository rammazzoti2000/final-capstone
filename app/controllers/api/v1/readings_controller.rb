class Api::V1::ReadingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :logged_in?

  def index
    @reading = Reading.all
    if @reading
      render json: {
        code: 200,
        data: Reading.all.as_json
      }
    else
      render json: @reading.errors
    end
  end

  def create
    @reading = current_user.readings.build(reading_params)
    if @reading.save
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

  def show
    @readings = Reading.all
    @readings = Reading.find(params[:id])
    if @readings
      render json: {
        code: 200,
        data: @readings.as_json
      }
    else
      render json: @readings.errors
    end
  end

  def destroy; end

  def find_readings
    @readings = Reading.all
    @readings = Reading.find(params[:id])
    if @readings
      render json: {
        code: 200,
        data: @readings.as_json
      }
    else
      render json: @readings.errors
    end
  end

  def list_readings_by_user
    @readings = Reading.all
    @readings = Reading.where(params[:user_id])
    if @readings
      render json: {
        code: 200,
        data: @readings.as_json
      }
    else
      render json: @readings.errors
    end
  end

  def list_reading
    @read = Reading.all
    @read = Reading.find_by(user_id: params[:user_id], id: params[:id])
    if @read
      render json: {
        code: 200,
        data: @read.as_json
      }
    else
      render json: @read.errors
    end
  end

  private

  def reading_params
    params.require(:reading).permit(
      :bedroom,
      :study,
      :garage,
      :living,
      :kitchen,
      :guest,
      :consumption,
      :available,
      :saved
    )
  end
end
