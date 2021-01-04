Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  post '/login', to: 'auth#login' 
  
  resources :posts
  resources :user_chatrooms
  resources :chatrooms
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
