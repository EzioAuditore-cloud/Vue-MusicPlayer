<template>
    <el-container>
      <el-header height="90px"><Head></Head></el-header>
      <el-container>
        <el-aside width="200px">
            <Nav></Nav>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container> 
</template>

<script>
import Nav from "../components/Nav.vue"
import Head from "../components/Head.vue"
import "./Home/index.vue"
export default {
    components: {
        Nav,
        Head
    }
}
</script>

<style>
    .el-header,
    .el-footer {
    opacity: 0.9;
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
    }

    body > .el-container {
    margin-bottom: 40px;
    }

    .el-aside {
        position: relative;
        top: 80px;
        opacity: 0.9;
        background-color: #fff;
        color: var(--el-text-color-primary);
        text-align: center;
        height: 100%;
    }

    .el-main {
        height: 100%;
    }

    .el-container:nth-child(5) .el-aside,

    .el-container:nth-child(6) .el-aside {
    line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
    line-height: 320px;
    }
</style>