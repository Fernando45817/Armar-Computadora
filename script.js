function Calcular(){
    var subtotal = 0;
    var total = 0;
    var tax = 0;
    var sum = 0;
 
    var componentes = parseFloat(document.getElementById('componentes').value);
    var procesador = parseFloat(document.getElementById('procesador').value);
    var disco = parseFloat(document.getElementById('disco').value);
    var monitor = parseFloat(document.getElementById('monitor').value);

    document.querySelectorAll("input[name='x']:checked").forEach(ch => {sum+= parseFloat(ch.value)}); 

    




    total = componentes + procesador + disco + monitor + sum
    

    document.getElementById("calcular").value = total;
}