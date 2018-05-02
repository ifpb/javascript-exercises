$(function () {
    /** This code runs when everything has been loaded on the page */
    /* Inline sparklines take their values from the contents of the tag */
    $('.inlinesparkline').sparkline()

    /* Sparklines can also take their values from the first argument 
    passed to the sparkline() function */
    let myvalues = [0, 5, 6, 10, 9, 12, 4, 9]
    $('.dynamicsparkline').sparkline(myvalues)

    /* The second argument gives options such as chart type */
    $('.chart01').sparkline(myvalues, { type: 'bar', barColor: '#7ace4c', barSpacing: 5 })
    $('.chart02').sparkline(myvalues, { type: 'bar', barColor: '#707cd2', barSpacing: 5 })
    $('.chart03').sparkline(myvalues, { type: 'bar', barColor: '#41b3f9', barSpacing: 5 })
    $('.chart04').sparkline(myvalues, { type: 'bar', barColor: '#f33155', barSpacing: 5 })

    /* Use 'html' instead of an array of values to pass options 
    to a sparkline with data in the tag */
    $('.inlinebar').sparkline('html', { type: 'bar', barColor: 'red' })
});

let ctx = document.querySelector("#lineGraph").getContext('2d')

dados = {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
    datasets: [
        {
            backgroundColor: 'rgba(65, 179, 249, 0.1)',
            borderColor: '#41b3f9',
            data: [2, 5, 2, 6, 2, 5, 2, 4]
        },
        {
            backgroundColor: 'rgba(65, 179, 249, 0)',
            borderColor: '#4c5667',
            data: [5, 2, 7, 4, 5, 3, 5, 4]
        }
    ]
}

opcoes = {
    maintainAspectRatio: false,
    legend: {
        display: false
    }
}

let lineChart = new Chart(ctx, {
    type: 'line',
    data: dados,
    options: opcoes
})