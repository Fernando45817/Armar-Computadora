function Calcular(){
    var total = 0;
    var sum = 0;
    document.querySelectorAll("input[name='x']:checked").forEach(ch => {sum+= parseFloat(ch.value)}); console.log(sum);

}