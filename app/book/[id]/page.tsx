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
      <p>Tytuł: <span className="font-bold">{element.title}</span></p>
      <p>Autor:  <span className="font-bold">{element.author}</span></p>
      <p>Rok: <span className="font-bold">{element.year}</span></p>
      <p>Dostępny: {element.available ? (<span className="font-bold text-green-700">Tak</span>) : <span className="font-bold text-red-700">Nie</span>}</p>
      <label htmlFor="select">Kto będzie dziś czytał? </label>
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
