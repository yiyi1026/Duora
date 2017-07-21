class Api::CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    comment.answer_id = comment.answer.id
    comment.author_id = current_user.id
    answer = comment.answer
    if comment.save
      render json: answer
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  # def index
  #   comments = Comment.find(params[:question_id]).comments
  #   render json: comments
  # end

  # def destroy
  #   comment = Comment.find(params[:id]).destroy
  #   render json: comment
  # end
  #
  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      answer = @comment.answer
      #from pokdex
      render json: answer, include: [:comments]
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(
    :body, :question_id, :id, :author, :author_id, :answer, :answer_id,
    :question, :question_id)
  end
end
