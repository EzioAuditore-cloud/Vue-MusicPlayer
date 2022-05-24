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
      search:'',
      playing:'',
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
        {
          name: '鱼',
          author:'姚贝娜',
          singer:'嘉然',
          url:require('../assets/music/2021.10.22 鱼.mp3'),
          time:'04:45'
        },
        {
          name: '云烟成雨',
          author:'房东的猫',
          singer:'嘉然，乃琳',
          url:require('../assets/music/2021.10.28 云烟成雨 [小狼生日快乐2.0].mp3'),
          time:'03:52'
        },
        {
          name: '青柠',
          author:'徐秉龙、桃十五',
          singer:'嘉然Diana,向晚Ava,乃琳Eileen',
          url:require('../assets/music/2021.10.30 青柠 3.0.mp3'),
          time:'03:17'
        },
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      document.getElementById("play").src = row.url;
    },
    // AddEdit(index, tableData) {
    //   let data = tableData;
    //   this.$router.push({
    //       path: `/mymusic/$(data)`
    //     });
    // },
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