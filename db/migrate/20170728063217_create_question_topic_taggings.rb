class CreateQuestionTopicTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :question_topic_taggings do |t|
      t.integer :topic_id, null: false
      t.integer :question_id, null: false

      t.timestamps
    end
    add_index :question_topic_taggings, :topic_id
    add_index :question_topic_taggings, :question_id
  end
end