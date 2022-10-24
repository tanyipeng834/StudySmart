<template>
    <div class="login container-fluid wrapper w-100">

        <!-- <div class="container-fluid "> -->

        <div class="row">
            <div class="col-4">
                <Sidebar :haveTopbar="false" profileName="Tan Yi Peng" profileRole="Secondary 3 Student" />
            </div>
            <div class="col-4 ">

            </div>
            <div class="col-4 ">

            </div>
        </div>

        <div class="modal-box">

            <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="text-end"><button type="button" class="btn-close me-2 mt-2 " data-bs-dismiss="modal"
                                aria-label="Close"></button></div>

                        <div class="modal-body">
                            <h3>Add Result</h3>
                            <div class="row">
                                <div class="mb-3 col-6">
                                    <label class="form-label">Score</label>
                                    <input type="number" min="0" max="100" class="form-control mb-0" id="score"
                                        name="score" placeholder="Score in %" v-model.trim='score' />
                                    <p v-if="score <0||score>100||score==''||isNaN(score)"
                                        class="text-danger small mt-0">Your score must be between 0
                                        and 100</p>
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
                                    <input type="text" class="form-control mb-0" id="subject" name="subject"
                                        placeholder="" v-model.trim='subject' />
                                    <p v-if="subject==''" class="text-danger small mt-0">Please input the subject</p>
                                </div>
                            </div>

                            <div class="modal-footer d-block">

                                <button type="submit" data-bs-dismiss="modal" class="btn  btn-outline-dark float-end"
                                    @click="addResult" v-if="score <0||score>100||subject.length===0 ||score==''"
                                    disabled>Submit</button>
                                <button type="submit" data-bs-dismiss="modal"
                                    class="btn btn-outline-info float-end enabled" @click="addResult"
                                    v-else>Submit</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-1"></div>
            <div class="col-lg-6 col-12 d-flex flex-column justify-content-center">
                <div class="d-flex flex-row justify-content-around">
                    <div>
                        <select class="form-select form-select  mt-4 selectLevel mb-1 shadow l"
                            aria-label=".form-select-sm " id="examType" v-model='level' @change="change">
                            <option value="1" :selected="level === 1">Sec 1</option>
                            <option value="2" :selected="level === 2">Sec 2</option>
                            <option value="3" :selected="level === 3">Sec 3</option>
                            <option value="4" :selected="level === 4">Sec 4</option>
                            <option value="5" :selected="level === 5">Sec 5</option>
                        </select>
                    </div>
                    <div class="">
                        <button type="button" class="btn  mx-auto mt-4 float-end addRes" data-bs-toggle="modal"
                            data-bs-target="#modalForm">
                            <i class="fa-solid fa-circle-plus fa-lg" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                title="Add test results"></i>
                        </button>
                    </div>
                </div>
                <div class="line-chart ">
                    <div class="aspect-ratio chart">
                        <canvas id="progress-chart" class="shadow chart bg-white rounded" width="650" height="500"
                            style="--bs-bg-opacity: .6;"></canvas>
                    </div>
                </div>



            </div>
            <div class="col-lg-5 col-12  d-flex flex-column justify-content-start mt-4">

                <div class="shadow box ">
                    <div class="p-1 insights" v-if="existingSubjects.length>1">
                        <p class="small"><span class="text-danger h5">Alert!</span> Your {{minSub}} has the lowest
                            average of {{minSubScore}}%</p>
                        <p class="small"><span class="text-success h5">Good Work!</span> Your {{maxSub}} has the
                            highest average of {{maxSubScore}}%</p>
                        <p class="small" v-if="conSub!=''"><span class="text-info h5">Keep it up!</span> Your
                            {{conSub}} scores are the most consistent with {{conData}} standard deviation!</p>
                        <p class="small" v-else><span class="text-info h5">More data required!</span> Please add
                            more test scores to see which is your most consistent subject.</p>
                    </div>

                    <div v-else class="text-center">
                        <h1 class="display-6 text-primary" v-if="existingSubjects.length==1">Add more subjects</h1>
                        <h1 class="display-6 text-primary" v-else>Let's Start!</h1>
                        <h2 v-if="existingSubjects.length==1">Add your test results of other subjects for us to give you
                            more insights!</h2>
                        <h2 v-else>Start inputting your test scores using the <i
                                class="fa-solid fa-circle-plus fa-lg"></i> button</h2>

                    </div>
                    <!-- <canvas id="bar-chart" width="700" height="550" class="p-4"></canvas> -->
                </div>
                <div class="line-chart">
                    <div class=" aspect-ratio ">
                        <canvas id="bar-chart" width="600" height="400" class="p-4 shadow bg-white rounded"
                            style="--bs-bg-opacity: .6;"> </canvas>
                    </div>
                </div>
                <!-- <div class="shadow box">

                    </div> -->

            </div>
        </div>


        <!-- </div> -->
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

        mounted() {
            if (localStorage.getItem("email")) {

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
                                max: 100,
                                min: 0,
                                // ticks: {

                                //     stepSize: 10
                                // },
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
                            backgroundColor: 'grey',
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
                        },
                        scales: {
                            y: {

                                min: 0,
                                max: 100
                            }
                        }

                    },



                });

                let level = this.getLevel()

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
                        // console.log(existingSubjects)
                        BarChart.data.labels = existingSubjects

                    });
                    const colorList = this.getColors(data)
                    this.cardData = cardData
                    const avgList = this.getAvg(cardData)
                    BarChart.data.datasets[0].data = avgList
                    BarChart.data.datasets[0].backgroundColor = colorList
                    BarChart.update()
                    //  console.log(cardData)

                    this.getMax(cardData)
                    this.getMin(cardData)
                    this.getStd(cardData)

                    if (data.length != 0) {
                        progressChart.data.datasets = data
                        progressChart.update()
                    }
                    this.existingSubjects = existingSubjects
                    this.count = existingSubjects.length


                });
            }
            else {
                  window.location.href='#/login'
            }



        },

        methods: {
            checkExist(examType, subject) {
                // console.log(subject)
                // console.log(examType)
                var allAreTruthy = false;
                let oldScore=0

                this.cardData.forEach(data => {
                    for (let key in data) {
                        if (key == subject) {

                            let sets = data[key]

                            sets.forEach(set => {
                                //  console.log(set)
                                if (set.x == examType) {
                                    // console.log(set.x==examType)
                                    oldScore=set.y

                                    allAreTruthy = true;
                                }                           
                            })
                        }
                    }

                })
                return [allAreTruthy, oldScore]

            },
            getColors(data) {
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
                    this.conData = std.toFixed(1)
                })
                console.log(`most consistent is ${conSub} at ${conData}`)
            },
            getAvg(cardData) {

                const avgList = []
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
                    }
                })
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
                const tooltipBg = tooltipItem.tooltip.labelColors[0].borderColor
                return tooltipBg
            },
            change() {
                // console.log(this.level)
                localStorage.setItem("level", this.level);

                location.reload()
            },
            getLevel() {
                let level = this.level
                if (localStorage.getItem("level") != null) {
                    level = localStorage.getItem("level")
                    this.level = level

               

                }
                return level
            },
            async addResult() {

                let level = this.getLevel()
                // let count = this.count
                var email = localStorage.getItem("email");
                var colRef = doc(db, 'users', email, 'progressResults' + level, this.subject);
                let exam=this.examType
                let score=this.score
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


                    // console.log(newData)


                } else {


                    if (this.checkExist(this.examType, this.subject)[0]) {
                        let oldScore = this.checkExist(this.examType, this.subject)[1]

                        // alert(`${this.examType} already exists for ${this.subject}`)
                        asgar({
                                title: `${this.examType} result already exists for ${this.subject}`,
                                message: "Do you want to overwrite the existing result?",
                                // details: "You will not able to recover this action",
                                left: "Cancel",
                                right: "Overwrite",
                            })
                            .then(() => {
                                console.log("overwrite");
                                this.removed(exam, oldScore, colRef).then(() => {
                                    console.log('data deleted')
                                }).catch((e)=>{
                                    console.log(e)
                                })
                                this.update(colRef, exam, score).then(() => {
                                    console.log("overwritten")
                                })

                            })
                            .catch(() => {
                                console.log("cancel overwrite");
                                return

                            });

                    } else {
                        this.update(colRef, this.examType, this.score).then(() => {
                            console.log("updated")
                        })

                    }



                }
                this.score = ''
                this.subject = ''
                this.examType = ''
            },
            async removed(exam, score, ref) {
                await updateDoc(ref, {
                
                    data: arrayRemove({x:exam,y:score})
                });
            },
            async update(ref, exam, score) {
                await updateDoc(
                    ref, {

                        data: arrayUnion({
                            x: exam,
                            y: score
                        }),

                    }
                )


            }
        },

        data() {
            return {
                score: '',
                examType: 'CA1',
                subject: '',
                count: 0,


                existingSubjects: [],
                level: 1,
                cardData: [],
                minSub: '',
                minSubScore: '',
                maxSub: '',
                maxSubScore: '',
                conSub: '',
                conData: '',
                validity: false




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

        width: 100%;


    }

    .aspect-ratio {
        height: 0;
        padding-bottom: 50%;
        position: relative;
    }


    .chart {
        padding: 2vw;
        position: relative;
        width: 100%;
        height: auto;
    }


    .shadow {

        box-shadow: 5px 5px 6px 7px #ccc;
    }

    .addRes {
        position: absolute;
        top: 10%;
        left: 49%;
        z-index: 1;
    }

    .box {
        height: 165px;
    }

    body {
        background-image: url("../assets/cloud.jpg") repeat 0 0;
        ;

    }

    .login {
        background-image: url("@/assets/cloud.jpg");

        height: 100vh;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }



    #progres-chart {
        position: relative;
        z-index: 0;
    }

    .modal-box .modal-dialog {
        width: 500px;
        margin: 50px auto 0;
    }


    .modal-box .modal-dialog .modal-content {
        text-align: center;
        border-radius: 0;
        border: none;
        box-shadow: none;
    }

    .modal-body {
        padding: 40px
    }

    .modal-body .form-control,
    .modal-body .form-select {
        background: #cceaf6;
        font-size: 22px;
        height: 50px;
        margin: 0 0 30px;
        border: none;
        border-radius: 0;
        box-shadow: none;
        border: none;
    }

    .modal-body p {
        text-align: left;
    }

    .enabled:hover {
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5) inset, 0 0 10px #959596;
    }

    .modal-box .modal-dialog .modal-content .modal-body .btn:focus {
        outline: none;
    }

    @media (max-width: 991px) {
        .addRes {
            position: relative;
            top: 10%;
            left: 49%;
            z-index: 1;
        }
       
    }
    @media (max-width: 1200px) {
         .insights{
            font-size: 13px;
        }

    }
</style>