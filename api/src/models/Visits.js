const {DataTypes} = require("sequelize")





module.exports=(sequelize)=>{

    sequelize.define("Visit", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
        },
       counter:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1
       }
    })

}