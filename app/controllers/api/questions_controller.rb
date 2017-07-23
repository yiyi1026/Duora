class Api::QuestionsController < ApplicationController
  #only allow show or index if not logged_in?
  #could question author delete answers not written by the author?
  before_action :require_logged_in, only: [:new, :create, :edit, :update, :destroy]

  # def new
  #   @question = Question.new
  #   render :new
  # end
  #
  def index
    if params[:query]
      p 'I am here'
      p params[:query]
      @questions = Question.where('title LIKE ?', "%#{params[:query]}%")
    else
      @questions = Question.all
    end
    render :index
    # render json: @questions, include: :answers
  end

  def show
    @question = Question.includes(answers: [:comments]).find(params[:id])
    render :show
    # render json: Question.find(params[:id]), include: :answers
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
    @question = Question.includes(answers: [:comments]).find(params[:id])
    if @question.update_attributes(question_params)
      render :show
      # render json: @question, include: :answers    #?????
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
    params.require(:question).permit(:title, :body, :id, :author_id, :author, :answers, :topic_id, topic_names: [])
  end
end
