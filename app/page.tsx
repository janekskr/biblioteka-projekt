"use client"

import { libraryInstance } from "@/lib/api";
// import { generateRandomColor } from "@/lib/utils";
import Link from "next/link";

export default function HomeScreen() {

  return (
      <div className="h-[70%] flex gap-[30px] border-b-[50px] rounded-xl justify-center border-b-orange-950 w-[80%]">
        {libraryInstance.books
          .filter((x) => x.available)
          .map((book) => (
            <Link
              href={"book/" + book.id}
              className={`flex items-center justify-between p-5 flex-col w-[200px] text-white h-full bg-[#348652]`}
              key={book.id}
            >
              <p className="font-semibold text-center text-lg">{book.publisher}</p>
              <p className="rotate-90 font-semibold text-3xl text-center">{book.title}</p>
              <div className="flex flex-col items-center">
                <p className="font-medium">{book.author}</p>
                <p className="text-sm">{book.year}</p>
              </div>
            </Link>
          ))}
      </div>
  );
}