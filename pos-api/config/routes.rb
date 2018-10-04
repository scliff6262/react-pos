Rails.application.routes.draw do
  resources :checks, only: [:index, :update, :destroy]
  get '/checks/:table_number', to: 'checks#find_or_create'

  resources :check_items, only: [:destroy]

  post '/auth', to: "auth#create"
  resources :items, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
