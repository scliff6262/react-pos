class ChecksController < ApplicationController

  def show
    @check = Check.find_by(active: true, table_number: params[:table_number])
    render json: @check
  end

  def create
    @check = Check.find_or_create_by(table_number: params[:table_number], active: true)
  end
end
