# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord
  # has_many :questions
  validates :name, presence: true, uniqueness: true
  has_many :topic_taggings
  # has_many :subscribers,
  #   through: :topic_taggings,
  #   source: :user

  has_many :question_topic_taggings
  has_many :questions, 
    through: :question_topic_taggings,
    source: :question

end
