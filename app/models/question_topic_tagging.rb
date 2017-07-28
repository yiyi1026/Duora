class QuestionTopicTagging < ApplicationRecord
    #this table is for question to associate with topics
  validates_uniqueness_of :question_id, scope: :topic_id
  validates_uniqueness_of :topic_id, scope: :question_id
  belongs_to :question
  belongs_to :topic
end