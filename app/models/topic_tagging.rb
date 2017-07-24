# == Schema Information
#
# Table name: topic_taggings
#
#  id         :integer          not null, primary key
#  topic_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TopicTagging < ApplicationRecord
  #this table is for user_subscribed_topics
  validates_uniqueness_of :user_id, scope: :topic_id
  validates_uniqueness_of :topic_id, scope: :user_id
  belongs_to :user
  belongs_to :topic
end
