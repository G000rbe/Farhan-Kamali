function primes () {
for ( let i=2 ; i<=997 ; i++){
var answer =0;
for (let j = 1 ; j<=i ; j++){
if (i%j==0) {
    answer++ ; 
}
}
if (answer==2){
    console.log (i);
}
}
}
primes() ; 
function isPrime(n) ; 
{
var answer = 0 ; 
for (let i=j ; j<=n ; j++){
if (n%j==0) {
answer++; 
}
}
if(answer==2){
    return 'true' ; 
}
return 'false' ;
}
