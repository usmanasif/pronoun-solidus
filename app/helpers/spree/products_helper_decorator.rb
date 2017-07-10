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
    def first_level_taxon(taxon)
        taxons = taxon.permalink.split('/')
        if taxons.size < 2 then '' else taxons[1] end
    end
end