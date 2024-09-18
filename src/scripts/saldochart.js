const saldoAcumulado = document.getElementById('saldototal');

const dataSaldoAcumulado = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
    datasets: [{
        label: 'Saldo Acumulado',
        data: [1000, 3000, 2000, 4000, 5000, 2500, 8000, 10000, 6000],
        fill: false,
        borderColor: '#F00000',
        hoverOffset: 2,
        tension: 0.1
    }]
};

new Chart(saldoAcumulado ,{
    type: 'line',
    data: dataSaldoAcumulado,
});