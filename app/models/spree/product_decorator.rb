Spree::Product.class_eval do
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
