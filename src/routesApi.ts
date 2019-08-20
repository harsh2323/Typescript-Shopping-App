import { Router } from "express-serve-static-core";

const router: Router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Welcome to the typescript-express API"
    });
});
