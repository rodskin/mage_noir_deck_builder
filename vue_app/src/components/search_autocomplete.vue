<template>
  <div class="autocomplete">
    <input
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        class="loading"
        v-if="isLoading"
      >
        Loading results...
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
      {{ result[1] }}
      </li>
    </ul>
  </div>
    <cardBlock :slug="searchKey" :key="forcedKey" />
</template>

<script>
  export default {
    name: 'searchAutocomplete',
    props: {
      items: {
        type: Array,
        required: false,
        default: () => [],
      },
      isAsync: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        isOpen: false,
        results: [],
        search: '',
        searchKey: '',
        isLoading: false,
        arrowCounter: -1,
        forcedKey: 0,
      };
    },
    watch: {
      items: function (value, oldValue) {
        if (value.length !== oldValue.length) {
          this.results = value;
          this.isLoading = false;
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    unmounted() {
      document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
      setResult(result) {
        let myResult = (Object.assign({}, result))
        console.log(myResult[1])
        this.search = myResult[1]
        this.searchKey = myResult[0]
        this.forcedKey += 1
        this.isOpen = false;
      },
      filterResults() {
        /*let asArray = JSON.parse(JSON.stringify(this.items))
        console.log(asArray)
        this.results = asArray.filter((key) => asArray[key].toLowerCase().indexOf(this.search.toLowerCase()) > -1)
        */
        let myItems = (Object.assign({}, this.items))
        let asArray = Object.entries(myItems);

        this.results = asArray.filter(([key, value]) => key == key && value.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
        /*this.results = myItems.filter(item => {
          return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        });*/
      },
      onChange() {
        this.$emit('input', this.search);

        if (this.isAsync) {
          this.isLoading = true;
        } else {
          this.filterResults();
          this.isOpen = true;
        }
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.isOpen = false;
          this.arrowCounter = -1;
        }
      },
      onArrowDown() {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter - 1;
        }
      },
      onEnter() {
        this.search = this.results[this.arrowCounter];
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
  };
</script>

<style>
  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>
