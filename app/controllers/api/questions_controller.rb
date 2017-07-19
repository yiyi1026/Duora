class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render :index
  end

  def show
    # @question = Question.includes(answers:[:comments])
    @question = Question.find(params[:id])
    render :show
  end
end
