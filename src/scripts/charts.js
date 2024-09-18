

const receitaDespesa = document.getElementById('receitaxdespesa');
const receitaporCat = document.getElementById('receitaporCategoria');
const despesaporCat = document.getElementById('despesaporCategoria');


const dataReceitaCategoria = {
    labels: [
      'Pedidos Ifood',
      'Pedidos Balcão',
      'Pedidos Online'
    ],
    datasets: [{
      label: 'Receitas por categoria',
      data: [5000, 3000, 1000],
      backgroundColor: [
        '#F00000',
        '#3B88C3',
        '#FFE500'
      ],
      hoverOffset: 4
    }]
  };

const dataDespesaCategoria = {
    labels: [
    'Insumos',
    'Colaboradores',
    'Despesas Fixas',
    'Entregas'
    ],
    datasets: [{
    label: 'Despesas por categoria',
    data: [5000, 4000, 2000, 1000],
    backgroundColor: [
        '#C2E541',
        '#F00000',
        '#3B88C3',
        '#FFE500'
    ],
    hoverOffset: 4
    }]
};



new Chart(receitaDespesa, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
                label: 'Receitas',
                data: [20000, 17000, 25000, 14000, 30000, 28000, 25000, 22000, 18000],
                borderWidth: 1,
                backgroundColor: '#04AA1F'
            },
            {
                label: 'Despesas',
                data: [15000, 15000, 22000, 12000, 25000, 27000, 26000, 24000, 15000],
                borderWidth: 1,
                backgroundColor: '#B90000'
            },
        ]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});

new Chart(receitaporCat ,{
    type: 'doughnut',
    data: dataReceitaCategoria,
    options: {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});

new Chart(despesaporCat ,{
    type: 'doughnut',
    data: dataDespesaCategoria,
    options: {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});

