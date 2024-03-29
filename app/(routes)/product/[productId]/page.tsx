import getProducts from '@/actions/get-products'
import getProduct from '@/actions/get-product'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import Gallery from '@/components/gallery'
import Info from '@/components/info'
import { Metadata } from 'next';
interface Params {
    productId: string;
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const product = await getProduct(params.productId)


    return {
        title: `${product.name} - Gift Shop`,
        description: `${product.name} - Shop for ${product.name} on Gift`,
        category: product.category.name,
        keywords: product.category.name,
    };
}

interface ProductPageProps {
    params: {
        productId: string
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProduct(params.productId)
    const suggestedProducts = await getProducts({
        categoryId: product.category.id,
    })
    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 p-10 sm:px-6 lg:px-8'>
                    <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                        {/* gallery */}
                        <Gallery images={product.images} />
                        <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                            {/* info */}
                            <Info product={product} />
                        </div>
                    </div>
                    <hr className='my-10' />
                    <ProductList title='Related Items' items={suggestedProducts} />
                </div>
            </Container>
        </div>
    )
}