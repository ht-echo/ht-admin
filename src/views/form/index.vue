<template>
  <div class="form">
    <el-form
      style="width:450px"
      class="videoRuleForm"
      :label-width="formLabelWidth"
      :model="videoReForm"
      :rules="rules"
      ref="videoRuleForm"
    >
      <el-form-item label="预录时长(秒)" prop="preRecord">
        <el-select
          style="width: 100%;"
          v-model="videoReForm.preRecord"
          placeholder="请选择预录时长(秒)"
        >
          <el-option label="30秒" :value="30"></el-option>
          <el-option label="60秒" :value="60"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="延录时长(秒)" prop="delayRecord">
        <el-select
          style="width: 100%;"
          v-model="videoReForm.delayRecord"
          placeholder="请选择延录时长(秒)"
        >
          <el-option label="30秒" :value="30"></el-option>
          <el-option label="60秒" :value="60"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="过期时间(天)" prop="expirationTime">
        <el-select
          style="width: 100%;"
          v-model="videoReForm.expirationTime"
          placeholder="请选择过期时间(天)"
        >
          <el-option label="1天" :value="1"></el-option>
          <el-option label="2天" :value="2"></el-option>
          <el-option label="3天" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <div class="last-btns">
          <el-button class="leftBtn" type="danger" @click="delVideoPlan">
            删除
          </el-button>
          <el-button type="primary" @click="editVideoAffrim('videoRuleForm')">
            确 定
          </el-button>
        </div>
      </el-form-item>
    </el-form>
    <el-form
      style="width:500px"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      :label-width="formLabelWidth"
    >
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        preRecord: [
          {
            required: true,
            message: "请选择预录时长(秒)",
            trigger: "change"
          }
        ],
        delayRecord: [
          {
            required: true,
            message: "请选择延录时长(秒)",
            trigger: "change"
          }
        ],
        expirationTime: [
          {
            required: true,
            message: "请选择过期时间(天)",
            trigger: "change"
          }
        ],
        streamType: [
          {
            required: true,
            message: "请选择码流类型",
            trigger: "change"
          }
        ]
      },
      videoReForm: {
        preRecord: null,
        delayRecord: null,
        expirationTime: null,
        streamType: null,
        templateId: null
      },
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    delVideoPlan() {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        // let { code } = await delRecord(this.videoPlanId);
        // if (code == 0) {
        this.$message({
          type: "success",
          message: "删除成功!",
          duration: 2000,
          showClose: true
        });
        // }
      });
    },
    editVideoAffrim(formName) {
      let {
        preRecord,
        delayRecord,
        expirationTime,
        streamType
      } = this.videoReForm;
      let json = {
        id: this.videoPlanId,
        preRecord,
        delayRecord,
        expirationTime,
        streamType,
        templateId: 0,
        cameraDeviceId: this.deviceId
      };
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.videoDig = false;
          this.$message({
            duration: 2000,
            showClose: true,
            type: "success",
            message: "修改成功"
          });
          // let { code, data } = await postRecord(json, false);
          // if (code == 0) {
          //   console.log(data);
          //   console.log("修改录像计划成功");
          // }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  display: flex;
  justify-content: center;
  margin: 40px;
  padding: 50px;
  background: #f1f1f1;
  border: 1px solid #f7f7f7;
  border-radius: 5px;
  .videoRuleForm {
    .last-btns {
      display: flex;
      .leftBtn {
        margin-right: 20px;
      }
    }
  }
}
</style>
