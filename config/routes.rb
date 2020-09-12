Rails.application.routes.draw do
  root 'homepage#index'

  scope "/api" do
    resources :users, only: [:create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
