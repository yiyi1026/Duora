class Api::QuestionsController < ApplicationController
  #only allow show or index if not logged_in?
  #could question author delete answers not written by the author?
  before_action :require_logged_in, only: [:new, :create, :edit, :update, :destroy]

  def new
    @question = Question.new
    render :new
  end

  def create
    @question = current_user.questions.new(question_params)

    if @question.save
      # render question show
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422 #which status error??
    end
  end

  def edit
    @question = current_user.questions.find_by(params[:id])
    if @question
      render "/api/questions/edit"    #?????
    else
      render json: @question.errors.full_messages, status: 422
      #no   “You do not have permissions to edit this question”
    end
  end


  def index
    @questions = Question.all
    render "api/questions/index"
  end

  def show
    # @question = Question.includes(answers:[:comments])
    @question = Question.find(params[:id])
    render :show
  end

  private

  def question_params
    params.require(:question).permit(:title, :body)
end
