Complete the components as shown to pass the test cases. Certain core React functionalities are already implemented. The application has four functional components: NoteManager.tsx, NoteForm.tsx, Noteltem.tsx, and
NoteTable. tsx, where all the functionalities will be implemented.

The component must have the following functionalities:
	• ﻿﻿The type of input for the Note Title should be text.
	• ﻿﻿The initial view should have no notes in the list.
	• ﻿﻿Clicking the Add Note button should:
		○ Add a note in the notes list with the Note Title, Note Content, an Edit button, and a Delete button respectively.
		○ ﻿﻿Each note must have a unique ID, although you do not need to worry about persisting anything during a page refresh
		○ Do not add a note to the list if the input fields for either Note Title or Note Content are empty then keep the _Add Note_ button disabled.
		○ reset the input fields for the Note Title and Note Content to empty after adding a valid note to the list.
	• ﻿﻿Clicking the Delete button should delete the corresponding note from the list.
	• ﻿﻿Clicking the Edit button should:
		○ populate the input fields with the selected note's title and content.
		○ change the text of the Add Note button to Update.
		○ should maintain the order of notes and update the note with new values after

