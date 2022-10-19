<template>
    <div>
        <!-- <Topbar :tabs='tabs' /> -->
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
                                        <option value="CA1">CA1</option>
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
 
            <div class="row justify-content-center">
                <div class="col-md-8 col-12">
                    <div class="row">
                        <div class="col-6">

                            <select class="form-select form-select float-bottom mt-5 selectLevel" aria-label=".form-select-sm "
                                id="examType" v-model='level' @change="change">

                                <option value="1" :selected="level === 1">Sec 1</option>
                                <option value="2" :selected="level === 2">Sec 2</option>
                                <option value="3" :selected="level === 3">Sec 3</option>
                                <option value="4" :selected="level === 4">Sec 4</option>
                                <option value="5" :selected="level === 5">Sec 5</option>
                            </select>
                        </div>
                        <div class="col-2">

                            <button type="button" class="btn float-end mx-auto mt-5" data-bs-toggle="modal"
                                data-bs-target="#modalForm">
                                <i class="fa-solid fa-circle-plus fa-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div class="line-chart">
                        <div class="aspect-ratio">
                            <canvas id="progress-chart" class="shadow chart" width="600" height="450"></canvas>
                        </div>
                    </div>

                </div>
                <div class="col-md-2 col-12 d-flex flex-column justify-content-center">
                    <div >
                        ds
                    </div>
                    <div >
ds
                    </div>
                    <div >
ds
                    </div>
                </div>
            </div>


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
                        bodyColor:'black',
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
            let level = this.getLevel()
            console.log(level)
            var email = localStorage.getItem("email");
            console.log(email)
            progressChart.options.plugins.title['text'] = `Secondary ${level} Progress`
            const q = query(collection(db, "users", email, 'progressResults' + level))
            onSnapshot(q, (querySnapshot) => {
                const data = []
                const existingSubjects = []
                querySnapshot.docs.forEach((docSnapshot) => {
                    if (docSnapshot.id != 'ignore' && !data.includes(docSnapshot.data())) {
                        existingSubjects.push(docSnapshot.id)
                        console.log(docSnapshot.id)
                        console.log(docSnapshot.data())
                        data.push(docSnapshot.data())
                        //     data.push([docSnapshot.id, docSnapshot.data()])
                    }

                });
                console.log(data)
                if (data.length != 0) {
                    progressChart.data.datasets = data
                    this.data = data
                    console.log(data)
                    progressChart.update()
                }
                this.existingSubjects = existingSubjects
                // this.count = existingSubjects.length

            });
            console.log(email)


        },

    methods: {
        colorItems(tooltipItem) {
            // console.log(tooltipItem.tooltip.labelColors[0].borderColor)
            const tooltipBg=tooltipItem.tooltip.labelColors[0].borderColor
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
                    "70%,"+
                    "80%,1)",

                        label: this.subject,
                        tension:0.4
            
			   

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
                data: [],
                x: [],


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
*{
 font-size: medium;
}
.line-chart {
	animation: fadeIn 600ms cubic-bezier(.57,.25,.65,1) 1 forwards;
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
.chart{
    padding: 2vw;
      position: absolute;
}
.shadow{

    box-shadow: 3px 3px 5px 6px #ccc;
}
</style>