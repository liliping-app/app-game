<template>
  <div class="hello">
    <h1>{{ drag }}</h1>
    <el-upload class="upload-drag" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <br/>
    <hr>
    <br/>
    <h1>{{ auto }}</h1>
    <el-upload class="upload-auto" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left:10px" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <br/>
    <hr>
    <br/>
    <h1>{{ listedFiles }}</h1>
    <el-upload class="upload-listedFiles" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件,且不超过500kb</div>
    </el-upload>
    <br/>
    <hr>
    <br/>
    <h1>{{ thumbnail }}</h1>
    <el-upload class="upload-thumbnail" action="https://jsonplaceholder.typicode.com/posts/" :on-previewimg="handlePreviewImg" :on-removeimg="handleRemoveImg" :file-list="fileList4" list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <br/>
    <hr>
    <br/>
    <h1>{{ phoneWall }}</h1>
    <el-upload class="upload-phoneWall" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-prviewwall="handlePictureCardPreview" :on-remove="handleRemoveWall">
        <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img :src="dialogImageUrl" width="100%" alt="">
        </el-dialog>
    </el-upload>
    <br/>
    <hr>
    <br/>
    <h1>{{headPortrait}}</h1>
    <el-upload action="https://jsonplaceholder.typicode.com/posts/" class="upload-headPortrait" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatrUpload">
    <img :src="imageUrl" v-if="imageUrl" class="avatar" alt="">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            drag: '拖拽上传',
            auto: '手动上传',
            listedFiles: '上传文件列表',
            thumbnail: '图片列表缩略图',
            phoneWall: '照片墙',
            headPortrait: '上传头像',
            fileList: [
                {
                    name:'food.jpeg',
                    url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    name:'food2.jpeg',
                    url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
            fileList3: [
                {
                    name: 'food.jpeg',
                    url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                    status: 'finished'
                },
                {
                    name: 'food2.jpeg',
                    url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                    status: 'finished'
                }
            ],
            fileList4: [
                {
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
            dialogImageUrl: '',
            dialogVisible: false,
            imageUrl: ''
        };
    },
    methods: {
        //auto(手动上传)
        submitUpload () {
            this.$refs.upload.submit();
        },
        handlePreview () {
            // console.log(file, fileList);
        },
        handleRemove () {
            // console.log(file);
        },
        // listFiles上传文件列表
        handleChange (file, fileList) {
            this.fileList3 = fileList.slice(-3);
            // slice(-3)是从末端选取3个偏移量
        },
        // 图片缩略图列表
        handlePreviewImg () {

        },
        handleRemoveImg () {

        },
        //照片墙
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemoveWall () {

        },
        // 上传头像
        handleAvatarSuccess (res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatrUpload (file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('上传头像只能是JPG格式');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过2M');
            }
            return isJPG && isLt2M;
        }
    }
};
</script>

<style scoped lang="less">
h1 {
    font-weight: normal;
    margin-bottom: 20px;
    margin-top: 20px;
    color: blue;
}
.upload-drag,.upload-auto,.upload-listedFiles,.upload-thumbnail,.upload-phoneWall {
    width: 600px;
    margin: 0 auto;
}
</style>
