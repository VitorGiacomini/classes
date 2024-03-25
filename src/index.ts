import Banco from "./Banco";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";
import Relatorio from "./Relatorio";

const contaPoupanca1 = new ContaPoupanca(2345, 0, 6.75);
const contaPoupanca2 = new ContaPoupanca(4657663645, 0, 5.5);
const contaCorrente1 = new ContaCorrente(63454, 0, 100);
const contaCorrente2 = new ContaCorrente(456723, 0, 200);
const relatorioGeral = new Relatorio();
const banco = new Banco();

// console.log(contaPoupanca1.mostrarDados());
// console.log(contaCorrente1.mostrarDados());

// contaPoupanca1.depositar(500);
// contaCorrente1.depositar(200);

// console.log(contaPoupanca1.mostrarDados());
// console.log(contaCorrente1.mostrarDados());

// contaPoupanca1.sacar(600);
// contaCorrente1.sacar(300);

// console.log(relatorioGeral.gerarRelatorio(contaPoupanca1));
// console.log(relatorioGeral.gerarRelatorio(contaCorrente1));

// banco.inserir(contaPoupanca1);
// banco.inserir(contaCorrente1);
banco.inserir(contaPoupanca2);
banco.inserir(contaCorrente2);

// banco.remover(contaCorrente1);
// banco.remover(contaPoupanca1);

// const contaEncontrada = banco.procurarConta(4657663645);
// console.log(contaEncontrada);

console.log(banco.mostrarDados());