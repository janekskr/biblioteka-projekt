"use client";

import { libraryInstance } from "@/lib/api";
import Link from "next/link";

export default function HomeScreen() {
  console.log();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/ksiegarnia.jpg')] bg-contain bg-no-repeat bg-center">
      <div className="book-container">
        {libraryInstance.books
          .filter((x) => x.available)
          .map((book) => (
            <Link
              href={"book/" + book.id}
              className="flex items-center justify-between flex-col text-white p-2"
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
    </main>
  );
}
