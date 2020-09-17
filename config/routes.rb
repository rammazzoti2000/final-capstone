Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :readings, only: [:create, :index, :show]
      resources :addreadings, only: [:create]
      get '/readings/user/:id', to: 'readings#list_readings_by_user'
      get '/user/:user_id/reading/:id', to: 'readings#list_reading'
      resources :users, only: [:create, :index]
      get 'users/:id', to: 'users#find_user'
      delete 'users/sessions', to: 'users/sessions#destroy'
      namespace :users do
        resources :sessions, only: [:create]
      end
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
