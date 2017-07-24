class Api::AnswersController < ApplicationController
  def create
    @answer = current_user.answers.new(answer_params)

    if @answer.save
      render json: @answer, includes: :comments
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def index
    @answers = Question.find(params[:question_id]).answers
    render :show
  end

  # def destroy
  #   answer = Answer.find(params[:id]).destroy
  #   render json: answer
  # end
  #

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer
      @answer.update(answer_params)
      @question = @answer.question
      #from pokdex
      render json: @answer
      # render json: question, include: [:answers]
    else
      render json: answer.errors.full_messages, status: 422
    end
  end

  def answer_params
    params.require(:answer).permit(:body, :question_id, :id, :author)
  end
end
