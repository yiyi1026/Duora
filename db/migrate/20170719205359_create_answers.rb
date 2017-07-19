class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.text :body, null: false   #fore
      t.integer :commentsIds, array: true, default: []
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :answers, :author_id
  end
end
