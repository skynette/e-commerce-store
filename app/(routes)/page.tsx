import getProducts from '@/actions/get-products';
import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboards = await getBillboard("316ba45a-a64e-4805-8d05-7a1e382a9059")
    const billboard = billboards[0]
    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />
                <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage