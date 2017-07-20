# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text
#  author_id  :integer          not null
#  answersIds :integer          default([]), is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :author, presence: true  #no anonymous answers for now

  #associations
  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :answers
  has_many :comments, through: :answers

  # has_many :topic_taggings
  # has_many :topics, through: :topic_taggings, source: :topic

  # has_many :topics, through: :topic_taggings, source: topics???
  # has_many :topic_taggings

  #customize topic names???
  # def topic_name=(topic_names)
  #   self.topics = topic_names.map do |topic_name|
  #     Topic.find_or_create_by(name: topic_name)
  #   end
  # end

end
