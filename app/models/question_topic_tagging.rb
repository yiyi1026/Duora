# == Schema Information
#
# Table name: question_topic_taggings
#
#  id          :integer          not null, primary key
#  topic_id    :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class QuestionTopicTagging < ApplicationRecord
    #this table is for question to associate with topics
  validates_uniqueness_of :question_id, scope: :topic_id
  validates_uniqueness_of :topic_id, scope: :question_id
  belongs_to :question
  belongs_to :topic
end
