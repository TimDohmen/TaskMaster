import List from "../models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    addChore(newChore, listIndex) {
        _state.lists[listIndex].chore.push(newChore)
    }
    deleteChore(listIndex, choreIndex) {
        if (window.confirm("Do you really want to delete your chore")) {
            _state.lists[listIndex].chore.splice(choreIndex, 1)
        }
    }
    deleteList(index) {
        if (window.confirm("Do you really want to delete your list?")) {
            _state.lists.splice(index, 1)
        }
    }

    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?

    makeList(newList) {
        _state.lists.push(new List(newList))
        console.log(_state.lists)
    }

    get List() {
        return _state.lists.map(list => new List(list))
    }


    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
