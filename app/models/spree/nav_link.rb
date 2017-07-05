module Spree
  class NavLink < ActiveRecord::Base
    acts_as_list

    default_scope { order(:position) }

  end
end