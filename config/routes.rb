Rails.application.routes.draw do
  root to: "static_pages#root"
  get '/favorites' => "static_pages#favorites"
  get '/search' => "static_pages#search", as: :search_gems
end
