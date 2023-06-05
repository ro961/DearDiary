import { useState } from 'react'

import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom'
import { useCreateDate } from '../comp/useCreateDate';

const CreateNote = ({ setNotes }) => {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const date = useCreateDate();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && details) {
            let note = {
                id: Math.random() * 100,
                title,
                details,
                date
            }

    
            setNotes(prevNotes => [note, ...prevNotes]);
            navigate("/");
        }
    }

    return (
        <section className='w-full min-h-screen bg-slate-200 h-auto flex flex-col items-center'>
            <header className=' w-full flex items-center justify-between p-5'>
                <Link to="/" className="text-white text-3xl bg-gray-700 p-2 rounded-md"><IoIosArrowBack /></Link>
            
            </header>
            <form onSubmit={handleSubmit} className='create-note-form w-full flex flex-col items-start gap-4
            p-5'>
                <input value={title} onChange={(e) => setTitle(e.target.value)}
                    type="text" placeholder='Title' autoFocus className='w-full border-0 py-4 px-3 outline-none
                    text-2xl text-black bg-transparent border-b border-gray-950'
                />
                <textarea rows="10" value={details} onChange={(e) => setDetails(e.target.value)}
                    placeholder='Description' className="w-full border-0 py-4 px-3 outline-none
                text-2xl text-black bg-transparent border-b border-zinc-700"></textarea>
                <button onClick={handleSubmit} className="text-white text-lg bg-gray-700 m-auto mt-10 p-2 w-32 rounded-md">Add Note</button>
            </form>
            
        </section>
    )
}

export default CreateNote