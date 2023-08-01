const dbconnect = require ('./mongodb');

const updatedata = async ()=>
{
    let data = await dbconnect();
    let result =  await data.updateOne(
        {userid : 105},{
                $set:{UserName : 'Deepa Sharma'}
            }
        
    );

    if (result.acknowledged)
    {
        console.log('Data Updated successfully');
    }
}
updatedata();