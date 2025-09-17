import Joi from 'joi';

export const emailPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
