<style>
    body {font-family: Helvetica, sans-serif;font-size: 13px; font-weight: normal;
  
    }
    input{padding:2px 10px;}
</style>
<template>
    <div id="app">
        <button @click="onclick">随机添加</button>
        <input type="text" placeholder="检索" v-model="searchKey">
    </div>
    <tabletemp :data="list" :key="searchKey"></tabletemp>   
</template>

<script>
import tabletemp from './Tabletemp.vue';
//数据
var arr = [{
            name : 'jack',
            age : 30,
            sex : 'b'
    },{
        name : 'Tom',
        age : 15,
        sex : 'g'
    },{
        name : 'Bob',
        age : 18,
        sex : 'g'
    },{
        name : 'Bill',
        age : 10,
        sex : 'b'
    },{
        name : 'Lili',
        age : 30,
        sex : 'g'
    }];
export default {
    data () {
        return {
            searchKey : '',
            list : arr
        }
    },
    methods : {
        onclick : function(){
            this.list.push({
                name : 'zc',
                age : Math.round( Math.random()*10 + 20 ) ,
                sex : ['g','b'][Math.round( Math.random())]
            })
        }
    },
    components : {
        tabletemp
    }
}
</script>


