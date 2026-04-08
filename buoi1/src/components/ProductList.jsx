import React, { useEffect, useState } from "react";
import { getBooks } from "../apis/book.api";

function ProductList() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [books, setBooks] = useState([]);

    const getThumbnailUrl = (book) => {
        if (!book?.thumb_url) return "";
        if (book.thumb_url.startsWith("http")) return book.thumb_url;
        return `https://otruyenapi.com/uploads/comics/${book.thumb_url}`;
    };

    const getBookItems = (response) => {
        if (Array.isArray(response?.data?.items)) return response.data.items;
        if (Array.isArray(response?.items)) return response.items;
        if (Array.isArray(response?.data?.data?.items)) return response.data.data.items;
        if (Array.isArray(response?.data)) return response.data;
        return [];
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                setIsError(false);
                setIsLoading(true);
                const response = await getBooks();
                const items = getBookItems(response);
                setBooks(items);
            }catch(error){
                console.error('Error fetching books:', error);
                setIsError(true);
                setBooks([]);
            }finally{
                setIsLoading(false);
            }
        };
        fetchProducts();
    },[]);

    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error fetching books.</p>;

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {books.map((book, index) => (
                <div key={book._id || book.slug || index} className="overflow-hidden rounded-xl bg-white shadow">
                    {book.thumb_url ? (
                        <img
                            src={getThumbnailUrl(book)}
                            alt={book.name}
                            className="aspect-[2/3] w-full object-cover"
                        />
                    ) : null}
                    <div className="p-3">
                        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                            {book.name || book.title}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-xs text-slate-500">{book.slug}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProductList;
