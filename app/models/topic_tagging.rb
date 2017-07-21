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
  belongs_to :user
  belongs_to :topic
end
