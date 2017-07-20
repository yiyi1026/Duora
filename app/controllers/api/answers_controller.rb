class Api::AnswersController < ApplicationController
  def create
    answer = Answer.new(answer_params)

    if answer.save
      render json: answer
    else
      render json: answer.errors.full_messages, status: 422
    end
  end

  def index
    answers = Answer.find(params[:question_id]).answers
    render json: answers
  end

  # def destroy
  #   answer = Answer.find(params[:id]).destroy
  #   render json: answer
  # end
  #
  def update
    @answer = Answer.find(params[:id])
    if @answer.update(answer_params)
      question = @answer.question
      #from pokdex
      render json: question, include: [:answers]
    else
      render json: answer.errors.full_messages, status: 422
    end
  end

  def answer_params
    params.require(:answer).permit(:body, :question_id)
end
