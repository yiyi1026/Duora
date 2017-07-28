# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  topic_id   :integer
#

class Question < ApplicationRecord
  validates :title, :author_id, :topic_id, presence: true
  validates :author, presence: true  #no anonymous answers for now
  # validates :topic, presence: true

  #associations
  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :answers,
    class_name: :Answer
  # , dependent: :destroy
  has_many :comments, through: :answers

  has_many :question_topic_taggings
  has_many :topics, 
    through: :question_topic_taggings,
    source: :question
  # has_many :topic_taggings

  # multiple topics???
  def topic_name=(topic_names)
    self.topics = topic_names.map do |topic_name|
      Topic.find_or_create_by(name: topic_name)
    end
  end

  def answersIds
    self.answers.map{|answer| answer.id }
  end

  def topicsIds
    self.question_topic_taggings.map{|question_topic_tagging| question_topic_tagging.topic_id }
  end

end
