import { libraryInstance } from "@/lib/api";
import React from "react";

export default function ProfileDetails({ params }: { params: { id: string } }) {
  const userId = +params.id;
  const user = libraryInstance.findUserById(userId);

  if (!user) return <p>Nie znaleziono użytkownika</p>;
  return (
    <div className="rounded-[40px] bg-cyan-100">
      {/* <Image src="/profile.png" width={50} height={50} alt="Zdjęcie profilowe" /> */}
      <p className="text-center">Imię: {user.firstName}</p>
      <p className="text-center">Nazwisko: {user.lastName}</p>
      <p className="text-center">Wiek: {user.age}</p>
      <p className="text-center">
        Wypożyczone książki:{" "}
        {user.borrowedBooks.length > 0
          ? user.borrowedBooks.map((user) => user.title + ", ")
          : "Brak wypożyczonych książek"}
      </p>
    </div>
  );
}
