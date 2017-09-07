class Api::TopicsController < ApplicationController

  # def create
  #   @topic = Topic.new(topic_params)
  #
  # end

  def index
    if params[:query].present?
      @topics = Topic.where("name LIKE ?", "%#{params[:query]}%").limit(10)
    elsif params[:question_id].present?
      @topics = Topic.joins(:questions).where(questions: {id: params[:question_id]})
    else
      @topics = Topic.all
    end
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    render :show
    #maybe created_at?? newest questions come first???
    # @topic_questions = @topic.questions.order(id: :desc)
  end

  def topic_params
    params.require(:topic).permit(:id, :name, :question_id)
  end
end
