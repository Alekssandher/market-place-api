import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteService } from "./deleteService";


class DeleteController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { _id } = res.locals.user;
            const data = req.body;
            const deleteService = container.resolve(DeleteService);
            await deleteService.execute(_id);

            return res.status(204).send();
            
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    }
}

export default new DeleteController();