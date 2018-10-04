class CheckItemsController < ApplicationController

  def destroy
    check_item = CheckItem.find_by(check_id: params[:checkId], item_id: params[:id])

    check_item.destroy
  end

end
