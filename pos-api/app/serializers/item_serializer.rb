class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price 
end
