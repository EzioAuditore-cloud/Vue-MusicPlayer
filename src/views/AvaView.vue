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
          >Play</el-button
        >
        <el-button
        type="text"
        size="small"
        @click.prevent="AddRow(scope.$index, scope.row)"
        >
          Add
        </el-button>
      </template>
      </el-table-column>
    </el-table>
    <audio id="play" autoplay controls></audio>
  </div>
</template>

<script>
var add=[];
export default {
  add,
  data() {
    return {
      tableData: [
        {
          name: 'Secret Player',
          author:'向晚Ava',
          singer:'向晚Ava',
          url:require('../assets/music/2021.06.12 Secret  Player.mp3'),
          time:'02:37'
        },
        {
          name: '水母之歌',
          author:'向晚Ava',
          singer:'向晚Ava',
          url:require('../assets/music/2021.09.15 水母之歌 最终版.mp3'),
          time:'03:37'
        },
        {
          name: '夜空中最亮的星',
          author:'逃跑计划',
          singer:'向晚Ava',
          url:require('../assets/music/2021.06.23 夜空里最亮的星.mp3'),
          time:'05:42'
        },
        {
          name: '爱河',
          author:'神马乐团',
          singer:'向晚Ava',
          url:require('../assets/music/2021.04.02 爱河.mp3'),
          time:'01:33'
        },
        {
          name: '知足',
          author:'五月天',
          singer:'向晚Ava',
          url:require('../assets/music/2021.04.28 知足.mp3'),
          time:'05:51'
        },
        {
          name: '青柠',
          author:'徐秉龙、桃十五',
          singer:'向晚Ava,嘉然Diana,乃琳Eileen',
          url:require('../assets/music/2021.10.30 青柠 3.0.mp3'),
          time:'03:17'
        },
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      document.getElementById("play").src = row.url;
      console.log(add)
    },
    AddRow(index, row) {
      add.push(row);
    }
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