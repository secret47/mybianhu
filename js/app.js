window.onload = function(){
    //配置
    var config = {
        vx: 1,//点x轴速度,正为右，负为左
        vy:  1,//点y轴速度
        height: 3,//点高宽，其实为正方形，所以不宜太大
        width: 3,
        count: 50,//点个数
        color: "121, 162, 185",//点颜色
        stroke: "130,255,255",//线条颜色
        dist: 6000,//点吸附距离
        e_dist: 20000,//鼠标吸附加速距离
        max_conn: 10//点到点最大连接数
    }
    //调用
    CanvasParticle(config);
}