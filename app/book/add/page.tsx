"use client"

import { useForm } from 'react-hook-form';
import { Book, libraryInstance } from '@/lib/api';

interface BookFormData {
  title: string;
  author: string;
  year: number;
  count: number;
}

const AddBook: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookFormData>();

  const onSubmit = (data: BookFormData) => {
    const { title, author, year, count } = data;
    const newBook = new Book(title, author, year, count);
    libraryInstance.addBook(newBook);
    console.log(libraryInstance.books)
  };

  return (
    <main className="mt-[100px] text-black px-24">
      <h2 className="text-2xl font-bold mb-4">Dodaj nową książkę</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">Tytuł:</label>
          <input id="title" type="text" {...register('title', { required: true })} className="border border-gray-300 rounded px-3 py-2 w-full" />
          {errors.title && <p className='text-red-500'>This field is required.</p>}
        </div>
        <div>
          <label htmlFor="author" className="block">Autor:</label>
          <input id="author" type="text" {...register('author', { required: true })} className="border border-gray-300 rounded px-3 py-2 w-full" />
          {errors.author && <p className='text-red-500'>This field is required.</p>}
        </div>
        <div>
          <label htmlFor="year" className="block">Rok:</label>
          <input id="year" type="number" {...register('year', { required: true })} className="border border-gray-300 rounded px-3 py-2 w-full" />
          {errors.year && <p className='text-red-500'>This field is required.</p>}
        </div>
        {/* <div>
          <label htmlFor="count" className="block">Count:</label>
          <input id="count" type="number" {...register('count', { required: true })} className="border border-gray-300 rounded px-3 py-2 w-full" />
          {errors.count && <p className='text-red-500'>This field is required.</p>}
        </div> */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Book</button>
      </form>
    </main>
  );
};

export default AddBook;
