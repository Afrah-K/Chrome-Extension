//fix delete button (only allows chronically ordered deletion)
//add scroll for popup
//add edit button functionality

//create-newNote <-create new note onclick opens "#newNote"
//newNote <- if button pressed save and hide "newNote" 

const notes = [{"note": "note name", "text_Area": "note description"}];
const notesStr = JSON.stringify(notes);

console.log(notes);
console.log(notesStr);

document.querySelector('#create-newNote').addEventListener('click', function(){
    document.querySelector('#newNote').style.display='block';
    document.querySelector('#sample').style.display='None';
    document.querySelector('#newCardsList').style.display='None';
    document.querySelector('.popup').style.height='300px';
});

document.querySelector('#newNote button').addEventListener('click', function(){

    var NoteName = document.querySelector("#newNote input").value;
    var NoteDescription = document.querySelector("#newNote textarea").value;

    if(NoteName != "" || NoteDescription != ""){
        var notes = localStorage.getItem('saved-notes');
        var notesArr = JSON.parse(notes);
        notesArr.push({"note": NoteName, "text_Area": NoteDescription});
        saveNotes(notesArr);
        fetchItems();   
    };
});



function fetchNotes(){

    const NotesList = document.querySelector('#newCardsList');
    NotesList.innerHTML = '';
    var newNoteHTML = '';

    try{
        var notes = localStorage.getItem('saved-notes');
        var notesArr = JSON.parse(notes);

        for(var i = 0; i < notesArr.length; i++){
            newNoteHTML += `<div data-index="${i}" class="card" style="width: 18rem; margin-top: 10px;"><input type="button" id="Delete-Note"  class="btn btn-dark" value = "-" style="position:absolute; top: 8px; right: 65px;"><input type="button" id="Submit-Note"  class="btn btn-dark") value = "Edit" style="position:absolute; top: 8px; right: 8px;"><div class="card-body" style="font-size: 14px;"><h5 class="card-title">${notesArr[i].note}</h5><p class="card-text">${notesArr[i].text_Area}</p></div></div>`;   
        }

        NotesList.innerHTML = newNoteHTML;

        var NoteListdiv = document.querySelectorAll('div');
        for(var i = 0; i < NoteListdiv.length; i++){
            NoteListdiv[i].querySelector('#Delete-Note').addEventListener('click', function(){    
                var index = this.parentNode.dataset.index;    
                console.log(index);
                deleteNote(index);
            });
        }

    }catch(e){
        //create a default list of notes...
    }
    
}
function editNote(){

}

function deleteNote(index){
    var notes = localStorage.getItem('saved-notes');
    var notesArr = JSON.parse(notes);

    notesArr.splice(index, 1);
    saveNotes(notesArr);

    document.querySelector('[data-index="'+index+'"]').remove;
}

function saveNotes(object){

    var string = JSON.stringify(object);
    localStorage.setItem('saved-notes', string);

}

fetchNotes();

//function SubmitNote(index){
   // var notes = localStorage.getItem('saved-notes');
   // var notesArr = JSON.parse(notes);
//}

/*document.getElementById('cardadder').onclick = function(){
    var value = document.getElementById('saveLine').value;
    alert(value);
}
$("#card-adder").click(function(){
    $("#newCardsList").append("<p>Appended text</p>");
  });
  

newNoteHTML += `<div data-index="${i}" class="card" style="width: 18rem;"><input type="button" id="Delete-Note"  class="btn btn-dark" value = "-" style="position:absolute; top: 8px; right: 8px;"><div class="card-body" style="font-size: 14px;"><h5 class="card-title">${notesArr[i].note}</h5><p class="card-text">${notesArr[i].text_Area}</p></div></div>`;  */