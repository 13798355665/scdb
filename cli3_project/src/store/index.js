import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        token:null,
        /*菜单栏数据*/
        menuItems:[{
            id:1,           //唯一索引
            name:'信息管理',    //要跳转的路由名称
            path:'',         //路径名称
            type:'el-icon-info',//图标类型
            children:[
                {
                    id:11,
                    name:'学生信息',
                    path:'/studentInfo',
                    type:'el-icon-user',
                    canSee:false
                },
                {
                    id:12,
                    name:'教师信息',
                    path:'/teacherInfo',
                    type:'el-icon-user-solid',
                    canSee:true
                },
                {
                    id:13,
                    name:'院系信息',
                    path:'departmentInfo',
                    type:'el-icon-school',
                    canSee:true
                },
                {
                    id:14,
                    name:'课程信息',
                    path:'courseInfo',
                    type:'el-icon-notebook-2',
                    canSee:true
                },
                {
                    id:15,
                    name:'所有选课信息',
                    path:'sctInfo',
                    type:'el-icon-notebook-1',
                    canSee:false
                },
                {
                    id:16,
                    name:'我的选课信息',
                    path:'MySctInfo',
                    type:'el-icon-notebook-1',
                    canSee:true
                }
            ]
        },{
            id:2,
            name:'数据报表',
            path:'',
            type:'el-icon-s-operation',
            children:[
                {
                    id:21,
                    name:'学生报表',
                    path:'studentStatistic',
                    type:'el-icon-s-management',
                    canSee:true
                },
                {
                    id:22,
                    name:'教师报表',
                    path:'teacherStatistic',
                    type:'el-icon-upload',
                    canSee:true
                },{
                    id:23,
                    name:'院系报表',
                    path:'departmentStatistic',
                    type:'el-icon-document-copy',
                    canSee:true
                },{
                    id:24,
                    name:'课程报表',
                    path:'courseStatistic',
                    type:'el-icon-document',
                    canSee:true
                },{
                    id:25,
                    name:'选课报表',
                    path:'sctStatistic',
                    type:'el-icon-tickets',
                    canSee:false
                }
            ]
        },{
            id:3,
            name:'使用帮助',
            path:'',
            type:'el-icon-help',
            children:[
                {
                    id:31,
                    name:'帮助手册',
                    path:'help',
                    type:'el-icon-s-help',
                    canSee:true
                }
            ]
        }]
    }
})

export default store