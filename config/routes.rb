Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :questions   #, except: [:create, :update, :destroy]
    resources :answers
    resources :topics do
      resources :questions
    end
end

#chaos
  root "static_pages#root"

end
