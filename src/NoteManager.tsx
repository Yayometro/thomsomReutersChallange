import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteTable from './NoteTable';
import { Note, noteId } from './Note';

function NoteManager(){
    const [notes, setNotes] = useState<Note[]>([]);
    const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

    const handleAddNote = (note: Note) => {
        setNotes([...notes, note]);
    };
    
   const handleEditNote = (note: Note) => {
    setNotes(notes.map(n => n.id === note.id ? note : n));
    setNoteToEdit(null);
   }
    const handleDeleteNote = (id: noteId) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

  return (
    <div className='align-items-center justify-content-start' data-testid="note-manager">
        <NoteForm onSubmit={handleAddNote} noteToEdit={noteToEdit || undefined} onEdit={handleEditNote} />
        <NoteTable notes={notes} onDelete={handleDeleteNote} onEdit={setNoteToEdit}/>
    </div>
  )
}

export default NoteManager