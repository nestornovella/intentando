const {DataTypes} = require("sequelize")





module.exports=(sequelize)=>{

    sequelize.define("Form", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:DataTypes.TEXT
        },
        message:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    })

}