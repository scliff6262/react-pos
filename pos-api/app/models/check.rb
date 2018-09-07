class Check < ApplicationRecord
  has_many :check_items
  has_many :items, through: :check_items
end
