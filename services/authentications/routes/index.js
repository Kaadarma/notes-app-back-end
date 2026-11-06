import { Router } from 'express';
import { login, refreshToken, logout } from '../controllers/authentication-controller.js';
import validate from '../../../middlewares/validate.js';
import {
  postAuthenticationPayloadSchema,
  putAuthenticationPayloadSchema,
  deleteAuthenticationPayloadSchema,
} from '../validator/schema.js';

const router = Router();

router.post('/authentication', validate(postAuthenticationPayloadSchema), login);
router.put('/authentication', validate(putAuthenticationPayloadSchema), refreshToken);
router.delete('authentication', validate(deleteAuthenticationPayloadSchema), logout);


export default router;


