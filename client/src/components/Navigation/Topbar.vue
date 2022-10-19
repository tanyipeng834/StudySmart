<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark topbar">
        <div class="container-fluid">


            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <!-- <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Profile</a>
                <a href="#" class="nav-item nav-link">Messages</a>
                <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a> -->
                    <a :href='tab.link' class="nav-item nav-link"
                        v-for="(tab, index) in tabs.filter((tab)=> tab.dropdown===false)" :key="index">
                        {{tab.name}}
                    </a>

                    <DropdownMenu v-for="(tab, index) in tabs.filter((tab)=> tab.dropdown===true)" :key="index"
                        :tab="tab" />

                </div>

            </div>
        </div>
    </nav>
</template>
<script>
    import DropdownMenu from "./DropdownMenu.vue";

    export default {
        name: "Topbar",
        props: {
            tabs: Array
        },
        components: {
            DropdownMenu,

        }

    }
</script>
<style scoped>

.topbar{
    position: sticky;
    top:0;
}
</style>