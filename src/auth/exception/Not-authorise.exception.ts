import {NotFoundException} from '@nestjs/common'



class NotAuthurize extends NotFoundException{

    constructor(email:string) {
        super(`user with ${email}  not found`);
}
}

export default NotAuthurize;