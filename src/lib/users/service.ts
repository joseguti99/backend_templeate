import { UserRepository } from "./repository";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAllUsers() {
        const users = this.userRepository.findAll() 
        return users;
    }

    public async findOne(){
        const user = this.userRepository.findOne()
        return user
    }
}