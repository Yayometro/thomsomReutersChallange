
import { Note, noteId } from "./Note";

interface NoteProps {
  note: Note;
  onDelete: (id: noteId) => void;
  onEdit: (note: Note) => void;
}

function NoteItem({ note, onDelete, onEdit }: NoteProps) {
  return (
    <div className="w-[100px] h-[50px] flex ">
      <div className="content-div flex gap-3">
        <p>{note.title}</p>
        <p>{note.content}</p>
      </div>
      <div className="btn-sec">
        <button className="bd-red-500" onClick={() => onDelete(note.id)}>Delete</button>
        <button className="bd-green-500" onClick={() => onEdit(note)}>Edit</button>
      </div>
    </div>
  );
}

export default NoteItem;
