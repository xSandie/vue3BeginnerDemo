<template>

<el-dialog
    :model-value="dialogVisible"
    :title="dialogTitle"
    width="40%"
    destroy-on-close
    @close="handleClose"
  >
  <el-form :model="form" label-width="100px" label-position="top">
    <el-form-item :label="$t('table.username')">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item :label="$t('table.mobile')">
      <el-input v-model="form.mobile" />
    </el-form-item>
    <el-form-item :label="$t('table.email')">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
  </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{$t('table.cancel')}}</el-button>
        <el-button type="primary" @click="handleConfirm">{{$t('table.confirm')}}</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script setup>
import {ref, reactive, watch} from 'vue'

const props = defineProps({
    dialogVisible:{
        type:Boolean,
        default:false,
        required:true
    },
    dialogTitle: {
        type:String,
        default:'',
        required:true
    },
    dialogTableValue: {
        type:Object,
        default:()=> {}
    }
})
const emits = defineEmits(['update:dialogVisible','fatherRefresh'])
const handleClose = () => {
    emits('update:dialogVisible',false) // 把modelValue对应的dialogVisible更新为false
}

const handleConfirm = () => {
    handleClose()
    emits('fatherRefresh','')
}

const formRef = ref(null)
const form = ref({
    username:'',
    password:'',
    email:'',
    mobile:''
})

watch(() => props.dialogTableValue,()=>{
    form.value = props.dialogTableValue
},{deep:true, immediate:true})




</script>

<style scoped>

</style>