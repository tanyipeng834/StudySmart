<template>
    <div class="container">
        <Sidebar profileName="Tan Yi Peng" profileRole="Secondary 3 Student" />


        <div class="row">
            <div class="col-9">

            </div>
            <div class="col-3">
                <CountDown :tests="tests" />
            </div>
        </div>
    </div>

</template>



<script>
    import Sidebar from "../components/HomePage/Sidebar.vue"
    import CountDown from "../components/HomePage/CountDown.vue"


    export default {
        name: "Dashboard",
        components: {
            Sidebar,
            CountDown
        },
        data() {
            return {
                tests: []
            }
        },
    created() {
            //this is preferably stored in backend and is sorted before stored
            this.tests = [{
                id: 1,
                testName: 'CA1 Paper',
                date: '11/25/2022',
                subject: 'Maths'
            },
            {
                id: 2,
                testName: 'CA2 Paper',
                date: '01/25/2023',
                subject: 'Maths'
                },
            {
                id: 3,
                testName: 'SA1 Paper',
                date: '02/25/2023',
                subject: 'English'
            }]
    }
        




    }
</script>

<style scoped>



</style>