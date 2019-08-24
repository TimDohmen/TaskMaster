import List from "../models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    addChore(newChore, listIndex) {
        _state.lists[listIndex].chore.push(newChore)
        this.saveLists()
    }
    deleteChore(listIndex, choreIndex, callback) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    _state.lists[listIndex].chore.splice(choreIndex, 1)
                    this.saveLists()
                    callback()
                    swal("Poof! Your chore has been deleted!", {
                        icon: "success",
                    })
                        ;
                } else {
                    this.saveLists()
                    swal("Your imaginary file is safe!");
                }
            });

        // if (window.confirm("Do you really want to delete your chore")) {
        //     _state.lists[listIndex].chore.splice(choreIndex, 1)
        // }
        // this.saveLists()
    }
    deleteList(index, callback) {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    _state.lists.splice(index, 1)
                    this.saveLists()
                    callback()
                    swal("Poof! Your list has been deleted!", {
                        icon: "success",
                    })
                        ;
                } else {
                    this.saveLists()
                    swal("Your imaginary file is safe!");
                }
            });



        // if (window.confirm("Do you really want to delete your list?")) {
        //     _state.lists.splice(index, 1)
        // }
        // this.saveLists()
    }

    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?

    makeList(newList) {
        _state.lists.push(new List(newList))
        console.log(_state.lists)
        this.saveLists()
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
