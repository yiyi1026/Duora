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

require 'test_helper'

class QuestionTopicTaggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
