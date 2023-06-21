import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import NoteItem from '../comp/NoteItem';


const Notes = ({ notes }) => {

    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState("");
    const [filterNotes, setFilterNotes] = useState(notes);


    const handleSearch = () => {
        setFilterNotes(notes.filter(note => {
            ///if (note.title.toLowerCase().match(text.toLowerCase())) {
                ///return note;
            }
        }))
    }

    useEffect(handleSearch, [text]);


    return (
        <section className='w-full min-h-screen flex flex-col items-center'>
            <header className=' w-full bg-slate-300 flex items-center justify-between p-5'>
                {!showSearch ? <h2 className='text-black font-bold text-5xl m-auto underline-offset-auto'>Dear<span className='text-gray-500'>Diary</span></h2>
                    :
                    <input type="text" value={text} onChange={(e) => {
                        setText(e.target.value);
                        handleSearch()
                    }} autoFocus placeholder='Keyword...' className='bg-white py-2 px-4 m-auto w-4/6
                rounded-md outline-none text-black' />}
                <button onClick={() => setShowSearch(!showSearch)} className='text-white text-3xl bg-zinc-500 p-2 rounded-md'>
                    {showSearch ? <MdClose /> : <CiSearch />}
                </button>
            </header>

            <div className='w-full flex flex-wrap justify-start items-start p-5 gap-6'>
                {filterNotes.length === 0 ?
                    <div className='m-auto mt-20'>
                        <img className="ml-32" src="/note.png" height={400} width={200} alt = ""/>
                        <h3 className='p-5 text-4xl font-serif hover:font-sans'>Start pouring your heart out...</h3>
                        </div>
                
                    :
                    filterNotes.map((note) => (
                        <NoteItem key={note.id} note={note} />
                    ))}
            </div>
            <Link to="/create-note" className='text-white text-2xl font-bold fixed bottom-5 right-5 bg-zinc-500 p-3 rounded-md
            '> <BsPlus /> </Link>
        </section>
    )
}

export default Notes
