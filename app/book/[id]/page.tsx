"use client";

import { libraryInstance } from "@/lib/api";
import { useState } from "react";

export default function BookDetail({ params }: { params: { id: string } }) {
  const [selectedReaderId, setSelectedReaderId] = useState<number>(1);
  const bookId = +params.id;
  const element = libraryInstance.books.find((x) => x.id === bookId);
  const readerBorrowedBook = libraryInstance.hasBorrowedBook(
    selectedReaderId,
    bookId
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReaderId(+event.target.value);
  };

  const handleBorrowClick = () => {
    libraryInstance.loanBook(selectedReaderId, element!)
  };


  if (!element) return <p>Brak ksiązki</p>;
  

  return (
    <main className="mt-[100px] text-black px-24">
      <p>Tytuł: {element.title}</p>
      <p>Autor: {element.author}</p>
      <p>Rok: {element.year}</p>
      <p>Dostępny: {element.available ? "Tak" : "Nie"}</p>
      <label htmlFor="select">Wybierz czytelnika:</label>
      <select id="select" onChange={handleSelectChange}>
        <option value="">-</option>
        {libraryInstance.readers.map((reader) => (
          <option key={reader.id} value={reader.id}>
            {reader.firstName} {reader.lastName}
          </option>
        ))}
      </select>
        <button onClick={handleBorrowClick}>Wypożycz</button>
    </main>
  );
}
