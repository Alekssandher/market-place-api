import joi from "joi";

export const UserSchemaJoi = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    image: joi.string().required(),
    addresses: joi.array(),
    favoriteProducts: joi.array(),
    createdAt: joi.date().default(Date.now),
    admin: joi.boolean().default(false)
})