Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  scope "/api" do
    resources :users, only: [:create, :index]
    scope :users do
       resources :sessions, only: [:create], module: :users
    end
  end
end
