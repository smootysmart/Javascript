class Todo{
    static runningId = 1;
    constructor(id , description , done){
        this.id !== undefined ? false : runningId++
        this.description = description;
        this.done = done
    }
    getTodo() {
        return {
            id : this.id,
            description : this.description,
            done : this.done
        }
    }
    setDescription(newDesc){
        this.description = newDesc;
    }

    setDone(status){
        this.done = status
    }
}