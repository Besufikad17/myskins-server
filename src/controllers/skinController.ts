import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class SkinController {

    public addSkins =async (req: Request, res: Response) => {
        const { weapon, edition, collectionName, price ,  img} = req.body;

        if(!weapon || !collectionName || !edition || !img || !price){
            return res.send(401).json({
                success: false,
                data: null,
                error: {msg: "Please enter all fields!"}
            })
        }
       
        try {

            const skins = await prisma.skins.findMany({
                where: {
                    OR: {
                        collectionName: {
                            contains: collectionName
                        }
                    }
                }
            });

            if(skins[0]){
                res.json({
                    success: false,
                    data: null,
                    error: {msg: "Skin already exists!!"}
                })
            }else{
                const skin = await prisma.skins.create({
                    data: {
                     weapon,
                     collectionName,
                     edition,
                     price,
                     img,
                     v: 0
                    }
                 });
                 res.json({
                     success: true,
                     data: skin,
                     error: null
                 })
            }
        } catch (error) {
            res.json({
                success: false,
                data: null,
                error: error
            })
        }
    }

    public getAllSkins =async (req: Request, res: Response) => {
        try {
            const skins = await prisma.skins.findMany({
                where: {}
            })

             res.json({
                success: true,
                data: skins,
                error: null
            });
        } catch (error) {
            res.json({
                success: false,
                data: null,
                error: error
            });
        }
    }

    public getSkinsByWeaponType = async(req: Request<{ type: string }>, res: Response) => {
        const type: string = req.params.type;

        if(!type){
            return res.json({
                success: false,
                data: null,
                error: { msg: "Please enter all fields!!"}
            });
        }

        try {

            const skins = await prisma.skins.findMany({
                where: {
                    OR: {
                        weapon: {
                            contains: type
                        }
                    }
                }
            })

            res.json({
                success: true,
                data: skins,
                error: null
            });
        } catch (error) {
            res.json({
                success: false,
                data: null,
                error: error
            });
        }
    }

    public getSkinsByEdition =async (req:Request<{ edition: string }>, res: Response) => {
        const edition: string = req.params.edition;

        if(!edition){
            return res.json({
                success: false,
                data: null,
                error: { msg: "Please enter all fields!!"}
            });
        }

        try {
            const skins = await prisma.skins.findMany({
                where: {
                    OR: {
                        edition: {
                            contains: edition
                        }
                    }
                }
            });

            res.json({
                success: true,
                data: skins,
                error: null
            });
        } catch (error) {
            res.json({
                success: false,
                data: null,
                error: error
            });
        }
    }

    public getSkinsByCollection =async (req:Request<{ collection: string }>, res: Response) => {
        const collection: string = req.params.collection;

        if(!collection){
            return res.json({
                success: false,
                data: null,
                error: { msg: "Please enter all fields!!"}
            });
        }

        try {
            const skins = await prisma.skins.findMany({
                where: {
                    OR: {
                        collectionName: {
                            contains: collection
                        }
                    }
                }
            });

            res.json({
                success: true,
                data: skins,
                error: null
            });
        } catch (error) {
            res.json({
                success: false,
                data: null,
                error: error
            });   
        }
    }

}

export { SkinController }