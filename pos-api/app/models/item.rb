class Item < ApplicationRecord
  has_many :check_items
  has_many :checks, through: :check_items
end
