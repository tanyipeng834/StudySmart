<template>
  <div class="wrap">
    <div class="content">
      <h1>Drag and Hold to add new schedule!</h1>
      <DayPilotCalendar id="dp" :config="calendarConfig" ref="calendar"/>
    </div>
  </div>
</template>

<script>
import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-vue";

// Database setup
import { initializeApp } from "firebase/app";
import { doc, setDoc, addDoc, collection, getFirestore, getDocs,updateDoc } from "firebase/firestore";





export default {
  name: "ResourceCalendar",
  data: function () {
    return {
        
      calendarConfig: {
        viewType: "Resources",
        durationBarVisible : false,
        timeRangeSelectedHandling: "Enabled",
        columns : [
        { name: "Monday", id: "R1" },
        { name: "Tuesday", id: "R2" },
        { name: "Wednesday", id: "R3" },
        { name: "Thursday", id: "R4" },
        { name: "Friday", id: "R5" },
      ],
        onTimeRangeSelected: async (args) => {
          await this.createEvent(args.start, args.end, args.resource);
          this.calendar.clearSelection();
        },
        onEventClick: (args) => {
          this.editEvent(args.e);
        },
        eventDeleteHandling: "Disabled",
        onEventMoved: (args) => {
          this.editEvent(args.e);
          
          
          // console.log("Event moved", args.e);
        },
        onEventResized: (args) => {
          console.log("Event resized", args.e);
        },
        eventList:[],


      },
    };
  },
  props: {},
  components: {
    DayPilotCalendar,
  },
  computed: {
    // DayPilot.Calendar object - https://api.daypilot.org/daypilot-calendar-class/
    calendar() {
      return this.$refs.calendar.control;
    },
  },
  methods: {
    loadEvents() {
      // placeholder for an HTTP call

      this.calendar.update({events});
    },
  


    loadResources() {
       var dp = document.getElementById('dp')
  dp.dayBeginsHour = 9;
  dp.dayEndsHour = 6;
      
      

    },
    async editEvent(e) {
      const form = [
        { name: "Subject", id: "text" },
        
        {
          name: "Day",
          id: "resource",
          type: "select",
          options: this.calendar.columns.list,
        },
      ];
      const data = e.data;
      const modal = await DayPilot.Modal.form(form, data);
      if (modal.canceled) {
        return;
      } else {
        this.calendar.events.update(modal.result);
      }

    
    },
    async createEvent(start, end, resource) {
      const form = [
        { name: "Subject", id: "text" },
        {name:'Color',id:'Color',type:'select',options:[{name:'Red',id:'#FFADAD'},{name:'Orange',id:'#FFD6A5'},{name:'Yellow',id:'#FDFFB6'},{name:'Green',id:'#CAFFBF'},{name:'Blue',ID:'#9BF6FF'},{name:'Purple',id:'#BDB2FF'},{name:'Pink',id:'#FFC6FF'}]},
        {
          name: "Day",
          id: "resource",
          type: "select",
          options: this.calendar.columns.list,
        },
      ];
      const data = {
        start,
        end,
        resource,
        id: DayPilot.guid()
      
        
      };
      const modal = await DayPilot.Modal.form(form, data);
      if (modal.canceled) {
        return;
      }
      console.log(modal.result)
      
      const e = modal.result;
      e.backColor=modal.result.Color
     
      this.calendar.events.add(e);

      
      
      
      // set(ref(db,'timetable'),{
      //   start: start,
      //   end:end,
      //   resource:resource
      // })
      // .then(()=>{
      //   alert('data stored successfully')
      // })
      // .catch((error)=>{
      //   alert('unsuccessful, error'+error)
      // })
    },
    
  },
  mounted() {
    this.loadResources();
    // this.loadEvents();
    

  },
};
</script>

<style>
.wrap {
  display: flex;
}

.left {
  margin-right: 10px;
}

.content {
  flex-grow: 1;
}


.calendar_default_event_inner {
  background: #2e78d6;
  color: black;
  text-decoration: solid;
  text-align: center;
  border-radius: 6px;
 
}
</style>
