export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
this.title = data.title
this.chore = data.chore || []
    }

    getTemplate(index){
        let template = 
        `
        <div class="col-4 justify-content-center">
                <h1>${this.title}</h1>
            
        `
    template += this.drawChores(index)
    template +=  ` <form onsubmit="app.controllers.listController.addChore(event, ${index})"> 
              <div class="form-group">
                <label for="chore"></label>
                <input type="text" class="form-control" name="chore" placeholder="Chores To Do" required>
                </div>
                <button type="submit">+</button>
              </form>
        </div>
`
        return template
    }

    drawChores(listIndex){
        let choreTemplate = ""
        this.chore.forEach((c, choreIndex) => {
            choreTemplate += `<li>${c}<span onclick="app.controllers.listController.deleteChore(${listIndex}, ${choreIndex})">  X  </span></li>`
        });
        return choreTemplate
    }
}
