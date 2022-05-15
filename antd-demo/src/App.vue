<template>
  <div class="maincontainer">
    <div class="info">
      <!-- <span>Result</span> -->
      {{search.name}} |
      {{search.crt_amount}} |
      {{search.period_change_rate}}|
      {{search.total_change_rate}}
    </div>
    <a-input-search placeholder="输入名称" enter-button @search="onSearch" style="width:75%" class="btn" />
    <a-button style="width:25%" @click="getmessgae" type="primary" class="btn">刷新</a-button>
 <div>
    <a-table :data-source="data" border >
        <a-table-column
            key="name"
            title="Name"
            data-index="name"
          />
              <a-table-column
            key="crt_amount"
            title="Price"
          >
            <!-- <template slot-scope="record">
                {{record.crt_amount}}
            </template> -->

          </a-table-column>
              <a-table-column
            key="period_change_rate"
            title="5分钟"
            data-index="period_change_rate"
          />
          <a-table-column
            key="total_change_rate"
            title="今日"
            data-index="total_change_rate"
          />
    </a-table>
  </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      data:[],
      search:[]
    }
  },
  created () {
    this.getmessgae()
  },

  methods: {
     async getmessgae(){
      let res = await axios.get("https://api.nft.hanfu114.com/v2/tourist/platform/detective/rt/query?platform_id=c8gb15q2dtei4q721ukg")
      this.data=res.data.data;
      },
      onSearch(value){
      this.getmessgae()
     this.data= this.data.map(item => {
            if(item.name.indexOf(value)!=-1){
             this.search=  item
          }})
          
      }
  }
}
</script>

<style scoped >
.maincontainer{

  padding: 24px;
}
.btn{
  margin: 0;
  padding: 0;
  border: 0;
}
.info{
  margin-bottom: 10px;
  background-color: #fff;
  /* color: #fafafa; */
  font-size: 20px;
  border: 1px solid #ccc;
}
</style>
