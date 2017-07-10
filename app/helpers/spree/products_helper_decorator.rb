Spree::ProductsHelper.class_eval do
    def sale_price(product)
        product.price
    end

    def related_products(product, max = 4)
        products = [];
        unless product.taxons.blank?
           product.taxons.each do |taxons|
            taxon_preview(taxons).each do |product|
                products << product unless products.size > max
                break if products.size >= max
            end
           end
        end
        products
    end
end