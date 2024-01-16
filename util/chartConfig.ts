export const chartoptions = {
    maintainAspectRatio: false,
    fill:'origin',
    responsive: true,
    plugins: {
      filler: {
        propagate: true
    },
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Perfomance overview',
      },
    },
    scales: {
    x: {
        grid: {
          display: false
        }
      },
    y: {
        // title:{
        //     display:true,
        //     text:"Amount Spent (₦)"
        // },
        min: 0
      }
    }
}