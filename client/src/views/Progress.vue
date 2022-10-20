<template>
    <div :style="{'background-image':'url(../assets/cloud.jpg)'}">

        <div class="container-fluid  w-100">

            <div class="row">
                <div class="col-4">
                    <Sidebar :haveTopbar="false" profileName="Tan Yi Peng" profileRole="Secondary 3 Student" />
                </div>
                <div class="col-4 ">

                </div>
                <div class="col-4 ">

                </div>
            </div>


            <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Result</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row">
                                <div class="mb-3 col-6">
                                    <label class="form-label">Score</label>
                                    <input type="number" min="0" max="100" class="form-control" id="score" name="score"
                                        placeholder="Score in %" v-model='score' />
                                </div>
                                <div class="mb-3  col-6">
                                    <label class="form-label">Exam Type</label>
                                    <select class="form-select form-select" aria-label=".form-select-sm example"
                                        id="examType" v-model='examType'>
                                        <option value="CA1" selected>CA1</option>
                                        <option value="SA1">SA1</option>
                                        <option value="CA2">CA2</option>
                                        <option value="SA2">SA2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3">
                                    <label class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="subject" name="subject" placeholder=""
                                        v-model='subject' />
                                </div>
                            </div>

                            <div class="modal-footer d-block">

                                <button type="submit" data-bs-dismiss="modal" class="btn btn-warning float-end"
                                    @click="addResult">Submit</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div class="row">

                <div class="col-1"></div>
                <div class="col-6 d-flex flex-column justify-content-center">
                    <div class="d-flex flex-row justify-content-around">
                        <div>
                            <select class="form-select form-select  mt-4 selectLevel mb-1" aria-label=".form-select-sm "
                                id="examType" v-model='level' @change="change">
                                <option value="1" :selected="level === 1">Sec 1</option>
                                <option value="2" :selected="level === 2">Sec 2</option>
                                <option value="3" :selected="level === 3">Sec 3</option>
                                <option value="4" :selected="level === 4">Sec 4</option>
                                <option value="5" :selected="level === 5">Sec 5</option>
                            </select>
                        </div>
                        <div class="">
                            <button type="button" class="btn  mx-auto mt-4 float-end " data-bs-toggle="modal"
                                data-bs-target="#modalForm">
                                <i class="fa-solid fa-circle-plus fa-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div class="line-chart ">
                        <div class="aspect-ratio chart">
                            <canvas id="progress-chart" class="shadow chart" width="650" height="500"></canvas>
                        </div>
                    </div>



                </div>
                <div class="col-lg-5 col-12  d-flex flex-column justify-content-evenly">

                    <div class="shadow box ">
                       <div class="p-1">
                           <p class="small"><span class="text-danger h5">Alert!</span> Your {{minSub}} has the lowest average of {{minSubScore}}%</p>
                           <p class="small"><span class="text-success h5">Good Work!</span> Your {{maxSub}} has the highest average of {{maxSubScore}}%</p>
                           <p class="small"><span class="text-info h5">Keeup it up!</span> Your {{conSub}} scores are the most consistent at {{conData}} standard deviation!</p>
                       </div>
                        <!-- <canvas id="bar-chart" width="700" height="550" class="p-4"></canvas> -->
                    </div>
                    <div class="line-chart">
                        <div class=" aspect-ratio " >
                            <canvas id="bar-chart" width="600" height="400" class="p-4 shadow"></canvas>
                        </div>
                    </div>
                    <!-- <div class="shadow box">

                    </div> -->

                </div>
            </div>

            <!-- <div class="row justify-content-end">
                <div class="col-md-7 col-12">
                    <div class="row justify-content-end">
                        <div class="col-6">

                            <select class="form-select form-select float-bottom mt-4 selectLevel mb-1"
                                aria-label=".form-select-sm " id="examType" v-model='level' @change="change">

                                <option value="1" :selected="level === 1">Sec 1</option>
                                <option value="2" :selected="level === 2">Sec 2</option>
                                <option value="3" :selected="level === 3">Sec 3</option>
                                <option value="4" :selected="level === 4">Sec 4</option>
                                <option value="5" :selected="level === 5">Sec 5</option>
                            </select>
                        </div>
                        <div class="col-4 addBtn text-center">

                            <button type="button" class="btn  mx-auto mt-4 " data-bs-toggle="modal"
                                data-bs-target="#modalForm">
                                <i class="fa-solid fa-circle-plus fa-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div class="line-chart col-6 justify-content-end">
                        <div class="aspect-ratio chart">
                            <canvas id="progress-chart" class="shadow chart" width="600" height="450"></canvas>
                        </div>
                    </div>

                </div>
                <div class="col-md-5 col-12 d-flex flex-column justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div> -->


        </div>
    </div>
