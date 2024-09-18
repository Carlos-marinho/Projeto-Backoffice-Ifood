

const ctx = document.getElementById('receitaxdespesa');
//const labels = Utils.months({count: 9});
//['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']


new Chart(ctx, {
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