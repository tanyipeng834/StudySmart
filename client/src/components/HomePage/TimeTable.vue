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
        navigatorConfig: {
        
        onTimeRangeSelected: args => {
          this.calendarConfig.startDate = args.day;
        }
      },
      calendarConfig: {
        viewType: "Resources",
        timeRangeSelectedHandling: "Enabled",
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
        start: '',
        end:'',
        subject:'',
        scheduleName:''


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
    // loadEvents() {
    //   // placeholder for an HTTP call

    //   this.calendar.update({events});
    // },
    saveEvent(){
      const db=getFirestore()

      setDoc(doc(db,'timetable',this.scheduleName),{
        end:this.end,
        start:this.start,
        subject:this.subject,

      }).then(()=>{
        alert('Data stored successfully')
      })
      .catch((error)=>{
        alert('Unsuccessful, error'+error)
      })
      

    },
    async editData(e){
      console.log(e)
      const db=getFirestore()
    const ref = doc(db, "timetable", this.scheduleName);
    

// Set the "capital" field of the city 'DC'
    await updateDoc(ref, {
      "end": this.end,
      "start": this.start,
      "subject":this.subject
  }).then(()=>{
        alert('Data stored successfully')
      })
      .catch((error)=>{
        alert('Unsuccessful, error'+error)
      });


      
    },

    loadResources() {
       var dp = document.getElementById('dp')
  dp.dayBeginsHour = 9;
  dp.dayEndsHour = 10;
      const columns = [
        { name: "Monday", id: "R1" },
        { name: "Tuesday", id: "R2" },
        { name: "Wednesday", id: "R3" },
        { name: "Thursday", id: "R4" },
        { name: "Friday", id: "R5" },
      ];
      
      this.calendar.update({ columns });
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
      this.start=data.start.value
      this.end=data.end.value
      this.subject=data.text
      this.scheduleName=data.text+data.start.value
      this.editData()
    
    },
    async createEvent(start, end, resource) {
      const form = [
        { name: "Subject", id: "text" },
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
        id: DayPilot.guid(),
        
      };
      const modal = await DayPilot.Modal.form(form, data);
      if (modal.canceled) {
        return;
      }

      const e = modal.result;
      this.calendar.events.add(e);
      this.start=e.start.value
      this.end=e.end.value
      this.subject=e.text
      this.scheduleName=e.text+e.start.value
      this.saveEvent()

      
      
      
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

.navigator_default_busy.navigator_default_cell {
  border-bottom: 4px solid #ee4f2ecc;
  box-sizing: border-box;
}
.calendar_default_event_inner {
  background: #2e78d6;
  color: white;
  border-radius: 5px;
  opacity: 0.9;
}
</style>
