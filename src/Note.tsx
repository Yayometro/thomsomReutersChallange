import React from 'react'

export type noteId = `${string}-${string}-${string}-${string}-${string}`;
export interface Note {
  id: noteId
  title: string
  content: string
}


function Note() {
  return (
    <div>
        
    </div>
  )
}

export default Note