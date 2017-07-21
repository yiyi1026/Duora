class Api::QuestionsController < ApplicationController
  #only allow show or index if not logged_in?
  #could question author delete answers not written by the author?
  before_action :require_logged_in, only: [:new, :create, :edit, :update, :destroy]

  # def new
  #   @question = Question.new
  #   render :new
  # end

  def index
    render json: Question.all, include: :answers
    # render "api/questions/index"
  end

  def show
    render json: Question.find(params[:id]), include: :answers
  end

  def create
    @question = current_user.questions.new(question_params)

    if @question.save
      # render question show
      render json: @question, include: :answers
      # render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update_attributes(question_params)
      render json: @question, include: :answers    #?????
      # render "/api/questions/#{question.id}edit"
    else
      render json: @question.errors.full_messages, status: 422
      #no   “You do not have permissions to edit this question”
    end
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    @question.destroy
    #render :show
    # render json: @question
    render json: @question, include: :answers
  end

  private

  def question_params
    params.require(:question).permit(:title, :body, :id, :author_id, :answers, :topic_id)
  end
end
