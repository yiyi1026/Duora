class AddTopicIdforQuestionTable < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :topic_id, :integer
    add_index :questions, :topic_id
  end
end
