import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";

class FindAllController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { limit, offset } = res.locals.pagination;

            const findAllService = container.resolve(FindAllService);

            const users = await findAllService.execute(limit, offset);

            return res.status(200).send( { users } );
             
        } catch (error: any) {
            return res.status(500).send({message: error.message});
        }
    }
}

export default new FindAllController();