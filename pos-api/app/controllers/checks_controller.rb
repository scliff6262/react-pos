class ChecksController < ApplicationController

  def index
    @checks = Check.all
    render json: @checks
  end

  def find_or_create
    @check = Check.find_or_create_by(active: true, table_number: params[:table_number])
    render json: @check
  end

  def update
    @check = Check.find_by(active: true, table_number: params[:id])
    if params[:active]
      @check.active = params[:active]
      @check.save
    else
      params[:items].each do |item|
        @check.items << Item.find(item[:id])
      end
    end
  end

end
