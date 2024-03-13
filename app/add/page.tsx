"use client";
import { useForm } from "react-hook-form";

import { Library, Reader, libraryInstance } from "@/lib/api";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

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
    reset
  } = useForm<Credentials>();

  const router = useRouter()

  const onSubmit = async ({ firstName, lastName, age }: Credentials) => {
    try {
      const reader = new Reader(firstName, lastName, +age)
      libraryInstance.addReader(reader)
      toast.success("Pomyślnie dodano czytelnika 🤓📖")
      router.push("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      reset()
    }
  };

  return (
    <div className="w-[70%] mt-[84px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold mb-4">Dodaj nowego użytkownika</h1>
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
    </div>
  );
}
