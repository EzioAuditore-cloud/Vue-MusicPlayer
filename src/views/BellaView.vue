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
export default {
  data() {
    return {
      playing:'',
      tableData: [
        {
          name: '我只在乎你',
          author:'邓丽君',
          singer:'贝拉Bella,珈乐carol',
          url:require('../assets/music/2021.04.01 我只在乎你.mp3'),
          time:'04:02'
        },
        {
          name: '路边的野花不要采',
          author:'邓丽君',
          singer:'贝拉Bella',
          url:require('../assets/music/2021.06.04 路边的野花不要采.mp3'),
          time:'01:59'
        },
        {
          name: '海底',
          author:'一只榴莲',
          singer:'贝拉Bella,乃琳Eileen',
          url:require('../assets/music/2021.05.22 海底.mp3'),
          time:'04:33'
        },
        {
          name: '风中奇缘',
          author:'西单女孩',
          singer:'贝拉Bella',
          url:require('../assets/music/2021.09.30 风中奇缘.mp3'),
          time:'04:38'
        },
        {
          name: '隐形的翅膀',
          author:'张韶涵',
          singer:'贝拉Bella',
          url:require('../assets/music/2021.07.16 隐形的翅膀.mp3'),
          time:'03:43'
        },
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      document.getElementById("play").src = row.url;
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