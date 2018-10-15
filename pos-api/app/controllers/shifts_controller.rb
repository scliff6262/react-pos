class ShiftsController < ApplicationController

  def index
    shifts = Shift.all
    render json: shifts
  end

  def create
    shift = Shift.new(date: Time.now )
    render json: shift if shift.save
  end

  def show
    shift = Shift.last
    render json: shift
  end

end
