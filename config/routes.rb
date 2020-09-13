Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  scope "/api" do
    resources :users, only: [:create, :index]
    resources :readings, only: %i[create destroy index show]
    scope :users do
       resources :sessions, only: [:create], module: :users
       delete "/sessions", to: "users/sessions#destroy", module: :users
    end
  end
end
