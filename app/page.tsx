"use client"

import { Book, libraryInstance } from "@/lib/api";
import Link from "next/link";
import _ from 'lodash';

export default function HomeScreen() {
  const grouped = _.groupBy(libraryInstance.books, 'tag');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {Object.keys(grouped)
    .map((key) => (
      <div key={key} className="flex items-center justify-center space-x-8 border-solid border-gray-500 border-5">
        <h2 className="font-bold text-center">{key}:  </h2>
        {grouped[key]
        .filter((x) => x.available)
        .map((book) => (
          <Link
            href={"book/" + book.id}
            className="flex items-center justify-between flex-col text-black p-[35px] max-w-[75px]"
            key={book.id}
          >
            <p className="font-bold text-center">{book.title}</p>
            <div className="flex flex-col items-center">
              <p className="text-sm">{book.author}</p>
              <p className="text-[10px]">{book.year}</p>
            </div>
          </Link>
        ))}
      </div>
    ))}
  </main>
  );
}