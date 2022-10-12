<template>
    <Sidebar profileName ="Tan Yi Peng" profileRole="Secondary 3 Student"/>

<CountDown />

</template>



<script>
import Sidebar from "../components/HomePage/Sidebar.vue"
import CountDown from "../components/HomePage/CountDown.vue"


export default{
    name:"Dashboard",
    components:
    {
        Sidebar,
        CountDown
    },
        data(){
            return {}
        }

    


}



</script>

<style scoped>



</style>