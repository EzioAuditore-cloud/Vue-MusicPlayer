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
          name: '红色高跟鞋',
          author:'蔡健雅',
          singer:'珈乐carol',
          url:require('../assets/music/2021.08.14 红色高跟鞋 2.0.mp3'),
          time:'03:32'
        },
        {
          name: '云烟成雨',
          author:'房东的猫',
          singer:'珈乐carol',
          url:require('../assets/music/2020.12.25 云烟成雨.mp3'),
          time:'03:35'
        },
        {
          name: '素颜',
          author:'许嵩,何曼婷',
          singer:'珈乐carol,嘉然Diana',
          url:require('../assets/music/2021.05.22 海底.mp3'),
          time:'04:33'
        },
        {
          name: '求佛',
          author:'誓言',
          singer:'珈乐carol',
          url:require('../assets/music/2021.08.27 求佛.mp3'),
          time:'04:13'
        },
        {
          name: '在水一方',
          author:'邓丽君',
          singer:'珈乐carol,乃琳Eileen',
          url:require('../assets/music/2021.09.03 在水一方.mp3'),
          time:'04:45'
        },
        {
          name: '隔岸',
          author:'姚六一',
          singer:'珈乐carol',
          url:require('../assets/music/2021.10.13 隔岸 [预录].mp3'),
          time:'04:19'
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