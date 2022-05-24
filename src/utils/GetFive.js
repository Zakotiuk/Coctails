export const getFive = (array) =>{
    var newArray;
    for(var i = 0; i < 5; ++i)
    {
        newArray[i] = array[i];
    }
    return newArray;
}