import {NotFoundException} from '@nestjs/common'



class CategoryNotFound extends NotFoundException{

    constructor(id:number) {
        super(`Category with ${id}  id not found`);
}
}

export default CategoryNotFound