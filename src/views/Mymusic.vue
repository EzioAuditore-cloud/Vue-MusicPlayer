<template>
  <div class="box">
    <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    @row-click="handleEdit(scope.$index, scope.row)"
    style="width: 100%"
    >
      <el-table-column label="歌曲" prop="name" />
      <el-table-column label="演唱" prop="singer" />
      <el-table-column label="原唱" prop="author" />
      <el-table-column label="时长" prop="time" />
      <el-table-column align="right">
      <template #header>
        <el-input size="mini" v-model="search"/>
      </template>
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Play</el-button>
          <el-button
          type="text"
          size="small"
          @click.prevent="deleteRow(scope.$index, tableData)"
        >
          Remove
        </el-button>
      </template>
      </el-table-column>
    </el-table>
    <audio id="play" autoplay controls></audio>
  </div>
</template>
<script>
import View from './AvaView.vue'

export default {
  data() {
    return {
      playing:'',
      data:{},
      tableData: [
        {
          name: '猫中毒',
          author:'テゴマス(TegoMass)',
          singer:'嘉然',
          url:require('../assets/music/2021.08.12 猫中毒.mp3'),
          time:'02:18'
        },
        {
          name: '素颜',
          author:'许嵩,何曼婷',
          singer:'嘉然，珈乐',
          url:require('../assets/music/2021.01.22 素颜.mp3'),
          time:'03:52'
        },
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      document.getElementById("play").src = row.url;
      console.log(View.add)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    createRow() {
    }
  },
  mounted() {
      this.tableData=this.tableData.concat(View.add);
    }
}


</script>

<style>
  .box{
    opacity: 0.9;
    height: 570px;
    position: relative;
    background: aliceblue;
  }

  audio {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0%;
  }
</style>