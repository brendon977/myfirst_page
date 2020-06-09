function Calcular(){
    let n1 = document.getElementById('numero1');
    let n2 = 50
    let resultado = document.getElementById('res');
    let num1 = Number(n1.value);
    let r = num1*n2
    let re = r.toFixed(2)
    res.innerHTML= `O valor do orçamento é : ${re} reais , nos adequamos a necessidade do cliente`

}



