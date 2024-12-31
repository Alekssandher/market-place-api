import joi from "joi";

export const AuthSchemaJoi = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})