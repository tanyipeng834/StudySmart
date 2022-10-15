<template>
    <canvas id="progress-chart" width="600" height="450"></canvas>
</template>

<script>
    import Chart from 'chart.js/auto';
    export default {
        name: 'ChartTest',
        props: {
            data: Object,
            title: String,


    },
    watch: {
        data:function() {
            this.progressChart.update()
        }
    },
        
        mounted() {
           const progressChart=new Chart(document.getElementById("progress-chart"), {
                type: 'line',
                data: this.data,
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: this.title
                        }
                    },
                    scales: {

                        y: {
                            display: true,
                            stacked: true,
                            max: 0,
                            min: 100,
                            title: {
                                display: true,
                                text: 'Your Score (%)'
                            }
                        }
                    }
                }
            });
    
    }
      
    }
</script>