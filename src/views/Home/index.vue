<template>
  <el-container>
    <el-main id="content">
      <el-carousel :interval="3000" type="card" height="550px" style="position:relative;left:90px; width:1100px">
        <el-carousel-item v-for="item in datalist" :key="item.name">
          <img :src=item.src style="height:100%;width:100%;" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="mv">
        <a href="https://www.bilibili.com/video/BV1vQ4y1Z7C2/?spm_id_from=333.788.videocard.0">
            <el-card id="super" :body-style="{ padding: '0px' }"> 
            </el-card>
        </a> 
        <a href="https://www.bilibili.com/video/BV1YK411V7N3?from=search&seid=4927201147192961383&spm_id_from=333.337.0.0">
            <el-card id="quiet" :body-style="{ padding: '0px' }">    
            </el-card>
        </a>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      f:1,
      datalist: [
        {
          name:"Diana",
            src: require("@/assets/diana.jpg"),
        },
        {
          name:"Ava",
            src: require("@/assets/ava.jpg"),
        },
        {
          name:"Carol",
            src: require("@/assets/carol.jpg"),
        },
        {
          name:"Eileen",
            src: require("@/assets/eileen.jpg"),
        },
        {
          name:"Bella",
            src: require("@/assets/bella.jpg"),
        }
      ]
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

#content {
  display: block;
}

#super {
    background: url(../../assets/Cover.jpg);
    background-size: cover;
    margin: 10px;
    height: 250px;
    width: 400px;
}

#quiet {
    background: url(../../assets/Quiet.jpg);
    background-size: cover;
    margin: 10px;
    height: 250px;
    width: 400px;
}

.mv {
    height: 350px;
    width: 1000px;
    position: relative;
    left: 220px;
    display: flex; 
}

</style>