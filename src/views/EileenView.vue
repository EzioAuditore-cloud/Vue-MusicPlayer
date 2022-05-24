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
      tableData: [
        {
          name: '醉',
          author:'黄龄',
          singer:'乃琳Eileen',
          url:require('../assets/music/2021.08.08 醉.mp3'),
          time:'04:50'
        },
        {
          name: '海底',
          author:'一只榴莲',
          singer:'乃琳Eileen,贝拉Bella',
          url:require('../assets/music/2021.05.22 海底.mp3'),
          time:'04:33'
        },
        {
          name: '渡月橋～君想ふ～',
          author:'仓木麻衣',
          singer:'乃琳Eileen',
          url:require('../assets/music/2021.08.08 渡月橋～君想ふ～.mp3'),
          time:'04:00'
        },
        {
          name: '阿拉斯加火锅(改词)',
          author:'蓝心羽',
          singer:'乃琳Eileen',
          url:require('../assets/music/2021.10.13 阿拉斯加火锅 [改词].mp3'),
          time:'03:56'
        },
        {
          name: 'Quiet',
          author:'A-soul五人',
          singer:'乃琳Eileen',
          url:require('../assets/music/2021.10.20 Quiet.mp3'),
          time:'04:45'
        },
        {
          name: '云烟成雨',
          author:'房东的猫',
          singer:'乃琳Eileen,嘉然Diana',
          url:require('../assets/music/2021.10.28 云烟成雨 [小狼生日快乐2.0].mp3'),
          time:'03:52'
        },
        {
          name: '红玫瑰',
          author:'陈奕迅',
          singer:'乃琳Eileen',
          url:require('../assets/music/2021.10.29 红玫瑰 2.0.mp3'),
          time:'03:56'
        },
        {
          name: '青柠',
          author:'徐秉龙、桃十五',
          singer:'乃琳Eileen,向晚Ava,嘉然Diana',
          url:require('../assets/music/2021.10.30 青柠 3.0.mp3'),
          time:'03:17'
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

</style>