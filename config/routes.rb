Rails.application.routes.draw do

  get 'rooms/show'
  root to: "static_pages#root"

    namespace :api, defaults: { format: :json } do
      resources :users 

      resources :friendships
      resources :posts do
        resources :comments, only: [:index]
      end
      resource :session
      resources :comments
      resources :reactions
      resources :rooms
  end
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
