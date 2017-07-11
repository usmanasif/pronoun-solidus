Spree::Product.class_eval do
  default_scope {order("spree_products.priority ASC")}
  after_create :some_method
  def some_method
    puts "im done"
    puts "================================="
    puts "================================="
    puts self.inspect
    puts "================================="
    puts "================================="
    puts "================================="
  end
end
