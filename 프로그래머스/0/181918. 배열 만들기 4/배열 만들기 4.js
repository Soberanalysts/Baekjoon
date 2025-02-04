function solution(arr) {
    var stk = [];
    let i=0;
    // for(let i=0; i<arr.length; i++) {
    while(i < arr.length){
        if( stk.length === 0 )  {
            stk.push(arr[i]);
            i++;
        } else if( stk.length>0 && stk[stk.length-1] < arr[i]) {
            stk.push(arr[i]);
            i++;
            // stk.pop();
        } else if( stk.length>0 && stk[stk.length-1] >= arr[i]) {
            stk.pop();
        }
        // if( stk.length>0 && stk[stk.length-1] < arr[i]) stk.push(arr[i]);
        
    }

    // }
    return stk;
}