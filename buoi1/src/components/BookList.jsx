import React, {useEffect, useState} from "react";
import { getBooks } from "../apis/book.api";
import { bookService } from "../services/bookService";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const getThumbnailUrl = (book) => {
        if (!book?.thumb_url) return "";
        if (book.thumb_url.startsWith("http")) return book.thumb_url;
        return `https://otruyenapi.com/uploads/comics/${book.thumb_url}`;
    };
    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await bookService.getAllBooks();
                setBooks(response.data.items);
                console.log(response.data.items);
            } catch (error) {
                console.error("Error fetching books:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, []);
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching books.</p>;
    return (
        <div>
            <h2>Book List</h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
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
            </ul>
        </div>
    );
};

export default BookList;