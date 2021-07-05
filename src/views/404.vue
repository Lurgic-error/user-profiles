    <template>
        <div class="view">
            <el-result title="404" subTitle="Sorry, request error">
                <template #icon>
                    <el-image
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                    </el-image>
                </template>
                <template #extra>
                    <el-button type="primary" size="medium">Back</el-button>
                </template>
            </el-result>
        </div>
    </template>

    <script>
        export default {
            name: "404"
        }
    </script>

    <style lang="scss" scoped>
        .d-flex {
            display: flex;
            align-items: center;
        }
    </style>