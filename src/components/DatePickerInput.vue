<template>
  <!-- Label -->
  <label :class="[!!label ? 'mb-2' : 'mb-6']" class="block uppercase tracking-wide text-gray-700 text-xs font-bold" :for="`${name}-input`">
    {{ label }}
  </label>

  <!-- Input -->
  <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 leading-tight focus-within:outline-none focus-within:bg-white flex justify-end" @click="showDatepicker = !showDatepicker">
    <input
      v-model="datepickerValue"
      :name="`${name}-input`"
      type="text"
      readonly
      @keydown.escape="showDatepicker = false"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-none rounded leading-tight focus:outline-none focus:bg-white"
      placeholder="Select date"
    >
    <span class="prefix absolute -mt-0.5">
      <svg
        class="h-6 w-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </span>
  </div>

  <!-- Popup Calendar -->
  <div v-if="showDatepicker" class="relative">
    <div :class="[
      'w-72 bg-white rounded-lg shadow p-4 absolute z-10',
      'top-0',

      // For loan calculators
      'left-0 right-auto',
      'lg:left-auto lg:right-0'
    ]">
      <!-- Month and Controls -->
      <div class="flex justify-between items-center mb-2">
        <div>
          <span class="text-lg font-bold text-gray-800">{{ MONTH_NAMES[month] }}</span>
          <span class="ml-1 text-lg text-gray-600 font-normal" >{{ year }}</span>
        </div>
        <div>
          <button
            type="button"
            class=" transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
            :class="{ 'cursor-not-allowed opacity-25': month == 0 }"
            :disabled="month == 0 ? true : false"
            @click=" month--; getNoOfDays();"
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            class=" transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
            :class="{ 'cursor-not-allowed opacity-25': month == 11 }"
            :disabled="month == 11 ? true : false"
            @click=" month++; getNoOfDays();"
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <button type="button" class="absolute -top-1.5 -right-1.5 p-0 w-5 h-5 bg-gray-200 rounded-full hover:bg-gray-300 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none flex justify-center items-center" @click="showDatepicker = false">
          <span class="sr-only">Close menu</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Weekdays Header -->
      <div class="flex flex-wrap mb-3 -mx-1">
        <div v-for="(day, index) in DAYS" :key="index" class="day-cell px-1">
          <div class="text-gray-800 font-medium text-center text-xs">{{ day }}</div>
        </div>
      </div>

      <!-- Days -->
      <div class="flex flex-wrap -mx-1">
        <div
          v-for="blankDay in blankDays"
          :key="blankDay"
          class="day-cell text-center border p-1 border-transparent text-sm"
        />
        <div v-for="(date, dateIndex) in noOfDays" :key="dateIndex" class="day-cell px-1 mb-1">
          <div
            class="cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100"
            :class="{
              'bg-blue-500 text-white': isToday(date) == true,
              'text-gray-700 hover:bg-blue-200': isToday(date) == false,
            }"
            @click="getDateValue(date)"
          >
            {{ date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    name: { type: String, default: 'date-picker' },
    label: { type: String, default: 'Select Date' },
  },
  setup() {
    // Constants
    const MONTH_NAMES = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Set initial date
    const today = new Date();

    // Reactive
    const showDatepicker = ref(false);
    const datepickerValue = ref('');
    const month = ref(today.getMonth());
    const year = ref(today.getFullYear());
    const noOfDays = ref([]);
    const blankDays = ref([]);
    const days = ref(DAYS);

    datepickerValue.value = today.toDateString();

    function isToday(date) {
      const currentDate = new Date();
      const d = new Date(year.value, month.value, date);

      return currentDate.toDateString() === d.toDateString();
    }

    function getDateValue(date) {
      const selectedDate = new Date(year.value, month.value, date);
      datepickerValue.value = selectedDate.toDateString();

      showDatepicker.value = false;
    }

    function getNoOfDays() {
      const daysInMonth = new Date(year.value, month.value + 1, 0).getDate();

      // find where to start calendar day of week
      const dayOfWeek = new Date(year.value, month.value).getDay();
      const blankdaysArray = [];
      for (let i = 1; i <= dayOfWeek; i++) { // eslint-disable-line no-plusplus
        blankdaysArray.push(i);
      }

      const daysArray = [];
      for (let i = 1; i <= daysInMonth; i++) { // eslint-disable-line no-plusplus
        daysArray.push(i);
      }

      blankDays.value = blankdaysArray;
      noOfDays.value = daysArray;
    }

    getNoOfDays();

    return {
      // Constants
      MONTH_NAMES,
      DAYS,

      // Reactive
      showDatepicker,
      datepickerValue,
      month,
      year,
      noOfDays,
      blankDays,
      days,

      // Methods
      isToday,
      getDateValue,
      getNoOfDays,
    };
  },
};
</script>

<style>
.day-cell {
  width: 14.28%;
}
</style>
