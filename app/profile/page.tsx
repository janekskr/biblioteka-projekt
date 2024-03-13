"use client";

import { libraryInstance } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  console.log(libraryInstance.readers);
  return (
    <div className="mt-[100px] text-black px-24 gap-20 flex-col flex">
      {libraryInstance.readers.map((x) => (
        <div key={x.id} className="rounded-[40px] bg-cyan-100">
          {/* <Image src="/profile.png" width={50} height={50} alt="Zdjęcie profilowe" /> */}
          <p className="text-center">Imię: {x.firstName}</p>
          <p className="text-center">Nazwisko: {x.lastName}</p>
          <p className="text-center">Wiek: {x.age}</p>
          <p className="text-center">
            Wypożyczone książki:{" "}
            {x.borrowedBooks.length > 0
              ? x.borrowedBooks.map((x) => x.title + ", ")
              : "Brak wypożyczonych książek"}
          </p>
        </div>
      ))}
    </div>
  );
}
