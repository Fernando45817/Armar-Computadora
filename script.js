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

    




    subtotal = componentes + procesador + disco + monitor + sum
    tax = subtotal * 0.16
    total = subtotal + tax

    alert("Elaborado por: FERNANDO VARGAS · Proyecto de Formulario · © 2025")

    document.getElementById("subtotal").value = subtotal;
    document.getElementById("tax").value = tax;
    document.getElementById("total").value = total;

}