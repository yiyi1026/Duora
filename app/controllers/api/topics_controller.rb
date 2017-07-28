class Api::TopicsController < ApplicationController
  # def create
  #
  # end

  def index
    if params[:query].present?
      @topics = Topic.where("title LIKE ?", "%#{params[:query]}%").limit(10)
    elsif params[:question_id].present?
      @topics = Question.find(params[:question_id]).topics
    else
      @topics = Topic.all
    end
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    #maybe created_at?? newest questions come first???
    @topic_questions = @topic.questions.order(id: :desc)
  end

  # def create
  #   @topic = Topic.new(topic_params)
  #
  # end

  def topic_params
    params.require(:topic).permit(:id, :name, :questions, :question_id)
  end
end
