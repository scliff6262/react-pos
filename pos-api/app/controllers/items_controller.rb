class ItemsController < ApplicationController

  def index
    @items = Item.all
    render json: @items
  end

  def create
    @item = Item.new(name: params[:name], category: params[:category], price: params[:price])
    render json: @item if @item.save
  end

end
