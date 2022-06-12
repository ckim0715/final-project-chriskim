class ListingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :date, :message
end
