Spree::ProductsController.class_eval do
  before_action :sanitize_page_params
  def index
    super
  end

  def sanitize_page_params
    puts "-----Sanitizing Page Params--------"
    params[:tiles] ||= true
    params[:layout] ||= 4
    params[:layout] = params[:layout].to_i
    puts "-----Sanitizing Page Params End--------"
  end
end
