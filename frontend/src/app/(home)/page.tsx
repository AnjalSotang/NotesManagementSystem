import Image from "next/image";
import NoteCard from "./components/NoteCard";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/notes`);
  // const response = await fetch(`http://localhost:4000/api/notes`, { cache: 'no-store' }
  // )
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  const {note} = await response.json();
  console.log("Fetched notes:", note);
  
  return (
    <>
    <NoteCard notes={note}/>
    </>
  );
}
