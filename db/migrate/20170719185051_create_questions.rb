class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      #should title be unique or unique under same topic or don't?
      t.string :title, null: false
      t.text :body
      t.integer :author_id, null: false  #foreign key reference users
      t.integer :answersIds, array: true, default: []

      t.timestamps
    end

    add_index :questions, :author_id
  end
end
