<template>
    <div >
        <Topbar />
        <div class="container-fluid  w-100">
        
            <div class="row">
                <div class="col-4">
                    <Sidebar profileName="Tan Yi Peng" profileRole="Secondary 3 Student" />
                </div>
                <div class="col-4 ">
        
                </div>
                <div class="col-4 ">
        
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Sidebar from "../components/Navigation/Sidebar.vue";
    import Topbar from "../components/Navigation/Topbar.vue";
    export default {
    name: "Progress",
    components: {
        Sidebar,
            Topbar
        }
    }
</script>

<style>


</style>