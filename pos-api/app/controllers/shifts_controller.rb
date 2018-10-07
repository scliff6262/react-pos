class ShiftsController < ApplicationController

  def create
    shift = Shift.new(date: Time.now.strftime("%m/%d/%Y") )
    render json: shift if shift.save
  end

  def show
    shift = Shift.last
    render json: shift
  end
  
end
