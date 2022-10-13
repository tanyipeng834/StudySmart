<template>
    <div class="container-fluid login w-100">
        <div class="row">
            <div class="col-4">
                <Sidebar profileName="Tan Yi Peng" profileRole="Secondary 3 Student" />
            </div>
            <div class="col-4"></div>
            <div class="col-4">

            </div>
        </div>


    </div>
</template>
<script>
    import Sidebar from "../components/HomePage/Sidebar.vue";
    export default {
    name: "Progress",
    components: {
            Sidebar
        }
    }
</script>