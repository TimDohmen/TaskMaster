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
        <div class="col-12 col-lg-3 m-1 justify-content-center border box">
<i class="fa fa-trash trashcan" onclick="app.controllers.listController.deleteList(${index})"></i>
        
        <h3 class="text-center">${this.title}</h3>  
        <ul class="smallText">`
        template += this.drawChores(index)
        template += ` </ul>
        <form onsubmit="app.controllers.listController.addChore(event, ${index})" id="choreForm${index}" class="form-inline choreForm justify-content-center"> 
        <div class="form-group">
        <label for="chore"></label>
        <input type="text" class="form-control" name="chore"  placeholder="Chores To Do" required>
        </div>
        
        <button type="submit" class = "btn btn-info float-right"> Add  </button>
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
