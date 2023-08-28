import { Router } from "express";

/* 
router is a "sub-app". an Express app can multiple routers, 
each with their own configs and rules.
*/

const router = Router();

/* 
* Products
*/

router.get("/product", (req, res) => {
    res.status(200)
    res.json({ message: "Products!" })
})
router.put("/product/:id", () => { })
router.post("/product", () => { })
router.delete("/product/:id", () => { })
router.get("/product/:id", () => { })

/* 
* Updates
*/

router.get("/update", () => { })
router.get("/update/:id", () => { })
router.put("/update/:id", () => { })
router.post("/update", () => { })
router.delete("/update/:id", () => { })

/* 
* Update Point
*/

router.get("/updatepoint", () => { })
router.get("/updatepoint/:id", () => { })
router.put("/updatepoint/:id", () => { })
router.post("/updatepoint", () => { })
router.delete("/updatepoint/:id", () => { })

export default router;