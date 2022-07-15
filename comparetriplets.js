let a = [5,2,1] , b= [3,9,2];


function compareTriplets(a, b) {
    // Write your code here
    let aPoints=0,bPoints =0;
    
    for(let i=0; i<=2;i++){
        if(a[i]>b[i]){
            aPoints++;
        }
        else if(a[i]<b[i]){
            bPoints++;
        }
        else console.log("no points rewarded");
    }
    return [aPoints,bPoints];
}


console.log(compareTriplets(a,b));