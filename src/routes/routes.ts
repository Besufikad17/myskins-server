import { Router } from "express";
import { SkinController } from "../controllers/skinController";

const route = Router();
const skinController = new SkinController();

route.post("/add_skin", skinController.addSkins);

route.get("/all", skinController.getAllSkins);

route.get("/type/:type", skinController.getSkinsByWeaponType);

route.get("/edition/:edition", skinController.getSkinsByEdition);

route.get("/collection/:collection", skinController.getSkinsByCollection);

export { route }