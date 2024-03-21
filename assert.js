const assert = require('assert')

function imposto(salario) {
    parseFloat(salario);
    if (salario <= 2259.2) {
        return "Isento";
    } else if (salario <= 2826.65) {
        return "Alíquota de 7,5%";
    } else if (salario <= 3751.05) {
        return "Alíquota de 15,0%";
    } else if (salario <= 4664.68) {
        return "Alíquota de 22,5%";
    } else {
        return "Alíquota de 27,5%";
    }
}

assert.equal(imposto(2258), 'Isento');
console.log('Isento')
assert.equal(imposto(2259.2), 'Isento');
console.log('Isento')

assert.equal(imposto(2700), 'Alíquota de 7,5%');
console.log('Alíquota de 7,5%')
assert.equal(imposto(2826.65), 'Alíquota de 7,5%');
console.log('Alíquota de 7,5%')

assert.equal(imposto(3651.05), 'Alíquota de 15,0%');
console.log('Alíquota de 15,0%')
assert.equal(imposto(3751.05), 'Alíquota de 15,0%');
console.log('Alíquota de 15,0%')

assert.equal(imposto(4564.68), 'Alíquota de 22,5%');
console.log('Alíquota de 22,5%')
assert.equal(imposto(4664.68), 'Alíquota de 22,5%');
console.log('Alíquota de 22,5%')

assert.equal(imposto(4664.69), 'Alíquota de 27,5%');
console.log('Alíquota de 27,5%')
assert.equal(imposto(4664.70), 'Alíquota de 27,5%');
console.log('Alíquota de 27,5%')

console.log('\nFLOAT MÁXIMO')
assert.equal(imposto(Number.MAX_VALUE - 1), 'Alíquota de 27,5%');
console.log('Alíquota de 27,5%')
assert.equal(imposto(Number.MAX_VALUE), 'Alíquota de 27,5%');
console.log('Alíquota de 27,5%')
assert.equal(imposto(Number.MAX_VALUE + 1), 'Alíquota de 27,5%');
console.log('Alíquota de 27,5%')

console.log('\nFLOAT MÍNIMO')

assert.equal(imposto(Number.MIN_VALUE - 1), 'Isento');
console.log('Isento')
assert.equal(imposto(Number.MIN_VALUE), 'Isento');
console.log('Isento')
assert.equal(imposto(Number.MIN_VALUE + 1), 'Isento');
console.log('Isento')


