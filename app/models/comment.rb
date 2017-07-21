# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  answer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :author, :question, :answer, presence: true

  belongs_to :answer
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_one :question, through: :answer
end
