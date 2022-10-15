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
                                        <input type="number" min="0" max="100" class="form-control" id="score"
                                            name="score" placeholder="Score in %" v-model='score' />
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
                                        <input type="text" class="form-control" id="subject" name="subject"
                                            placeholder="" v-model='subject' />
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

                    <ChartTest :data="data" :title='title' />
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    import Sidebar from "../components/Navigation/Sidebar.vue";
    import Topbar from "../components/Navigation/Topbar.vue";
    import ChartTest from "../components/ProgressPage/ChartTest.vue";
    export default {
        name: "Progress",
        components: {
            Sidebar,
            Topbar,
            ChartTest
        },
        methods: {
            addResult() {

                let count = this.existingSubjects.length

                if (!this.existingSubjects.includes(this.subject)) {
                    this.existingSubjects.push(this.subject)
                    console.log(this.subject)
                    const newData = {
                        data: [this.score],
                        label: this.subject,
                        borderColor: this.colors[count],
                        fill: false
                    }
                    this.data.datasets.push(newData)
                    console.log(this.data.datasets)
                   
                    

                } else {
                    //TBC
                }



            }
        },

        data() {
            return {
                score: '',
                examType: '',
                subject: '',
                existingSubjects: [],
                colors: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                title: '',
                data: {
                    labels: ['CA1', 'SA1', 'CA2', 'SA2'],
                    datasets: [

                        // {
                        //     data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                        //     label: "Africa",
                        //     borderColor: "#3e95cd",
                        //     fill: false
                        // },
                        //dynamically add data here
                    ]
                },
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