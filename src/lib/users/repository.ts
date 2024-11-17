export class UserRepository {
    private dbUsers = {
        findAll: () => ([{
            id: 1,
            userName: "joseguti99",
            name: "José Gabriel",
            lastName: "Gutierrez",
            email: "josegutierrez@gmail.com",
            age: 24,
            location: "Argentina",
        }]),
        findOne: () => ({
            id: 2,
            userName: "juanguti97",
            name: "Juan",
            lastName: "Gutierrez",
            email: "juangutierrez@gmail.com",
            age: 30,
            location: "Argentina",
        })
    }

    public findAll() {
        return this.dbUsers.findAll();
    }

    public findOne(){
        return this.dbUsers.findOne()
    }
}
