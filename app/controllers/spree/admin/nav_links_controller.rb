module Spree
  module Admin
    class NavLinksController < ResourceController
      def index
        @nav_links = Spree::NavLink.page(params[:page] || 1).per(50)
      end
    end
  end
end