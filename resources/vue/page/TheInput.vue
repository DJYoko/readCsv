<template>
  <div>
    <h2>import</h2>
    <div class="form-group row">
      <label for="fileSelect" class="col-sm-3 col-form-label"
        >Example file input</label
      >
      <div class="col-sm-9">
        <input
          type="file"
          class="form-control-file"
          id="fileSelect"
          accept="csv"
          multiple="false"
          @change="onChange"
        />
      </div>
    </div>
    <hr />
    <h2>result</h2>
    <p v-if="!csvData">data is empty.</p>
    <div class="p-table-outer" id="fullScreenTargetElement">
      <div class="p-table-wrap">
        <table class="table" v-if="csvData" ref="dataTable">
          <thead>
            <td
              class="col-xs-1"
              v-for="colItem in displayCsvHeader"
              :key="colItem.index"
            >
              {{ colItem }}
            </td>
          </thead>
          <tbody>
            <tr v-for="rowItem in displayCsvData" :key="rowItem.index">
              <td
                class="col-xs-1"
                v-for="colItem in rowItem"
                :key="colItem.index"
              >
                {{ colItem }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="text-center u-p-10">
      <button
        type="button"
        class="btn btn-secondary"
        :disabled="!isValid"
        :class="isValid ? 'disabled' : ''"
        @click="toggleFullScreen"
      >
        show full screen
      </button>
      <button
        type="button"
        class="btn btn-primary"
        :disabled="!isValid"
        :class="isValid ? 'disabled' : ''"
        @click="onSubmit"
      >
        submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheInput',
  data: () => {
    return {
      csvData: '', // PLAIN text data of CSV
    }
  },
  computed: {
    isValid() {
      return this.csvData !== ''
    },
    displayCsvData() {
      const plainData = this.csvData
      const rows = plainData.split('\n')

      if (rows.length < 2) {
        return []
      }
      rows.shift() // remove header row

      return rows.map((rowItem) => {
        return rowItem.split(',')
      })
    },
    displayCsvHeader() {
      const plainData = this.csvData
      const rows = plainData.split('\n')
      if (rows.length === 0) {
        return []
      }
      return rows[0].split(',')
    },
  },
  methods: {
    onChange(event) {
      const _files = event.target.files

      if (_files.length === 0) {
        this.csvData = ''
      }

      const _file = _files[0] // target data
      const reader = new FileReader()

      reader.onload = () => {
        this.csvData = reader.result
      }

      reader.readAsText(_file)
    },
    onSubmit() {
      alert('look console')

      const paylaod = {
        csvData: this.displayCsvData,
      }

      console.log(paylaod)
    },
    toggleFullScreen() {
      document.getElementById('fullScreenTargetElement').requestFullscreen()
    },
  },
}
</script>
