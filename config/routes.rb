# == Route Map
#
#            Prefix Verb   URI Pattern                       Controller#Action
#         api_users POST   /api/users(.:format)              api/users#create {:format=>:json}
#          api_user GET    /api/users/:id(.:format)          api/users#show {:format=>:json}
#       api_session GET    /api/session(.:format)            api/sessions#show {:format=>:json}
#                   DELETE /api/session(.:format)            api/sessions#destroy {:format=>:json}
#                   POST   /api/session(.:format)            api/sessions#create {:format=>:json}
#     api_questions GET    /api/questions(.:format)          api/questions#index {:format=>:json}
#                   POST   /api/questions(.:format)          api/questions#create {:format=>:json}
#  new_api_question GET    /api/questions/new(.:format)      api/questions#new {:format=>:json}
# edit_api_question GET    /api/questions/:id/edit(.:format) api/questions#edit {:format=>:json}
#      api_question GET    /api/questions/:id(.:format)      api/questions#show {:format=>:json}
#                   PATCH  /api/questions/:id(.:format)      api/questions#update {:format=>:json}
#                   PUT    /api/questions/:id(.:format)      api/questions#update {:format=>:json}
#                   DELETE /api/questions/:id(.:format)      api/questions#destroy {:format=>:json}
#       api_answers GET    /api/answers(.:format)            api/answers#index {:format=>:json}
#                   POST   /api/answers(.:format)            api/answers#create {:format=>:json}
#    new_api_answer GET    /api/answers/new(.:format)        api/answers#new {:format=>:json}
#   edit_api_answer GET    /api/answers/:id/edit(.:format)   api/answers#edit {:format=>:json}
#        api_answer GET    /api/answers/:id(.:format)        api/answers#show {:format=>:json}
#                   PATCH  /api/answers/:id(.:format)        api/answers#update {:format=>:json}
#                   PUT    /api/answers/:id(.:format)        api/answers#update {:format=>:json}
#                   DELETE /api/answers/:id(.:format)        api/answers#destroy {:format=>:json}
#        api_topics GET    /api/topics(.:format)             api/topics#index {:format=>:json}
#                   POST   /api/topics(.:format)             api/topics#create {:format=>:json}
#     new_api_topic GET    /api/topics/new(.:format)         api/topics#new {:format=>:json}
#    edit_api_topic GET    /api/topics/:id/edit(.:format)    api/topics#edit {:format=>:json}
#         api_topic GET    /api/topics/:id(.:format)         api/topics#show {:format=>:json}
#                   PATCH  /api/topics/:id(.:format)         api/topics#update {:format=>:json}
#                   PUT    /api/topics/:id(.:format)         api/topics#update {:format=>:json}
#                   DELETE /api/topics/:id(.:format)         api/topics#destroy {:format=>:json}
#      api_comments GET    /api/comments(.:format)           api/comments#index {:format=>:json}
#                   POST   /api/comments(.:format)           api/comments#create {:format=>:json}
#   new_api_comment GET    /api/comments/new(.:format)       api/comments#new {:format=>:json}
#  edit_api_comment GET    /api/comments/:id/edit(.:format)  api/comments#edit {:format=>:json}
#       api_comment GET    /api/comments/:id(.:format)       api/comments#show {:format=>:json}
#                   PATCH  /api/comments/:id(.:format)       api/comments#update {:format=>:json}
#                   PUT    /api/comments/:id(.:format)       api/comments#update {:format=>:json}
#                   DELETE /api/comments/:id(.:format)       api/comments#destroy {:format=>:json}
#              root GET    /                                 static_pages#root
# 

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :questions   #, except: [:create, :update, :destroy]
    resources :answers
    resources :topics
    resources :comments
  end

  root "static_pages#root"

end
