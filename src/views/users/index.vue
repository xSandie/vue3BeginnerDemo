<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input v-model="queryForm.query" :placeholder="$t('table.placeholder')" clearable></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initGetUsers">{{$t('table.search')}}</el-button>
      <el-button type="primary" @click="handleDialog">{{$t('table.adduser')}}</el-button>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column v-for="(option, index) in options" :prop="option.prop" :label="option.lable" width="180" :key="index">
        <template v-slot="{row}" v-if="option.prop === 'mg_state'">
          <el-switch v-model="row.mg_state"></el-switch>
        </template>
        <template v-slot="{row}" v-else-if="option.prop === 'create_time'">
          {{$filters.filterTimes(row.create_time)}}
        </template>
        <template #default="{row}" v-else-if="option.prop === 'action'">
            <el-button type="primary" size="small" :icon="Edit" @click="handleDialog(row)"></el-button>
            <el-button type="warning" size="small" :icon="Delete"></el-button>
        </template>
      </el-table-column>   
  </el-table>
  <el-pagination
      v-model:current-page="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      :page-sizes="[2, 5, 10, 15]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalRecords"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <Dialog 
  v-model:dialogVisible="dialogVisible"
  :dialogTitle="dialogTitle"
  :dialogTableValue="dialogTableValue"
  @fatherRefresh="initGetUsersFromChild"
  ></Dialog>
</template>

<script setup>
import {ref} from 'vue';
import {options} from './options';
import {  Search,Edit,Delete } from '@element-plus/icons-vue'
import {getUser} from '@/api/user.js';
import Dialog from './components/dialog.vue';
import { isNull } from 'lodash';
const tableData = ref([])
const totalRecords = ref(0)
const dialogVisible = ref(false)
const queryForm = ref({
  query:'',
  pagenum:1,
  pagesize:2
})
const dialogTitle = ref('添加用户')


const initGetUsers = async() => {
  const res = await getUser(queryForm.value)
  console.log(res.data[0]);
  tableData.value = res.data[0].users
  totalRecords.value = res.data[0].total
}
initGetUsers()



const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pageSize
  initGetUsers()
}
// 页码改变
const handleCurrentChange = (pageNumb) => {
  queryForm.value.pagenum = pageNumb
  initGetUsers()
}
const dialogTableValue = ref('')
const handleDialog = (data)=>{
  if(isNull(data)){
    dialogTitle.value = "添加用户"
  }else{
    dialogTitle.value = "编辑用户"
    dialogTableValue.value = data
  }
  console.log(data);
  dialogVisible.value = true
}

const initGetUsersFromChild = (a) => {
  console.log('initGetUsersFromChild');
  initGetUsers()
}
</script>

<style lang="scss" scoped>
.header{
  padding-bottom: 16px;
  box-sizing: border-box;
}
:deep(.el-pagination){
  padding-top: 16px;
  box-sizing: border-box;
  width: 100%;
  justify-content:flex-end;
}
</style>
