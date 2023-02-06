const { Visit } = require("../../db")


module.exports = {
    addVisits: async (req, res) => {
        const { visit } = req.query
        if(visit === "reset"){
            await Visit.destroy({truncate:true})
            res.json(await Visit.findAll())
        }
        else if (visit != "false") {
            const visits = await Visit.findAll()
            if (visits.length) {
                const id = visits[0].id
                await Visit.update({ counter: visits[0].counter + 1 }, { where: { id: id } })
                res.json(await Visit.findAll())
            }
            else {
                await Visit.create({})
                res.json(await Visit.findAll())
            }
        }
        else{
       
            res.json(await Visit.findAll())
        }
    }, 
    getVisits:async (req, res)=>{

        try {
            const visitas = await Visit.findAll()
            !visitas.length ? res.json("no hay visitas") : res.json(visitas)
        } catch (error) {
            res.json(error)
        }
    }   
}