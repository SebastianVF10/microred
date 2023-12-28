import { Router } from "express";
const router = Router();

router.get("/dashboard", (req, res) => res.render("dashboard"));
router.get("/diagrams", (req, res) => res.render("diagrams"));
router.get("/alarms", (req, res) => res.render("alarms"));
router.get("/reports", (req, res) => res.render("reports"));
router.get("/deviceState", (req, res) => res.render("deviceState"));
router.get("/powerTransmission", (req, res) => res.render("powerTransmission"));
router.get("/kpi", (req, res) => res.render("kpi"));
router.get("/", (req, res) => res.render("home", { title: "Home page" }));

//router.get("/imagenes", (req, res) => res.sendFile("./imagen.png", { root: __dirname,}));

//router.get("/JSON", (req, res) => res.json({ name: "value" }));

//router.get("/state", (req, res) => res.sendStatus(204);

export default router;
