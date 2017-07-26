# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer
#

class Answer < ApplicationRecord
  validates :body, :author_id, :question_id, presence: true
  validates :author, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  belongs_to :question,
    class_name: :Question

  has_many :comments

  #user write all the answers

  def commentsIds
    self.comments.map{|comment| comment.id }
  end
  #belongs to question ???? question has an array of answersIds, how to
  #use that ??
end
