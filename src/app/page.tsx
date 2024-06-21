"use client"
import React, {useState} from "react";
import { listKhodam } from "@/components/Khodam";
import Link from "next/link";

const Page = () => {
  const [random, setRandom] = useState('');

  const getRandomItem = () => {
    const randomItem = Math.floor(Math.random() * listKhodam.length);
    return listKhodam[randomItem];
  };

  const checkKhodam = (event: any) => {
    event.preventDefault(); 

    const display = document.getElementById('display');
    const username = (document.getElementById('userName') as HTMLInputElement | null)?.value;

    const newRandom = getRandomItem();
    setRandom(newRandom);

    let text = `${username}, Khodam kamu adalah ${newRandom}`;
    if (!display) return;
    if (!username) return;
    display.textContent = text;
  };

  return (
    <main className="flex justify-center items-center w-full h-screen px-4 md:px-40">
      <div className="container grid grid-cols-1 gap-4 border-4 border-zinc-200 px-16 pt-4 pb-28 rounded-xl shadow-md shadow-white">
        <h1 className="flex justify-center font-semibold text-3xl md:text-4xl pb-8 text-white">Check Khodam</h1>
        <form className="grid grid-cols-1 gap-4" onSubmit={checkKhodam}>
          <input 
            type="text" 
            id="userName"
            placeholder="Tulis nama kamu di sini"
            className="py-2 px-4 border border-zinc-400 rounded-full bg-transparent text-white text-semibold"
            required
          />
          <button type="submit" id="checkkBtn" className="bg-indigo-500 text-semibold mx-16 md:mx-0 text-white hover:bg-indigo-800 border border-zinc-100 py-2 rounded-xl">CHECK</button>
        </form>
        <div id="display" className="text-2xl mt-10 flex justify-center md:text-4xl font-bold text-white tracking-wide"></div>
      </div>
      <div className="absolute bottom-0 text-md text-white font-semibold">
        <Link href={"https://trakteer.id/terrygt"}><span className="text-red-500">Trakteer </span>coffee</Link>
        <p>Created by <span className="text-blue-500">Terry</span></p>
      </div>
    </main>
  )
}

export default Page;
