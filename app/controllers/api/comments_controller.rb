class Api::CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    # @comment.answer_id = comment.answer.id
    # if current_user
    #   @comment.author_id = current_user.id
    # end
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Answer.find(params[:answer_id]).comments
    render :index
  end

  # def destroy
  #   comment = Comment.find(params[:id]).destroy
  #   render json: comment
  # end
  #
  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      answer = @comment.answer
      #from pokdex
      render json: answer, include: [:comments]
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  def comment_params
    params.require(:comment).permit(
    :body, :question_id, :id, :author_id, :answer_id)
  end
end
