import React, { useState, useEffect } from "react";
import { Note } from "./Note";

export interface NoteFormProps {
  onSubmit: (note: Note) => void;
  onEdit: (note: Note) => void;
  noteToEdit?: Note;
}

function NoteForm({ onSubmit, noteToEdit, onEdit }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const innerHandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(noteToEdit) {
      onEdit({
        id: noteToEdit.id,
        title: title,
        content: content,
      });
    } else {
        onSubmit({
          id: crypto.randomUUID(),
          title: title,
          content: content,
        });
    }
    setContent("");
    setTitle("");
  };

  return (
    <div
      className="layout-column align-items-center justify-content-start"
      data-testid="note-manager"
    >
      <div className="card w-200 pt-30 pb-8 mt-15 mb-15">
        <form onSubmit={(e) => innerHandlerSubmit(e)} data-testid="note-form">
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <label className="form-title-label">Title:</label>
            <input
              type="text"
              placeholder="Enter note title"
              className="form-title-input"
              data-testid="note-title-input"
              autoComplete="off"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </section>
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <label className="form-content-label">Content: </label>
            <input
              type="text"
              placeholder="Enter note content"
              className="form-content-input"
              data-testid="note-content-input"
              autoComplete="off"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </section>
          {(title && content) || title.length > 0 || content.length > 0 ? (
            <button className=" p-1 bg-blue-300" formAction="submit">
              {noteToEdit ? "Update" : "Add"}
            </button>
          ) : (
            <button disabled={true}>Add</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default NoteForm;
