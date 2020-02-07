import ListService from "../Services/ListService.js";


//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ''
    _listService.List.forEach((list, index) => {
        template += list.getTemplate(index)
    });
    document.querySelector("#lists").innerHTML = template
}


//Public
export default class ListController {



    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }


    makeList(event) {
        event.preventDefault()
        let newList = {
            title: event.target.title.value
        }
        _listService.makeList(newList)
        listForm.reset()
        _drawLists()
    };
    addChore(event, listIndex) {
        let choreForm = document.querySelector("#choreForm" + listIndex)

        event.preventDefault()
        let newChore = event.target.chore.value
        _listService.addChore(newChore, listIndex)
        choreForm.reset()
        _drawLists()
    }

    deleteList(index) {
        _listService.deleteList(index, _drawLists)
        _drawLists()
    }
    deleteChore(listIndex, choreIndex) {
        _listService.deleteChore(listIndex, choreIndex, _drawLists)
        _drawLists()
    }

}

    //TODO: Your app will need the ability to create, and delete both lists and listItems
