<template>
  <div class="container mx-auto text-center">
    <div class="flex justify-center my-16">
      <form>
        <div class="inline">
          <input
            class="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Cari item"
            v-model="searchValue"
          />
          <p
            v-if="this.searchValue.length > 0"
            class="char inline p-3 rounded-lg ml-2 bg-teal-400 text-white"
          >{{ searchValue.length }}</p>
          <p
            v-if="this.searchValue.length > 0 && this.searchValue.length < 3"
            class="bg-red-200 rounded-lg mt-2"
          >{{ message.character }}</p>
          <p v-if="this.message.loading">Sedang mencari...</p>
        </div>
      </form>
    </div>
    <ul class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
      <li v-bind:key="json.id" v-for="json in searchResult">
        <img v-bind:src="json.url" />
        <p>{{ json.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script src="./index.js"></script>
