import { useEffect, useState } from 'react'

import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Link, useParams, useNavigate } from 'react-router-dom'
import { useCreateDate } from '../comp/useCreateDate';


const EditNote = ({ notes, setNotes }) => {

    const { id } = useParams();

    const note = notes.find(note => note.id == id);


    const [title, setTitle] = useState(note.title);
    const [details, setDetails] = useState(note.details);
    const date = useCreateDate()

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();

        if (title && details) {
            const newNote = { ...note, title, details, date };

            const newNotes = notes.map((item) => {
                if (item.id == id) {
                    item = newNote;
                }
                return item;
            });
            setNotes(newNotes);
        }
        navigate("/");
    }


    const handleDelete = () => {
        const newNotes = notes.filter((note) => note.id != id);
        setNotes(newNotes);

        navigate("/");
    }


    return (
        <section className='w-full min-h-screen h-auto flex flex-col items-center'>
            <header className='create-note-header w-full flex items-center justify-between p-5'>
                <Link to="/" className="text-white text-3xl bg-zinc-600 p-2 rounded-md"><IoIosArrowBack /></Link>
                <button onClick={handleDelete} className="text-white text-3xl bg-red-500 p-2 rounded-md"><RiDeleteBin6Line /></button>
            </header>
            <form onSubmit={handleForm} className='w-full flex flex-col items-start gap-4
            p-5'>
                <input value={title} onChange={(e) => setTitle(e.target.value)}
                    type="text" placeholder='Title' autoFocus className='w-full border-0 py-4 px-3 outline-none
                    text-2xl text-black bg-transparent border-b border-zinc-700'
                />
                <textarea rows="10" value={details} onChange={(e) => setDetails(e.target.value)}
                    placeholder='Note Details...' className="w-full border-0 py-4 px-3 outline-none
                text-lg text-black bg-transparent border-b border-zinc-700"></textarea>
                <button onClick={handleForm} type='submit' className="text-white text-lg bg-gray-950 py-2 px-4 m-auto rounded-md">Save</button>
            </form>
        </section>
    )
}

export default EditNote