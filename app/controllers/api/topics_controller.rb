class Api::TopicsController < ApplicationController
  # def create
  #
  # end

  def index
    @topics = Topic.includes(:question_topic_taggings)
    # @topics = Topic.includes(:question_topic_taggings).where("topic.name = ?", "%#{params[:query]}%")
    # @topics = QuestionTopicTagging.includes(:topic).where("topic.name = ?", "%#{params[:query]}%")
    # @topics = Topic.includes(question_topic_taggings: [:questions]).where("name = ?", "%#{params[:query]}%")
    # @topics = Topic.all
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
    params.require(:topic).permit(:id, :name, :question_id)
  end
end
