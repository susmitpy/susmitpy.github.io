import { BooksData } from '@/lib/data';

export default function RecommendedBooks() {
    return (
        <section id="recommended-books" className="py-8 bg-[#2f2f2f] min-h-[400px]">
            <span className="block text-center text-2xl font-bold py-2 text-[#40E0D0]">{BooksData.heading}</span>
            <div className="max-w-4xl mx-auto px-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {BooksData.books.map((book, index) => (
                        <li
                            key={index}
                            className="text-white text-lg font-montserrat bg-gradient-to-r from-[#252525] to-[#1f1f1f] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            {book}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}