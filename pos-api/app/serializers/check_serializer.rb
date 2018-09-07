class CheckSerializer < ActiveModel::Serializer
  attributes :id, :table_number, :subtotal, :active
  has_many :items, serializer: CheckItemSerializer
end
