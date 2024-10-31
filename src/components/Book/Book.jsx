import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6 border">
      <figure className="bg-blue-200 py-8 rounded-2xl">
        <img className="h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-2">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-xs bg-green-200 text-green-600"
            >
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-semibold">
          By: <span className="font-bold">{author}</span>
        </p>
        <div className="border-t-2 border-gray-500 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
