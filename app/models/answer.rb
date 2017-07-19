class Answer < ApplicationRecord
  validates :body, :author_id, presence: true
  validates :author, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  #belongs to question ???? question has an array of answersIds, how to
  #use that ??
end
