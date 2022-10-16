<template>
    <div>
        <Topbar :tabs='tabs' />
        <div class="container-fluid  w-100">

            <div class="row">
                <div class="col-4">
                    <Sidebar :haveTopbar="true" profileName="Tan Yi Peng" profileRole="Secondary 3 Student" />
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
                            <h5 class="modal-title" id="exampleModalLabel">Bootstrap 5 Modal Form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row">
                                <div class="mb-3 col-6">
                                    <label class="form-label">Score</label>
                                    <input type="number" min="0" max="100" class="form-control" id="score" name="score"
                                        placeholder="Score in %" v-model='score' />
                                </div>
                                <div class="mb-3 form-check col-6">
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
                <div class="col-6">

                    <button type="button" class="btn float-end mx-auto d-block mt-5" data-bs-toggle="modal"
                        data-bs-target="#modalForm">
                        <i class="fa-solid fa-circle-plus fa-lg"></i>
                    </button>
                    <!-- 
                    <ChartTest :data="data" :title='title' /> -->
                    <canvas id="progress-chart" width="600" height="450"></canvas>
                    <button @click="test">Test</button>
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
        arrayRemove, onSnapshot
    } from "firebase/firestore";
    export default {
        name: "Progress",
        components: {
            Sidebar,
            Topbar,
            ChartTest
        },
        mounted() {

            const progressChart = new Chart(document.getElementById("progress-chart"), {
                type: 'line',
                // title:"Sec 1 Progress",
                data: {
                    labels: ['CA1', 'SA1', 'CA2', 'SA2'],
                    datasets: [
                        // {
                        //     data: [{y:86,x:CA1},86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                        //     label: "Africa",
                        //     borderColor: "#3e95cd",
                        //     fill: false
                        // },
                    ]
                },
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
                            stacked: false,
                            max: 0,
                            min: 100,
                            ticks: {

                                stepSize: 10
                            },
                            title: {
                                display: true,
                                text: 'Your Score (%)'
                            }
                        }
                    }
                }
            });

            // this.getData().then((dataArray) => {
            //     progressChart.data.datasets = dataArray[0]
            //     this.getCount(dataArray[0])
            //     this.data = dataArray[0]
            //     console.log(dataArray[1])
            //     this.existingSubjects=dataArray[1]
            //     progressChart.update()

            // })
               var email = localStorage.getItem("email");
 const snapshotData= onSnapshot(doc(db, "users", email), (doc) => {
                console.log("Current data: ", doc.data());
     console.log('hello')
     this.snapshotData = doc.data()
     this.snapShotprogress = doc.data().progressResults
     let test=[]
     for (let item in doc.data().progressResults) {
         console.log(doc.data().progressResults[item])
        test.push(doc.data().progressResults[item])
     }
     console.log(test)

     progressChart.data.datasets = test
    
     progressChart.update()
                

            });


        },
        
    methods: {
        test() {
                  console.log(this.snapShotprogress)
            },

            getCount(data) {
                this.count = data.length
            },
            async getData() {
                var email = localStorage.getItem("email");
                var ref = doc(db, 'users', email);
                const docSnap = await getDoc(ref)
                if (docSnap.exists()) {
                    var data = docSnap.data().progressResults
                    var existingSubjects = docSnap.data().existingSubjects
              
             
                    return [data,existingSubjects]


                } else {
                    console.log('does not exist')
                }


            },
            async addResult() {
              
                let count = this.count
                var email = localStorage.getItem("email");
                var ref = doc(db, 'users', email);
                console.log(this.data)
                console.log(this.existingSubjects)
                if (!this.existingSubjects.includes(this.subject)) {
                    this.existingSubjects.push(this.subject)
                    const newData = {
                        data: [{
                            x: this.examType,
                            y: this.score
                        }],
                        label: this.subject,
                        borderColor: this.colors[count],
                        fill: false
                    }
                    await updateDoc(
                        ref, {
                            progressResults: arrayUnion(newData),
                            existingSubjects: arrayUnion(this.subject),
                        
                        }
                    )


                } else {
                    //TBC
                    progressResults= [
                        {
                            English: {
                                data: [{
                                    x: this.examType,
                                    y: this.score
                                }],
                                borderColor: this.colors[count],
                                fill: false
                            }
                        },
                        {
                            Math: {
                                data: [{
                                    x: this.examType,
                                    y: this.score
                                }],
                                borderColor: this.colors[count],
                                fill: false
                            }
                        },


                    
                    ]
                     
                }



            }
        },

        data() {
            return {
                score: 0,
                examType: '',
                subject: '',
                count: 0,
                data: [],
                existingSubjects: [],
                snapshotData: '',
                snapShotprogress: '',
                // existingSubjects: [],
                colors: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#21c095", "#bbc021", "#1a993a",
                    "##904b23", "#a01359", "#a04913", "#534270"
                ],
                // title: '',
                // data: {
                //     labels: ['CA1', 'SA1', 'CA2', 'SA2'],
                //     datasets: [

                //     ]
                // },
                tabs: [{
                        link: '',
                        name: "subject",
                        dropdown: true,
                        dropdownTabs: [{
                                name: 'math',
                                link: '#'
                            },
                            {
                                name: 'science',
                                link: '#'
                            },
                        ]

                    },
                    {
                        link: '#',
                        name: "test",
                        dropdown: false,
                        dropdownTabs: []

                    },
                ]

            }
        }
    }
</script>

<style>


</style>