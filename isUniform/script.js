
isUniform([2,2,2,2,2,2,2,6]);
isUniform([1,1,1,1]);
isUniform([9,0,9,0,9,0]);

function isUniform(a){
    var first = a[0];
    for(var i=1;i<=a.length;i++){
        if(a[1] !== first){
        return false;
    }
}
return true;
}