arr = [1,1,2,3,5,4,3,5]
const output = arr.filter((ele)=>{
    let count = 0;
    for (i=0;i<arr.length;i++){
        if(arr[i] == ele){
            count++ ;
    
        }
        
        

    }
    return count == 1;
   
})