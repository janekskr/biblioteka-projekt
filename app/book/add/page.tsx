"use client";

import { useForm } from "react-hook-form";
import { Book, libraryInstance } from "@/lib/api";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface BookFormData {
  title: string;
  author: string;
  year: number;
  count: number;
}

const AddBook: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>();

  const router = useRouter()

  const onSubmit = (data: BookFormData) => {
    try {
      const { title, author, year, count } = data;
      const newBook = new Book(title, author, year, count);
      libraryInstance.addBook(newBook);
      toast.success("Pomyślnie dodano książkę 🚀🚀🚀");
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <div className="w-[70%] mt-[84px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold mb-4">Dodaj nową książkę</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">
            Tytuł:
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.title && (
            <p className="text-red-500">Pole jest wymagane.</p>
          )}
        </div>
        <div>
          <label htmlFor="author" className="block">
            Autor:
          </label>
          <input
            id="author"
            type="text"
            {...register("author", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.author && (
            <p className="text-red-500">Pole jest wymagane.</p>
          )}
        </div>
        <div>
          <label htmlFor="year" className="block">
            Rok:
          </label>
          <input
            id="year"
            type="number"
            {...register("year", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.year && (
            <p className="text-red-500">Pole jest wymagane.</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
