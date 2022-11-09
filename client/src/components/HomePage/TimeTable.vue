<template>
  <div class="wrap">
    <div class="content">
      <h1 class="text-center">Drag and Hold to add a new class! <br>
        Try dragging, hovering, clicking the classes to customise them! 
        
      </h1>
      <DayPilotCalendar id="dp" :config="calendarConfig" ref="calendar" />
    </div>
  </div>
</template>

<script>
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-vue";

// Database setup
import { initializeApp } from "firebase/app";
import { auth, db } from "../../main";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  addDoc,
  deleteDoc,
  deleteField,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export default {
  name: "ResourceCalendar",

  data: function () {
    return {
      calendarConfig: {
        viewType: "Resources",
        durationBarVisible: false,
        timeRangeSelectedHandling: "Enabled",
        columns: [
          { name: "Mon", id: "R1" },
          { name: "Tue", id: "R2" },
          { name: "Wed", id: "R3" },
          { name: "Thur", id: "R4" },
          { name: "Fri", id: "R5" },
        ],
        onTimeRangeSelected: async (args) => {
          await this.createEvent(args.start, args.end, args.resource);
          this.calendar.clearSelection();
        },
        onEventClick: (args) => {
          this.editEvent(args.e);
        },
        eventDeleteHandling: "Update",
        onEventMoved: (args) => {
          this.editEventDrag(args.e);
          console.log("Event resized", args.e);
        },
        onEventDelete :args => {
    if (!confirm("Do you really want to delete this event?")) {
      args.preventDefault();
    }},
    onEventDeleted: (args) => {
          this.deleteEvent(args.e);
  
        },
        onEventResized: (args) => {
        
          console.log("Event resized", args.e);
        },
      },

      eventlist: [
        
      ],
      eventid: [],
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
    async deleteEvent(e){
      var email = localStorage.getItem("email");

await deleteDoc(doc(db, "users", email,'timetable',e.data.id));
    },
    async loadEvents() {
      // placeholder for an HTTP call
      var email = localStorage.getItem("email");

      const querySnapshot = await getDocs(collection(db, "users", email, "timetable"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var event = {};
        var hour = doc.data().startHour;
        event.start = DayPilot.Date.today()
          .addHours(hour)
          .addMinutes(doc.data().startMinute);

        event.end = DayPilot.Date.today()
          .addHours(doc.data().endHour)
          .addMinutes(doc.data().startMinute);
        event.resource = doc.data().resource;
        event.id = doc.data().id;
        event.text = doc.data().subject;
        event.backColor = doc.data().backColor;

        this.eventlist.push(event);
      });
      const events = this.eventlist;
      this.calendar.update({ events });
    },

    loadResources() {
      var dp = document.getElementById("dp");
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
      console.log(modal.result)
      var email = localStorage.getItem("email");
      const eventRef = doc(db, "users", email,'timetable',modal.result.id);
      var f=modal.result
      console.log(f.start.value)

await updateDoc(eventRef, {
  resource: modal.result.resource,
  startHour: f.start.value.slice(11, 13),
        endHour: f.end.value.slice(11, 13),
        startMinute: f.start.value.slice(14, 16),
        endMinute: f.end.value.slice(14, 16),

});

    
    },
    async editEventDrag(e) {
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
      console.log(modal.result)
      var email = localStorage.getItem("email");
      const eventRef = doc(db, "users", email,'timetable',modal.result.id);
      var f=modal.result

await updateDoc(eventRef, {
  resource: modal.result.resource,
  startHour: f.start.value.slice(11, 13),
        endHour: f.end.value.slice(11, 13),
        startMinute: f.start.value.slice(14, 16),
        endMinute: f.end.value.slice(14, 16),

});
    
    },
    async createEvent(start, end, resource) {
      const form = [
        { name: "Subject", id: "text" },
        {
          name: "Color",
          id: "Color",
          type: "select",
          options: [
            { name: "Red", id: "#FFADAD" },
            { name: "Orange", id: "#FFD6A5" },
            { name: "Yellow", id: "#FDFFB6" },
            { name: "Green", id: "#CAFFBF" },
            { name: "Blue", ID: "#9BF6FF" },
            { name: "Purple", id: "#BDB2FF" },
            { name: "Pink", id: "#FFC6FF" },
          ],
        },
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

      var email = localStorage.getItem("email");
      const e = modal.result;
      e.backColor = modal.result.Color;
      var color = e.Color;
      var id=DayPilot.guid()
      const eventData = {
        startHour: e.start.slice(11, 13),
        endHour: e.end.slice(11, 13),
        startMinute: e.start.slice(14, 16),
        endMinute: e.end.slice(14, 16),
        resource: e.resource,
        id: id,
        backColor: color,
        subject: e.text,
      };
      this.calendar.events.add(e);

      await setDoc(doc(db, "users", email, "timetable", id), eventData);

      this.eventid.push(eventData.subject);
    },
  },
  mounted() {
    this.loadResources();
    this.loadEvents();
    console.log(this.eventlist);
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

