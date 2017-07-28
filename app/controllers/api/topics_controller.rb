class Api::TopicsController < ApplicationController
  # def create
  #
  # end

  def index
    @topics = Topic.all
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    render :show
    #maybe created_at?? newest questions come first???
    # @topic_questions = @topic.questions.order(id: :desc)
  end

  # def create
  #   @topic = Topic.new(topic_params)
  #
  # end

  def topic_params
    params.require(:topic).permit(:id, :name)
  end
end
