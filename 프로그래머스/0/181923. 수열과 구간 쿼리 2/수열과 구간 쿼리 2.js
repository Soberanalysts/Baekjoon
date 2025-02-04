function solution(arr, queries) {
    var answer = [];
    
for (let i =0; i < queries.length; i++) {
    let [s,e,k] = [queries[i][0],queries[i][1],queries[i][2]];
    let filtered = arr.slice(s,e+s+1).filter((a) => a>k);

    answer.push(filtered.length > 0 ? Math.min(...filtered) : -1);
}
    
    return answer
}