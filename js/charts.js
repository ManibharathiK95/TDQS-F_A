function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: APP_DATA.monthlyRevenue.labels,
            datasets: [{
                label: 'Monthly Revenue (AED)',
                data: APP_DATA.monthlyRevenue.values,
                backgroundColor: '#1B5E20',
                borderRadius: 4,
                barPercentage: 0.6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#121212',
                    titleFont: { family: 'Inter' },
                    bodyFont: { family: 'Inter' },
                    callbacks: {
                        label: (ctx) => formatAED(ctx.parsed.y)
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#F5F5F5' },
                    ticks: {
                        font: { family: 'Inter', size: 12 },
                        color: '#757575',
                        callback: (v) => 'AED ' + v / 1000 + 'k'
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter', size: 12 }, color: '#757575' }
                }
            }
        }
    });
}
