module.exports = function getZerosCount(number, base) {
  // your implementation
  let k = 1;
  let sum = 0;
  let mas=[];
  let i = 2 ;
  while (i <= base){
    if (base % i == 0){
      mas.push([i])
      base=base / i;
    }
      else {i++};
  };
  let x=Math.max(...mas) / 1;
  let y=mas.filter(item => item ==x).length / 1
  let a=mas.filter(item => item ==2).length / 1
  while ((Math.floor(number/(Math.pow(x,k)))) >= 1) {
    sum+=Math.floor(number/(Math.pow(x,k)));
    k++;
  };
  return(Math.floor((sum/y)));
}