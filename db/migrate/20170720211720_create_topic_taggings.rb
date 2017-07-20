class CreateTopicTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :topic_taggings do |t|
      t.integer :topic_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :topic_taggings, :topic_id
    add_index :topic_taggings, :user_id
  end
end
