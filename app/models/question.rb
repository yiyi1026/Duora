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
  validates :author, :topic, presence: true  #no anonymous answers for now

  #associations
  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :answers
  has_many :comments, through: :answers

  belongs_to :topic

  # has_many :topic_taggings
  # has_many :subscribed_topics, through: :topic_taggings, source: :topic

  # multiple topics???
  # def topic_name=(topic_names)
  #   self.topics = topic_names.map do |topic_name|
  #     Topic.find_or_create_by(name: topic_name)
  #   end
  # end

end
