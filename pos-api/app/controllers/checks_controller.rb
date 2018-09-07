class ChecksController < ApplicationController

  def index
    @checks = Check.all
    render json: @checks
  end

  def find_or_create
    @check = Check.find_or_create_by(active: true, table_number: params[:table_number])
    render json: @check
  end
  
end
