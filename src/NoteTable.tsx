import React from 'react'
import { Note, noteId } from './Note'
import NoteItem from './NoteItem'


export interface NoteProps {
    notes: Note[]
    onDelete: (id: noteId) => void
    onEdit: (note: Note) => void
  }

function NoteTable({notes, onDelete, onEdit}: NoteProps) {

  return (
    <div className="card w-30 pt-30 pb-8">
        <table>
            <thead>
                <tr>
                    <th colSpan={4}>Notes</th>
                </tr>
            </thead>
            <tbody data-testid="notes-list">
                {
                    notes.length < 1 ? "No notes created..." : (
                    notes.map((note) => (
                            <NoteItem
                                key={note.id}
                                note={note}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        ))
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default NoteTable