class Api::AnswersController < ApplicationController
  before_action :require_logged_in, only: [:new, :create, :edit, :update, :destroy]

  def create
    @answer = current_user.answers.new(answer_params)
    # @answer.author_id = current_user.id
    if @answer.save
      render json: @answer, includes: :comments
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def index
    @answers = Question.find(params[:question_id]).answers
    render :index
  end

  # def index
  #   if params[:query]
  #     @answers = Answer.where('body LIKE ?', "%#{params[:query]}%")
  #   else
  #     @answers = Question.all
  #   end
  #   render :index
  #   # render json: @questions, include: :answers
  # end
  # def destroy
  #   answer = Answer.find(params[:id]).destroy
  #   render json: answer
  # end
  #

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  #havn't tested update part
  def update
    @answer = Answer.find(params[:id])
    if @answer
      @answer.update(answer_params)
      # @question = @answer.question
      #from pokdex
      render json: @answer
      # render json: question, include: [:answers]
    else
      render json: answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = current_user.answers.find(params[:id])
    @answer.destroy
  end

  def answer_params
    params.require(:answer).permit(:body, :question_id, :id, :author)
  end
end
