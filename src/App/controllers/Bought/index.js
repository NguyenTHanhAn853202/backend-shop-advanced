const Bought = require('../../models/Bought')


class BoughtController {
    async myBought(req,res,next){
        const id = req.query.id;
        const data = await Bought.find({userID:id}).populate('idProduct','name slug').sort({'createdAt':-1})
        return res.status(200).json({
            title:'my bought',
            success: true,
            data
        })
    }
}

module.exports = new BoughtController()