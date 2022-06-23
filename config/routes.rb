Rails.application.routes.draw do
  
  resources :bids
  resources :products
  resources :listings
  resources :payments
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/product", to: "products#create"
  get "/product/pc", to: "products#pc"
  get "/product/motherboard", to: "products#motherboard"
  get "/product/cpu", to: "products#cpu"
  get "/product/gpu", to: "products#gpu"
  get "/product/memory", to: "products#memory"
  get "/product/storage", to: "products#storage"
  get "/product/powersupply", to: "products#power_supply"
  get "/product/other", to: "products#other"
  get "/product", to: "products#show"
  delete "product/:id", to: "products#destroy"
  get "/product/search/:search_term", to: "products#search"
  get "/product/:id", to: "products#display"
  

  post "/bid", to: "bids#create"
  get "/bid", to: "bids#show"
  delete "/bid/:id", to: "bids#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
