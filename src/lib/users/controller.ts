// import { Controller, Get } from '../../decorators'
import User from './interface';
import { UserService } from './service.ts';

// @Controller(/user)
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // @Get("/getAllUsers")
  // @Authenticate()
  // @ValidateDTO(getUserDto)
  
  async getAllUsers(req: Request, res: Response): Promise<any> {
    const result: Promise<User[]> = this.userService.getAllUsers();
    return result
  }

  async getOneUser(req: any, res: any) {
    return this.userService.findOne()
  }
}