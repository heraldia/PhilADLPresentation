C:\Users\Yunfei\Documents\Visual Studio 2015\Projects\WebApplication1\WebApplication1
http://localhost:54107/InOne/

http://zhidao.baidu.com/link?url=ofGQ62i_SZAxgsoyEk24Bb99AMn7eG-BwzMTH_b5XlqTE8nlBkxvbl0mt-0FWDV8XUXuCIEOq189tazhvcXlmL-XCLY9Oi-MUoiwwogy_xy
todo
http://www.cnblogs.com/landeanfen/p/4651412.html

d:\class\Semester5\research\light\python\LosRealProduct\dataProcessing\model\

http://localhost:54107/InOne/getActionListAjax
http://localhost:54107/InOne/
http://localhost:54107/InOne/AllInOne
http://localhost:54107/ActivityModels/
<img src="@Url.Content("~/ADLImage/sleep.png")"/>
<img src="@Url.Content("~/ADLImage/sit.png")"/>
d:\class\Semester5\research\ADLRecorder\code\server\dotNet\ADLRecorderApp\ContosoUniversityData\ContosoSite\Views\Home\About.cshtml

buffer{{{1
            @{
                if ((item.Action).IndexOf("Sit") > -1)
                {
                    <img src="@Url.Content("../ADLImage/sit.png")" height='50' width='50' />
                }
                if ((item.Action).IndexOf("Lying") > -1)
                {
                    <img src="@Url.Content("../ADLImage/lying.jpg")" height='50' width='50' />
                }
                if ((item.Action).IndexOf("night") > 0){
                    <img src="@Url.Content("../ADLImage/night.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Moving") > -1){
                    <img src="@Url.Content("../ADLImage/moving.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("day") > 0 ) {
                    <img src="@Url.Content("../ADLImage/day.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("cook") > 0) {
                    <img src="@Url.Content("../ADLImage/cook.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Same") > 0) {
                    <img src="@Url.Content("../ADLImage/p1.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Still") > -1) {
                    <img src="@Url.Content("../ADLImage/still.png")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("another") > -1) {
                    <img src="@Url.Content("../ADLImage/p2.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Watch") > 0) {
                    <img src="@Url.Content("../ADLImage/watch.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Sleep") > 0 && (item.Action).IndexOf("Watch") < 0 ) {
                    <img src="@Url.Content("../ADLImage/sleep.png")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("step") > 0) {
                    <img src="@Url.Content("../ADLImage/walk.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Stand") > 0) {
                    <img src="@Url.Content("../ADLImage/stand.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("shop") > 0) {
                    <img src="@Url.Content("../ADLImage/shop.png")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("drive") > 0) {
                    <img src="@Url.Content("../ADLImage/drive.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Meal") > 0 ) {
                    <img src="@Url.Content("../ADLImage/meal.jpg")" height='50' width='50' />;
                }
                if ((item.Action).IndexOf("Work") > 0) {
                    <img src="@Url.Content("../ADLImage/work.jpg")" height='50' width='50' />;
                }
                if ((item.WiFi).ToLower().IndexOf("walmart") > -1 || (item.WiFi).ToLower().IndexOf("eagle") > -1) {
                    <img src="@Url.Content("../ADLImage/shop.png")" height='50' width='50' />;
                }
            }

clock:

<script>
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var hour = 8;
    var minute = 11;
    var second = 12;
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
</script>
--
http://code.activestate.com/recipes/578686-analog-clock/

<script type="text/javascript" src="myscript.js"></script>

<style type="text/css">

</style>

c# 代替ashx
C#画一个时钟
http://m.blog.csdn.net/article/details?id=19052553

deploy
http://www.fengfly.com/plus/view-213228-1.html
https://www.kafan.cn/zt/07v5ozd53g.html

Publish web:
AdlPresent
user name: phil passwor: hanyi

Enable-Migrations -ContextTypeName WebApplication1.Models.ActivityDBContext
add-migration Initial
update-database
