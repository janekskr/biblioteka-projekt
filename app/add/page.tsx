"use client";
import { useForm } from "react-hook-form";

import { Library, Reader, libraryInstance } from "@/lib/api";

type Credentials = {
  firstName: string;
  lastName: string;
  age: number;
};

export default function AddUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();

  const onSubmit = async ({ firstName, lastName, age }: Credentials) => {
    try {
      const reader = new Reader(firstName, lastName, +age); // Create a new Reader instance
      libraryInstance.addReader(reader); // Add the reader to the library
      console.log("Reader created:", libraryInstance.books);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="mt-[100px] text-black px-24">
      <h2 className="text-2xl font-bold mb-4">Dodaj nowego użytkownika</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
          <label htmlFor="firstName" className="block">Imię:</label>
          <input id="firstName" type="text" {...register('firstName', { required: true })} className="border border-gray-300 rounded px-3 py-2 w-full" />
          {errors.firstName && <p className='text-red-500'>Pole jest wymagane.</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block">Nazwisko:</label>
          <input id="lastName" type="text" {...register('lastName', { required: true })} className="border border-gray-300 rounded px-3 py-2 w-full" />
          {errors.lastName && <p className='text-red-500'>Pole jest wymagane.</p>}
        </div>

        <div>
          <label htmlFor="age" className="block">Wiek:</label>
          <input id="age" type="number" {...register('age', { required: true })} className="border border-gray-300 rounded px-3 py-2 w-full" />
          {errors.age && <p className='text-red-500'>Pole jest wymagane.</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Book</button>
      </form>
    </main>
  );
}
