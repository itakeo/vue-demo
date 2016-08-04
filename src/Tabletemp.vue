<style>
    table{width: 350px; text-align: center;margin-top: 10px;}
    table td,table th{border:1px solid #ccc;padding:6px 10px;}
    table tr:hover{background: #f0f0f0}
    table thead{background: #ccc}
    button{cursor: pointer;}
</style>

<template>
    <table>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Btn</th>
        </thead>
        <tr v-for="item in data | filterBy  key">
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.sex}}</td>
            <td><button @click="delFn($index)">删除</button></td>
        </tr>
    </table>
</template>

<script>
export default {
    props : ['data','key'],
    methods : {
        delFn(n){
            this.data.splice(n,1)
        }
    }
}
</script>


