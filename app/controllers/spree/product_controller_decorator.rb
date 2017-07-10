Spree::ProductsController.class_eval do
  before_action :sanitize_page_params

  def sanitize_page_params
    params[:tiles] ||= true
    params[:layout] ||= 4
    params[:layout] = params[:layout].to_i
  end

  def show
    @variants = @product.
    variants_including_master.
    display_includes.
    with_prices(current_pricing_options).
    includes([:option_values, :images])

    @product_properties = @product.product_properties.includes(:property)
    @taxon = Spree::Taxon.find(params[:taxon_id]) if params[:taxon_id]
    @product_option_types = @product.product_option_types
  end
end
