export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.title = data.title
        this.chore = data.chore || []
    }
    getTemplate(index) {
        let template =
            `
        <div class="col-12-sm col-4-md m-1 justify-content-center border box">
        <h3 class="text-center">${this.title}</h3>  
        <ul class="smallText">`
        template += this.drawChores(index)
        template += ` </ul>
        <form onsubmit="app.controllers.listController.addChore(event, ${index})" class="form-inline justify-content-center"> 
        <div class="form-group">
        <label for="chore"></label>
        <input type="text" class="form-control" name="chore" placeholder="Chores To Do" required>
        </div>
        <button type="submit" class = "btn btn-info float-right"> Add
        <button type ="button" onclick="app.controllers.listController.deleteList(${index})" class ="btn btn-danger float-left removeButton" > Remove List </button>
             </button>
                </form>
               </div>
`
        return template
    }
    drawChores(listIndex) {
        let choreTemplate = ""
        this.chore.forEach((c, choreIndex) => {
            choreTemplate += `<li>${c}<span onclick="app.controllers.listController.deleteChore(${listIndex}, ${choreIndex})" class = "remover">  X  </span></li>`
        });
        return choreTemplate
    }
}
