<template>
  <div class="wrap">

    <div class="content">
      <h1>Drag and Hold to add new schedule!</h1>
      <DayPilotCalendar id="dp" :config="calendarConfig" ref="calendar" />
    </div>
  </div>
</template>

<script>
import {DayPilot, DayPilotCalendar} from '@daypilot/daypilot-lite-vue'

var colours = [
  {name: "Red", id: "red"},
  {name: "Orange", id: "orange"},
  {name: "Yellow", id: "yellow"},
  {name: "Blue", id: "blue"},
  {name: "Green", id: "green"},
  {name: "Purple", id: "purple"},
  {name: "Pink", id: "pink"},
  {name: "Grey", id: "grey"},
];



export default {
  name: 'ResourceCalendar',
  data: function() {
    return {

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
          console.log("Event moved", args.e);
        },
        onEventResized: (args) => {
          console.log("Event resized", args.e);
        },
      },
    }
  },
  props: {
  },
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
      const columns = [
        {name: "Monday", id: "R1"},
        {name: "Tuesday", id: "R2"},
        {name: "Wednesday", id: "R3"},
        {name: "Thursday", id: "R4"},
        {name: "Friday", id: "R5"},
      ];
      this.calendar.update({columns});
    },
    async editEvent(e) {
      const form = [
        {name: "Subject", id: "text"},
        {name: "Day", id: "resource", type: "select", options: this.calendar.columns.list}
      ];
      const data = e.data;
      const modal = await DayPilot.Modal.form(form, data);
      if (modal.canceled) {
        return;
      }
      else{
      this.calendar.events.update(modal.result);
      }

    },
    async createEvent(start, end, resource) {
      const form = [
        {name: "Subject", id: "text"},
        {name: "Day", id: "resource", type: "select", options: this.calendar.columns.list}
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

      const e = modal.result;
      this.calendar.events.add(e);
    }
  },
  mounted() {
    this.loadResources();
    this.loadEvents();
  }
}
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
  opacity: 0.9;}

</style>
