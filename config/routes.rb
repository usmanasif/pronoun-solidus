Rails.application.routes.draw do
  # This line mounts Spree's routes at the root of your application.
  # This means, any requests to URLs such as /products, will go to Spree::ProductsController.
  # If you would like to change where this engine is mounted, simply change the :at option to something different.
  #
  # We ask that you don't use the :as option here, as Spree relies on it being the default of "spree"
  root to: 'pages#home'
  mount Spree::Core::Engine, at: '/shop'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Spree::Core::Engine.routes.draw do
  namespace :admin do
    resources :nav_links do
      collection do
        post :update_positions
      end
    end
    get '/admin_users', :to => 'users#admin_users', :as => "admin_users"
  end
end