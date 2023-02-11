import {Router} from 'express'
const router = Router();

import {getReports, Inreports, FilterReports} from '../controllers/report.controller'

router.get('/reports', getReports)
router.post('/Inreports', Inreports)
router.get('/FilterReports', FilterReports)

export default router;