import express from 'express';
import { saveSentEmails,getEmails,moveEmailsToBin,deleteEmails,toggleStarredEmail} from '../controllers/email-controller.js';
const routes=express.Router();

routes.post('/saved',saveSentEmails)
routes.post('/save-drafts',saveSentEmails)
routes.get('/email/:types',getEmails)
routes.post('/starreds', toggleStarredEmail);
routes.delete('/deleted', deleteEmails);
routes.post('/bins',moveEmailsToBin);
export default routes;