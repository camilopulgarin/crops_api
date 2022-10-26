import {Router} from 'express'
const router = Router();

import {getReports, Inreports} from '../controllers/report.controller'

router.get('/reports', getReports)
router.post('/Inreports', Inreports)

export default router;