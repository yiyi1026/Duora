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

  # has_many :comments, through: :answers

  # has_many :topics, through: :topic_taggings, source: topics???
  # has_many :topic_taggings


end
