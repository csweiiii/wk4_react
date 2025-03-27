import books from '../json/books.json';

export default function BookDetail({ book }) {
    const item = books.find((item) => item.ID === book.ID);

    return (
        <div className="book-detail">
            <div className="card bg-[#DCDDDF] lg:card-side shadow-sm flex justify-evenly">
                <figure>
                    <img src={item.cover} alt={item.title} className="rounded-xl w-full h-98 object-cover" />
                </figure>
                <div className="card-body pl-20">
                    <h1 className="card-title text-2xl">{item.title}</h1>
                    <p className="text-xl text-gray-800 text-left mb-4">{item.author}</p>
                    <p className="text-xl text-left flex-wrap w-200 mb-4">{item.summary.substring(0, 300)}</p>
                    <p className="text-xl text-gray-800 text-left mb-4">Price: ${item.price}</p>
                    <p className="text-xl text-gray-800 text-left mb-4">Stock: {item.stock}</p>

                    {/* 无功能的 Buy Now 按钮，鼠标悬停时改变颜色 */}
                    <button className="btn btn-primary border-2 border-[#444d60] text-[#444d60] hover:bg-[#444d60] hover:text-white transition-all duration-300 px-6 py-2 rounded-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
