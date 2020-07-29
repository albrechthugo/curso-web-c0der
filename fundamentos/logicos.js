function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTv = trab1 && trab2
    const comprarTv32 = trab1 != trab2
    const saudavel = !comprarSorvete

    return {comprarSorvete, comprarTv, comprarTv32, saudavel}
}

console.log(compras(true, true))
