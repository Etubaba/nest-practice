import {NotFoundException} from '@nestjs/common'


class ProductNotFound extends NotFoundException{
    constructor(id:number) {
        super(`Product with ${id}  id not found`);
}
}


export default ProductNotFound