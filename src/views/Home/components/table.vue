<template>
    <h2 class="ranking">
        全区游戏排名
    </h2>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="所在大区">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="用户 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="游戏总局数">
            <span>{{ props.row.totality }} 局</span>
          </el-form-item>
          <el-form-item label="用户等级">
            <span>{{ props.row.class }}</span>
          </el-form-item>
          <el-form-item label="招牌英雄">
            <span>{{ props.row.specialty }}</span>
          </el-form-item>
          <el-form-item label="好友描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      width="100"
      align="center"
      label="用户头像">
      <template #default="scope">
         <img :src="scope.row.haedImg" class="haedImg">
      </template>
    </el-table-column>
    <el-table-column
      label="用户 ID"
      align="center"
      prop="id">
    </el-table-column>
    <el-table-column
      label="段位"
      width="100"
      align="center"
      prop="dan">
    </el-table-column>
    <el-table-column
      label="所在大区"
      align="center"
      prop="address">
    </el-table-column>
    <el-table-column
      label="描述"
      align="center"
      width="200"
      prop="desc">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 'Austin 拥影而泣',
          dan: '铂金 IV',
          class: 'Lv 357',
          desc: '又菜又爱玩，全程拉垮之王',
          address: '电信-暗影岛',
          specialty: '托儿索',
          totality: '4754',
          haedImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1175571471,2229885055&fm=26&gp=0.jpg'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
.ranking {
    font-weight: unset;    
}
.haedImg{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
</style>