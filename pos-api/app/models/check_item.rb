class CheckItem < ApplicationRecord
  belongs_to :check
  belongs_to :item
end
