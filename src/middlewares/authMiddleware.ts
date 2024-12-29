import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";
import { FindByIdService } from "modules/users/useCases/findById/findByIdService";
import { container } from "tsyringe";

interface ITokenPayload extends jwt.JwtPayload {
    id: string;
}
class AuthMiddleware {
    async execute(req: Request, res: Response, next: NextFunction){
        const { authorization } = req.headers;

        if(!authorization) return res.status(500).send("Invalid token")
        
        const secret = process.env.SECRET_JWT as string;

        const parts = authorization.split(" ");

        if (!parts.length) return res.status(500).send("Invalid token")
        if (parts.length !== 2) return res.status(500).send("Invalid token")

        const [scheme, token] = parts;

        if(!/^Bearer$/i.test(scheme)) return res.status(500).send("Invalid oken")

        jwt.verify(token, secret, async (err, decoded) => {
            if(err)  return res.status(500).send("Invalid token")              
                
            if(!decoded) return res.status(500).send("Invalid token")

            const { id } = decoded as ITokenPayload;

            try {
                const findByIdService = container.resolve(FindByIdService);
                const user = await findByIdService.execute(id);

                if(!user) return res.status(500).send("Invalid token")

                res.locals.user = user;

                return next();

            } catch (error: any) {
                throw res.status(500).send({ message: error.message });
                
            }
        });
    }
}

export default new AuthMiddleware();