<template>
    <div>
        <Topbar :tabs='tabs'/>
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
    },
        
        data() {
            return {
                tabs: [
                    {
                        link:'',
                        name: "subject",
                        dropdown: true,
                        dropdownTabs: [
                            {
                                name: 'math',
                                link:'#'
                            },
                               {
                                name: 'science',
                                link:'#'
                            },
                        ]
                        
                    },
                    {
                        link:'#',
                        name: "test",
                        dropdown: false,
                        dropdownTabs:[]
                        
                    },
                ]

            }
        }
    }
</script>

<style>


</style>