import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddAddressService } from "./addAddressService";

class AddAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { _id } = res.locals.user;
            const data = req.body;
            const addAddressService = container.resolve(AddAddressService);
            await addAddressService.execute(_id, data)
            return res.sendStatus(204);
        } catch (error: any) {
            return res.status(500).send(error.message);
        }
    }
}

export default new AddAddressController();