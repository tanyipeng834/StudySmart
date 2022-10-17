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
                <div class="col-6">
                    <div class="row">
              <div class="col-6">
           
                                    <select class="form-select form-select float-bottom mt-5" aria-label=".form-select-sm "
                                        id="examType" v-model='level'>
                                     
                                        <option value="1" >Sec 1</option>
                                        <option value="2">Sec 2</option>
                                        <option value="3">Sec 3</option>
                                        <option value="4">Sec 4</option>
                                        <option value="5">Sec 5</option>
                                    </select>
                                    </div>
                                <div class="col-6">

                    <button type="button" class="btn float-end mx-auto mt-5" data-bs-toggle="modal"
                        data-bs-target="#modalForm">
                        <i class="fa-solid fa-circle-plus fa-lg"></i>
                    </button>
                    </div>
                    </div>
                    <!-- 
                    <ChartTest :data="data" :title='title' /> -->
                    <canvas id="progress-chart" width="600" height="450"></canvas>

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
        },  watch: {
        level:function() {
           this.init()
        }
    },
        mounted() {
this.init()
        
        },

    methods: {
        init() {
                    const progressChart = new Chart(document.getElementById("progress-chart"), {
                type: 'line',
                // title:"Sec 1 Progress",
                data: {
                    labels: ['CA1', 'SA1', 'CA2', 'SA2'],
                    datasets: [

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


            var email = localStorage.getItem("email");
            let level = this.level
            this.title=`Secondart ${level} Progress Chart`
            const q = query(collection(db, "users", email, 'progressResults' + level))
            console.log(level)

            onSnapshot(q, (querySnapshot) => {
                const data = []
                const existingSubjects = []
                querySnapshot.docs.forEach((docSnapshot) => {
                    if (docSnapshot.id != 'ignore' && !data.includes(docSnapshot.data())) {
                        existingSubjects.push(docSnapshot.id)
                        data.push(docSnapshot.data())
                    }

                });
                console.log(data)
                console.log(level)
                if (data.length ==0) {
                    progressChart.data.datasets = data
                    progressChart.update()
                }
                this.existingSubjects = existingSubjects
                this.count = existingSubjects.length

            });
            console.log(email)

            },
            test() {
                console.log(this.snapShotprogress)
            },



            async addResult() {

                let count = this.count
                var email = localStorage.getItem("email");

                var colRef = doc(db, 'users', email, 'progressResults', this.subject);

                if (!this.existingSubjects.includes(this.subject)) {
                    this.existingSubjects.push(this.subject)
                    const newData = {

                        data: [{
                            x: this.examType,
                            y: this.score
                        }],
                        borderColor: this.colors[count],
                        fill: false,
                        label: this.subject,

                    }


                    console.log(newData)

                    await setDoc(doc(db, "users", email, 'progressResults', this.subject), newData);

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
                count: 0,
                data: [],
                title: 'Sec 3 Progress',
                existingSubjects: [],
                level:'1',
                colors: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#21c095", "#bbc021", "#1a993a",
                    "##904b23", "#a01359", "#a04913", "#534270"
                 ],

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

<style>


</style>