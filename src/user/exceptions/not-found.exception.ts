import {NotFoundException} from '@nestjs/common'



class UserNotFoundException extends NotFoundException{

    constructor(id:number) {
        super(`user with id ${id} not found`);
}
}

export default UserNotFoundException;