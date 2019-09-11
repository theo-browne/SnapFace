Rails.application.routes.draw do

  root to: "static_pages#root"

    namespace :api, defaults: { format: :json } do
      resources :users 

      resources :friendships
      resources :posts
      resource :session
      resources :comments
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
