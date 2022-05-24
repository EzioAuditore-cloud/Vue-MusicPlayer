<template>
  <div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            router="true" 
        >
            <el-menu-item  index="/">
            <template #title>
                <el-icon><location /></el-icon>
                <span style="font-weight:bold;">推荐</span>
            </template>
            </el-menu-item>
            <el-menu-item index="/diana">
            <el-avatar :size="30" :fit="fill" :src="require('../assets/diana-icon.jpg')"></el-avatar>
            <span style="font-weight:bold; color: rgb(212,111,141);">嘉然Diana</span>
            </el-menu-item>
            <el-menu-item style="position:relative;right:7px;" index="/ava">
            <el-avatar :size="30" :fit="fill" :src="require('../assets/ava-icon.jpg')"></el-avatar>
            <span style="font-weight:bold; color: rgb(142,193,223);">向晚Ava</span>
            </el-menu-item>
            <el-menu-item style="position:relative;right:4px;" index="/carol">
            <el-avatar :size="30" :fit="fill" :src="require('../assets/carol-icon.jpg')"></el-avatar>
            <span style="font-weight:bold; color: rgb(184,158,231);">珈乐carol</span>
            </el-menu-item>
            <el-menu-item style="position:relative;right:0px;" index="/eileen">
            <el-avatar :size="30" :fit="fill" :src="require('../assets/eileen-icon.jpg')"></el-avatar>
            <span style="font-weight:bold; color: rgb(218,208,203);">乃琳Eileen</span>
            </el-menu-item>
            <el-menu-item style="position:relative;right:4px;" index="/bella">
            <el-avatar :size="30" :fit="fill" :src="require('../assets/bella-icon.jpg')"></el-avatar>
            <span style="font-weight:bold; color: rgb(226,109,99);">贝拉Bella</span>
            </el-menu-item>
            <el-menu-item index="/mymusic">
            <span style="font-weight:bold;">我的歌单</span>
            </el-menu-item>
            <el-menu-item index="/mymusic">
            <span style="font-weight:bold;">About us</span>
            </el-menu-item>
        </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .el-menu-vertical-demo {
        opacity: 1;
    }
</style>