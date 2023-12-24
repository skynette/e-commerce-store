import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    category?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.category,
            isFeatured: query.isFeatured,
        },
    });
    const response = await fetch(URL);
    console.log(response);
    return response.json();
}

export default getProducts;