<template>
<div class="head">
    <span style="font:italic bold 20px arial,sans-serif;position:relative; left:200px">A-Soul Music</span>    
    <div class="search">
        <el-input style="width: 350px" v-model="search"/>
        <el-button class="search-button" size="mini" >Search</el-button
        >
    </div>  
</div>  
</template>

<script>
    export default {
        data() {
            return {
                search:'',
            }
        }
    }
</script>

<style>
    .head {
        align-items: center;
        display: flex;
    }
    .search {
        display: flex;
        position: relative;
        top: 20px;
        left: 40%;
    }
    .search-button {
        position: relative;
        top: 1px;
        width: 70px;
        height: 40px;
    }
</style>