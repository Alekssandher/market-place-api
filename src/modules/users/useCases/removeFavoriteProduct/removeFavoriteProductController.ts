import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveFavoriteProductService } from "./removeFavoriteProductService";

class RemoveFavoriteProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { _id }= res.locals.user;
            const { productId } = req.params;
            const removeFavoriteProductService = container.resolve(RemoveFavoriteProductService);

            await removeFavoriteProductService.execute(_id, productId);

            return res.sendStatus(204);
        } catch (error: any) {
            return res.status(500).send(error.message);
        }
    }
}

export default new RemoveFavoriteProductController();