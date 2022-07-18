import { Router } from "express";

import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/hello/:name", (req, res) => {
	res.json({ message: `Hello, ${req.params.name}` });
});

router.get("/goodbye/:name", (req, res) => {

	res.json({ message: `Goodbye ${req.params.name}` });
});

export default router;
