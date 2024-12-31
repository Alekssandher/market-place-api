import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveAddressService } from "./removeAddressService";

class RemoveAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { _id } = res.locals.user;
            const { addressId } = req.params;
            const removeAddressService = container.resolve(RemoveAddressService);
            await removeAddressService.execute(_id, addressId)
            return res.sendStatus(204);
        } catch (error: any) {
            return res.status(500).send(error.message);
        }
    }
}

export default new RemoveAddressController();