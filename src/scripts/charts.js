

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
      label: 'Receita por categoria',
      data: [300, 50, 100],
      backgroundColor: [
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
                data: [20, 17, 25, 14, 30, 28, 25, 22, 18],
                borderWidth: 1,
                backgroundColor: '#04AA1F'
            },
            {
                label: 'Despesas',
                data: [15, 15, 22, 12, 25, 27, 26, 24, 15],
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
    data: dataReceitaCategoria
})

//Criar os dois graficos que faltam