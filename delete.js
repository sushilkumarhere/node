const dbconnect = require ('./mongodb');

const deleteData = async ()=>
{
    let data = await dbconnect();
    let result =  await data.deleteOne(
        {userid : 105}
        
    );

    if (result.acknowledged)
    {
        console.log('Data Deleted successfully');
    }
}
deleteData();