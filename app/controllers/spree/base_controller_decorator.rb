Spree::BaseController.class_eval do
	before_action :get_links


	def get_links
		@active_links = Spree::NavLink.where(active: true).order(:position)
	end

end