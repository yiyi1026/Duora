class Api::QuestionsController < ApplicationController
  #only allow show or index if not logged_in?
  #could question author delete answers not written by the author?
  before_action :require_logged_in, only: [:new, :create, :edit, :update, :destroy]

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

  def show
    @question = Question.includes(answers: [:comments]).find(params[:id])
    render :show
    # render json: Question.find(params[:id]), include: :answers
  end

  def update
    @question = Question.includes(answers: [:comments]).find(params[:id])
    if @question && @question.author.email === current_user.email
      if @question.update_attributes(question_params)
      render :show
      # render json: @question, include: :answers    #?????
      # render "/api/questions/#{question.id}edit"
      end
    else
        render json: @question.errors.full_messages, status: 422
      #no   “You do not have permissions to edit this question”
    end
  end

  def search
    if params[:query].present?
      @questions = Question.where("title LIKE ?", "%#{params[:query]}%").limit(10)
      render :search
    else
      @questions = Question.all
      render :search
    end
  end


  def index
    if params[:query].present?
      @questions = Question.where("title LIKE ?", "%#{params[:query]}%").limit(10)
      render :index
    else
      @questions = Question.all
      render :index
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
    params.require(:question).permit(:title, :body, :id, :author_id, :author, :topic, :answers, :topic_id, topic_names: [])
  end
end
