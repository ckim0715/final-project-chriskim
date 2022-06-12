class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :cc_number

  belongs_to :user
end
