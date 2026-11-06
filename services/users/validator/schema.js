import Joi from 'joi';


export const userPayloadSchema = Joi.object({
  username: Joi.string().min(2).max(20).required(),
  password: Joi.string().min(6).required(),
  fullname: Joi.string().required(),
});