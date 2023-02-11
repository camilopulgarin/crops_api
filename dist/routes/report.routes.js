"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const report_controller_1 = require("../controllers/report.controller");
router.get('/reports', report_controller_1.getReports);
router.post('/Inreports', report_controller_1.Inreports);
router.get('/FilterReports', report_controller_1.FilterReports);
exports.default = router;
