<template>
     <div>
         <div class="nav-item dropdown">
         
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{tab.name}}</a>
                            <div class="dropdown-menu dropdown-menu-dark">
                                <a :href="item.link" class="dropdown-item" v-for="(item,index) in tab.dropdownTabs" :key="index">{{item.name}}</a>
         
                            </div>
         
                        </div>
                        
     </div>
</template>
<script>
export default {
    name: 'DropdownMenu',
    props: {
    tab:Object
    },

}

</script>