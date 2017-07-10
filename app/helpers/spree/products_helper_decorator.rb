Spree::ProductsHelper.class_eval do
    def sale_price(product)
        product.price
    end

    def related_products(orignal, max = 8)
        products = [];
        unless orignal.taxons.blank?
            orignal.taxons.each do |taxons|
                taxon_preview(taxons).each do |product|
                    products << product unless products.size > max || orignal == product
                    break if products.size >= max
                end
            end
        end
        products.uniq
    end
    def first_level_taxons(taxons)
        taxons.where(parent_id: 1).or(taxons.where(parent_id: 5))
    end
end