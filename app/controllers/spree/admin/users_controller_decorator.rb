Spree::Admin::UsersController.class_eval do
	# before_action :load_resource, only: [:admin_users,:index]

	def index
		users = Spree::User.admin.pluck(:id)
		@users = Spree::User.where("spree_users.id NOT IN (?)",(users.compact.flatten.map { |e|
			if e.is_a?(Integer)
				e
			else
				e.is_a?(self) ? e.id : raise("Element not the same type as #{self}.")
			end
				} << 0
			)
		)
		@users = @users.page(params[:page]).per(params[:per])
	end
	

	def admin_users
		@collection = Spree::User.where(nil)

      # note: we don't call authorize here as the collection method should use
      # CanCan's accessible_by method to restrict the actual records returned

      instance_variable_set("@#{controller_name}", @collection)
		@search=Spree::User.search(params[:q])
		# respond_with(@users) do |format|
  #     format.html
  #   end
  	@users = @users.admin.page(params[:page]).per(params[:per])
	end

end