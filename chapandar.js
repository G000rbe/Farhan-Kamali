function fibo (k){
    if (k==0 || k==1)return 1;
    return fibo(k-1)+fibo(k-2);
}

function chapandar (n){
if(n%==1) {
    return 0 ; 
}
return fibo(n/2) ;
}