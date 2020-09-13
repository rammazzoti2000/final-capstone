class ReadingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :logged_in?

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

  def index
    render json: {
      code: 200,
      data: Reading.all.as_json(
        only: %i[id bedroom study garage living kitchen guest consumption available saved]
      )
    }
  end

  def show
    render json: {
      code: 200,
      data: Reading.find(params[:id]).as_json(
        only: %i[id bedroom study garage living kitchen guest consumption available saved],
        include: {
          users: { only: %i[id unit target] }
        }
      )
    }
  end

  def find_read
    @read = Reading.find(params[:id])
  end

  private

  def reading_params
    params.require(:reading).permit(:bedroom, :study, :garage, :living, :kitchen, :guest, :consumption, :available, :saved)
  end

end
