Rails.application.routes.draw do
  resources :check_items
  resources :checks
  resources :items
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
