"use client";

import { libraryInstance } from "@/lib/api";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="mt-[170px] text-black px-24 w-full self-start">
      <h1 className="text-3xl font-bold mb-[60px]">Lista użytkowników:</h1>
      <div className="grid grid-cols-2 gap-[50px]">
        {libraryInstance.readers.map((x) => (
          <div
            key={x.id}
            className="rounded-[40px] flex gap-[50px] bg-slate-100 p-[40px] overflow-hidden items-center shadow-md"
          >
            <Image
              src="/profile.png"
              alt="zdjęcie profilowe"
              width={150}
              height={150}
              className="rounded-full aspect-square"
            />
            <div className="gap-[10px] flex flex-col">
              <p className="text-2xl font-bold">
                {x.firstName} {x.lastName}
              </p>
              <p className="text-xl font-medium">{x.age} lat</p>
              <div className="flex gap-[20px] mt-[7px]">
                {x.borrowedBooks.length > 0 ? (
                  x.borrowedBooks.map((x) => (
                    <p className="p-2 px-4 text-blue-400 text-center font-semibold rounded-[40px] border-blue-400 border-2">
                      {x.title}
                    </p>
                  ))
                ) : (
                  <p className="p-2 px-4 text-red-400 text-center font-semibold rounded-[40px] border-red-400 border-2">Brak wypożyczonych książek</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
