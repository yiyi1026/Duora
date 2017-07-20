class DeleteArrayColumnforQuestionandAnswers < ActiveRecord::Migration[5.0]
  def change
    remove_column :questions, :answersIds
    remove_column :answers, :commentsIds
  end
end
