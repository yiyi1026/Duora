class Answer < ApplicationRecord
  validates :body, :author_id, :question_id, presence: true
  validates :author, :question, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  belongs_to :question,
    class_name: :Question

  #belongs to question ???? question has an array of answersIds, how to
  #use that ??
end
