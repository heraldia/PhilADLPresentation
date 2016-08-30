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
