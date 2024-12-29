import { Request, Response } from "express";
import { FindByIdService } from "./findByIdService";
import { container } from "tsyringe";

class FindByIdController {
    async handle (req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const findByIdService = container.resolve(FindByIdService);
            const user = await findByIdService.execute(id);

            return res.send(user);
            
        } catch (error: any) {
            throw res.status(500).send({ message: error.message });
        }
    }
}

export default new FindByIdController();