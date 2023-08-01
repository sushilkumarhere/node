const dbconnect = require('./mongodb')

const insert = async ()=>{
    const db = await dbconnect();
    const result = await db.insertOne(
        {userid : 105,UserName:'Money',rolId :5}
    )

    if (result.acknowledged)
    {
        console.log('Data inserted successfully');
    }
    

}

insert();