</template>
<script>
    import {
        auth,
        db
    } from "../../src/main";
    import Sidebar from "../components/Navigation/Sidebar.vue";
    import Topbar from "../components/Navigation/Topbar.vue";
    import ChartTest from "../components/ProgressPage/ChartTest.vue";
    import Chart from 'chart.js/auto';

    import {
        getFirestore,
        doc,
        updateDoc,
        getDoc,
        setDoc,
        collection,
        addDoc,
        deleteDoc,
        deleteField,
        arrayUnion,
        arrayRemove,
        onSnapshot,
        query,
        where
    } from "firebase/firestore";
    export default {
        name: "Progress",
        components: {
            Sidebar,
            Topbar,
            ChartTest
        },
        watch: {
            // level: function () {
            //     // this.progressChart.destroy()
            //     console.log(this.level)
            //     localStorage.setItem("level", this.level);
            //     location.reload()

            // }
        },
        mounted() {


            const progressChart = new Chart(document.getElementById("progress-chart"), {
                type: 'line',
                data: {
                    labels: ['CA1', 'SA1', 'CA2', 'SA2'],
                    datasets: [

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    animation: {
                        easing: 'easeInOutQuad',
                        duration: 520
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: ''
                        },
                        tooltip: {
                            displayColors: false,
                            yAlign: 'bottom',
                            backgroundColor: this.colorItems,
                            titleFontFamily: 'Open Sans',

                            titleColor: 'black',
                            bodyColor: 'black',
                            caretSize: 5,
                            cornerRadius: 5,
                            boxPadding: 10,

                        },

                    },
                    scales: {

                        y: {
                            display: true,
                            stacked: false,
                            max: 0,
                            min: 100,
                            ticks: {

                                stepSize: 10
                            },
                            title: {
                                display: true,
                                text: 'Your Score (%)'
                            },
                            gridLines: {
                                color: 'rgba(200, 200, 200, 0.05)',
                                lineWidth: 1
                            },
                        },
                        x: {
                            gridLines: {
                                color: 'rgba(200, 200, 200, 0.05)',
                                lineWidth: 1
                            },

                        }
                    },

                }

            });
            const BarChart = new Chart(document.getElementById("bar-chart"), {
                type: 'bar',
                data: {
                    labels: '',
                    datasets: [{
                        label: "Avg Score (%)",
                        backgroundColor:'grey',
                        data: []
                    }]
                },
                options: {
                    plugins: {

                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Your Average Scores'
                        }
                    }

                }


            });
            let level = this.getLevel()
            console.log(level)
            var email = localStorage.getItem("email");
            console.log(email)
            progressChart.options.plugins.title['text'] = `Secondary ${level} Progress`
            progressChart.update()
            const q = query(collection(db, "users", email, 'progressResults' + level))
            onSnapshot(q, (querySnapshot) => {
                const data = []
                const existingSubjects = []
                const cardData = []
                querySnapshot.docs.forEach((docSnapshot) => {
                    if (docSnapshot.id != 'ignore' && !data.includes(docSnapshot.data())) {
                        existingSubjects.push(docSnapshot.id)
           
                        data.push(docSnapshot.data())
                        cardData.push({
                            [docSnapshot.id]: docSnapshot.data().data
                        })

                    }
                    console.log(existingSubjects)
                     BarChart.data.labels=existingSubjects
      

                });
  const colorList=this.getColors(data)
                this.cardData = cardData
                const avgList = this.getAvg(cardData)
                BarChart.data.datasets[0].data = avgList
                BarChart.data.datasets[0].backgroundColor = colorList
                   BarChart.update()
               
                this.getMax(cardData)
                this.getMin(cardData)
                this.getStd(cardData)
                if (data.length != 0) {
                    progressChart.data.datasets = data
                    progressChart.update()
                }
            });



        },

    methods: {
        getColors(data) {
            // console.log(data)
            const colorList = []
            data.forEach(set => {
                console.log(set.borderColor)
                    colorList.push(set.borderColor)

            })
                return colorList
            },

            calStd(arr) {
                let mean = arr.reduce((acc, curr) => {
                    return acc + curr
                }, 0) / arr.length;


                arr = arr.map((el) => {
                    return (el - mean) ** 2
                })

                let total = arr.reduce((acc, curr) => acc + curr, 0);

                return Math.sqrt(total / arr.length)
            },
            getStd(cardData) {
                let std = 0
                let conSub = ''
                let conData = 10000

                cardData.forEach(data => {
                    for (let key in data) {

                        let scores = data[key]
                        const scoresList = []
                        scores.forEach(score => {
                            for (let axis in score) {
                                if (axis == 'y') {
                                    scoresList.push(score[axis])


                                }
                            }
                        })

                        if (scoresList.length > 1) {
                            std = this.calStd(scoresList)
                            if (std < conData) {
                                conData = std
                                conSub = key
                            }

                        }


                    }
                    this.conSub = conSub
                    this.conData=std.toFixed(1)
                })
                console.log(`most consistent is ${conSub} at ${conData}`)
            },
            getAvg(cardData) {
                // let minSubject = ''
                // let minScore = 1000
                
                const avgList=[]
                cardData.forEach(data => {
                    for (let key in data) {

                        let scores = data[key]
                        let count = 0
                        let avg = 0
                        let total = 0
                        scores.forEach(score => {
                            for (let axis in score) {
                                if (axis == 'y') {

                                    count++
                                    total += score[axis]
                                }


                            }
                        })
                        avg = total / count
                        avgList.push(avg)
                        // if (avg < minScore) {
                        //     minScore = avg
                        //     minSubject = key
                        // }
                    }
                })
                // console.log(`${minSubject} has score of ${minScore}`)
                // this.minSub = minSubject
                // this.minSubScore = minScore
                return avgList

        },
             getMin(cardData) {

                let minSubject = ''
                let minScore = 1000
                cardData.forEach(data => {
                    for (let key in data) {

                        let scores = data[key]
                        let count = 0
                        let avg = 0
                        let total = 0
                        scores.forEach(score => {
                            for (let axis in score) {
                                if (axis == 'y') {

                                    count++
                                    total += score[axis]
                                }


                            }
                        })
                        avg = total / count
                        if (avg < minScore) {
                            minScore = avg
                            minSubject = key
                        }
                    }
                })
                console.log(`${minSubject} has score of ${minScore}`)
                this.minSub = minSubject
                this.minSubScore = minScore.toFixed(1)
            },

            getMax(cardData) {
                let maxSubject = ''
                let maxScore = 0
                cardData.forEach(data => {
                    for (let key in data) {

                        let scores = data[key]
                        let count = 0
                        let avg = 0
                        let total = 0
                        scores.forEach(score => {
                            for (let axis in score) {
                                if (axis == 'y') {

                                    count++
                                    total += score[axis]
                                }
                            }
                        })
                        avg = total / count
                        if (avg > maxScore) {
                            maxScore = avg
                            maxSubject = key
                        }
                    }
                })
                console.log(`${maxSubject} has score of ${maxScore}`)
                this.maxSub = maxSubject
                this.maxSubScore = maxScore.toFixed(1)
            },
            colorItems(tooltipItem) {
                // console.log(tooltipItem.tooltip.labelColors[0].borderColor)
                const tooltipBg = tooltipItem.tooltip.labelColors[0].borderColor
                return tooltipBg
            },
            change() {
                console.log(this.level)
                localStorage.setItem("level", this.level);

                location.reload()
            },
            getLevel() {
                let level = this.level
                if (localStorage.getItem("level") != null) {
                    level = localStorage.getItem("level")
                    this.level = level

                    //  document.getElementById('level').options[localStorage.getItem('level')].selected = true;

                }
                // this.title=`Secondary ${level} Progress Chart`
                return level
            },
            async addResult() {
                let level = this.getLevel()
                // let count = this.count
                var email = localStorage.getItem("email");
                var colRef = doc(db, 'users', email, 'progressResults' + level, this.subject);
                if (!this.existingSubjects.includes(this.subject)) {
                    this.existingSubjects.push(this.subject)
                    const newData = {

                        data: [{
                            x: this.examType,
                            y: this.score
                        }],
                        borderColor: "hsla(" + ~~(360 * Math.random()) + "," +
                            "70%," +
                            "80%,1)",

                        label: this.subject,
                        tension: 0.4



                    }
                    await setDoc(doc(db, "users", email, 'progressResults' + level, this.subject), newData);
                    console.log(newData)

                } else {


                    await updateDoc(
                        colRef, {

                            data: arrayUnion({
                                x: this.examType,
                                y: this.score
                            }),

                        }
                    )
                }
            }
        },

        data() {
            return {
                score: 0,
                examType: '',
                subject: '',

                existingSubjects: [],
                level: 1,
                cardData: [],
                minSub: '',
                minSubScore: '',
                maxSub: '',
                maxSubScore: '',
                conSub: '',
                conData: '',



                // colors: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#bbc021", "#1a993a",
                //     "##904b23", "#a01359", "#a04913", "#534270"
                // ],

                // tabs: [{
                //         link: '',
                //         name: "subject",
                //         dropdown: true,
                //         dropdownTabs: [{
                //                 name: 'math',
                //                 link: '#'
                //             },
                //             {
                //                 name: 'science',
                //                 link: '#'
                //             },
                //         ]

                //     },
                //     {
                //         link: '#',
                //         name: "test",
                //         dropdown: false,
                //         dropdownTabs: []

                //     },
                // ]

            }
        }
    }
</script>

<style scoped>
    * {
        font-size: medium;
    }

    .line-chart {
        animation: fadeIn 600ms cubic-bezier(.57, .25, .65, 1) 1 forwards;
        opacity: 0;
        max-width: 640px;
        width: 100%;

    }

    .aspect-ratio {
        height: 0;
        padding-bottom: 50%;
        position: relative;
    }

    /* .selectLevel{
     position:absolute;
     width:15vw;
     /* width: 10%; */
    /* left:27vw;
     top: 6vh; */
    /* left:26%;
  top:6% 
} */
    .chart {
        padding: 2vw;
        position: relative;
        width: 650px;
        height: 500px
    }

    /* .addBtn{
      position: absolute;
      top: 3em;
      right: 4em;
} */
    .shadow {

        box-shadow: 3px 3px 5px 6px #ccc;
    }

    .box {
        height: 165px;
    }

    body {
        background-image: url("../assets/cloud.jpg") repeat 0 0;
        ;

    }
</style>