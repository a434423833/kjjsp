<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="OwO OwO-open">
    <div class="OwO-logo"><span><font style="vertical-align: inherit;"><font
            style="vertical-align: inherit;" onclick="biaoqingclick()">OωO表情</font></font>
         </span></div>
    <span id="tixing_liuyan" style="color: red;font-size: 5px;margin-left: 20px"></span>
    <div class="OwO-body" style="width: 100%;display: none" id="biaoqing">
        <ul class="OwO-items OwO-items-image OwO-items-show" style="max-height: 197px;">
            <li class="OwO-item" title="$[:微笑:]" data="$[:微笑:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/微笑.gif"></li>
            <li class="OwO-item" title="$[:撇嘴:]" data="$[:撇嘴:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/撇嘴.gif"></li>
            <li class="OwO-item" title="$[:色:]" data="$[:色:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/色.gif"></li>
            <li class="OwO-item" title="$[:发呆:]" data="$[:发呆:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/发呆.gif"></li>
            <li class="OwO-item" title="$[:得意:]" data="$[:得意:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/得意.gif"></li>
            <li class="OwO-item" title="$[:流泪:]" data="$[:流泪:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/流泪.gif"></li>
            <li class="OwO-item" title="$[:害羞:]" data="$[:害羞:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/害羞.gif"></li>
            <li class="OwO-item" title="$[:闭嘴:]" data="$[:闭嘴:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/闭嘴.gif"></li>
            <li class="OwO-item" title="$[:睡:]" data="$[:睡:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/睡.gif"></li>
            <li class="OwO-item" title="$[:大哭:]" data="$[:大哭:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/大哭.gif"></li>
            <li class="OwO-item" title="$[:尴尬:]" data="$[:尴尬:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/尴尬.gif"></li>
            <li class="OwO-item" title="$[:发怒:]" data="$[:发怒:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/发怒.gif"></li>
            <li class="OwO-item" title="$[:调皮:]" data="$[:调皮:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/调皮.gif"></li>
            <li class="OwO-item" title="$[:惊讶:]" data="$[:惊讶:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/惊讶.gif"></li>
            <li class="OwO-item" title="$[:难过:]" data="$[:难过:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/难过.gif"></li>
            <li class="OwO-item" title="$[:酷:]" data="$[:酷:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/酷.gif"></li>
            <li class="OwO-item" title="$[:冷汗:]" data="$[:冷汗:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/冷汗.gif"></li>
            <li class="OwO-item" title="$[:抓狂:]" data="$[:抓狂:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/抓狂.gif"></li>
            <li class="OwO-item" title="$[:吐:]" data="$[:吐:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/吐.gif"></li>
            <li class="OwO-item" title="$[:偷笑:]" data="$[:偷笑:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/偷笑.gif"></li>
            <li class="OwO-item" title="$[:可爱:]" data="$[:可爱:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/可爱.gif"></li>
            <li class="OwO-item" title="$[:白眼:]" data="$[:白眼:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/白眼.gif"></li>
            <li class="OwO-item" title="$[:傲慢:]" data="$[:傲慢:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/傲慢.gif"></li>
            <li class="OwO-item" title="$[:饥饿:]" data="$[:饥饿:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/饥饿.gif"></li>
            <li class="OwO-item" title="$[:困:]" data="$[:困:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/困.gif"></li>
            <li class="OwO-item" title="$[:惊恐:]" data="$[:惊恐:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/惊恐.gif"></li>
            <li class="OwO-item" title="$[:流汗:]" data="$[:流汗:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/流汗.gif"></li>
            <li class="OwO-item" title="$[:憨笑:]" data="$[:憨笑:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/憨笑.gif"></li>
            <li class="OwO-item" title="$[:大兵:]" data="$[:大兵:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/大兵.gif"></li>
            <li class="OwO-item" title="$[:奋斗:]" data="$[:奋斗:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/奋斗.gif"></li>
            <li class="OwO-item" title="$[:咒骂:]" data="$[:咒骂:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/咒骂.gif"></li>
            <li class="OwO-item" title="$[:疑问:]" data="$[:疑问:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/疑问.gif"></li>
            <li class="OwO-item" title="$[:嘘:]" data="$[:嘘:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/嘘.gif"></li>
            <li class="OwO-item" title="$[:晕:]" data="$[:晕:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/晕.gif"></li>
            <li class="OwO-item" title="$[:折磨:]" data="$[:折磨:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/折磨.gif"></li>
            <li class="OwO-item" title="$[:衰:]" data="$[:衰:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/衰.gif"></li>
            <li class="OwO-item" title="$[:骷髅:]" data="$[:骷髅:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/骷髅.gif"></li>
            <li class="OwO-item" title="$[:敲打:]" data="$[:敲打:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/敲打.gif"></li>
            <li class="OwO-item" title="$[:再见:]" data="$[:再见:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/再见.gif"></li>
            <li class="OwO-item" title="$[:擦汗:]" data="$[:擦汗:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/擦汗.gif"></li>
            <li class="OwO-item" title="$[:抠鼻:]" data="$[:抠鼻:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/抠鼻.gif"></li>
            <li class="OwO-item" title="$[:鼓掌:]" data="$[:鼓掌:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/鼓掌.gif"></li>
            <li class="OwO-item" title="$[:嗅大了:]" data="$[:嗅大了:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/嗅大了.gif"></li>
            <li class="OwO-item" title="$[:坏笑:]" data="$[:坏笑:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/坏笑.gif"></li>
            <li class="OwO-item" title="$[:左哼哼:]" data="$[:左哼哼:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/左哼哼.gif"></li>
            <li class="OwO-item" title="$[:右哼哼:]" data="$[:右哼哼:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/右哼哼.gif"></li>
            <li class="OwO-item" title="$[:哈欠:]" data="$[:哈欠:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/哈欠.gif"></li>
            <li class="OwO-item" title="$[:鄙视:]" data="$[:鄙视:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/鄙视.gif"></li>
            <li class="OwO-item" title="$[:委屈:]" data="$[:委屈:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/委屈.gif"></li>
            <li class="OwO-item" title="$[:可怜:]" data="$[:可怜:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/可怜.gif"></li>
            <li class="OwO-item" title="$[:阴险:]" data="$[:阴险:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/阴险.gif"></li>
            <li class="OwO-item" title="$[:亲亲:]" data="$[:亲亲:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/亲亲.gif"></li>
            <li class="OwO-item" title="$[:吓:]" data="$[:吓:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/吓.gif"></li>
            <li class="OwO-item" title="$[:快哭了:]" data="$[:快哭了:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/快哭了.gif"></li>
            <li class="OwO-item" title="$[:眨眼睛:]" data="$[:眨眼睛:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/眨眼睛.gif"></li>
            <li class="OwO-item" title="$[:泪奔:]" data="$[:泪奔:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/泪奔.gif"></li>
            <li class="OwO-item" title="$[:无奈:]" data="$[:无奈:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/无奈.gif"></li>
            <li class="OwO-item" title="$[:卖萌:]" data="$[:卖萌:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/卖萌.gif"></li>
            <li class="OwO-item" title="$[:小纠结:]" data="$[:小纠结:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/小纠结.gif"></li>
            <li class="OwO-item" title="$[:喷血:]" data="$[:喷血:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/喷血.gif"></li>
            <li class="OwO-item" title="$[:斜眼笑:]" data="$[:斜眼笑:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/斜眼笑.gif"></li>
            <li class="OwO-item" title="$[:doge:]" data="$[:doge:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/doge.gif"></li>
            <li class="OwO-item" title="$[:惊喜:]" data="$[:惊喜:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/惊喜.gif"></li>
            <li class="OwO-item" title="$[:骚扰:]" data="$[:骚扰:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/骚扰.gif"></li>
            <li class="OwO-item" title="$[:笑哭:]" data="$[:笑哭:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/笑哭.gif"></li>
            <li class="OwO-item" title="$[:我最美:]" data="$[:我最美:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/我最美.gif"></li>
            <li class="OwO-item" title="$[:托腮:]" data="$[:托腮:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/托腮.gif"></li>
            <li class="OwO-item" title="$[:菜刀:]" data="$[:菜刀:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/菜刀.gif"></li>
            <li class="OwO-item" title="$[:西瓜:]" data="$[:西瓜:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/西瓜.gif"></li>
            <li class="OwO-item" title="$[:啤酒:]" data="$[:啤酒:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/啤酒.gif"></li>
            <li class="OwO-item" title="$[:篮球:]" data="$[:篮球:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/篮球.gif"></li>
            <li class="OwO-item" title="$[:乒乓:]" data="$[:乒乓:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/乒乓.gif"></li>
            <li class="OwO-item" title="$[:咖啡:]" data="$[:咖啡:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/咖啡.gif"></li>
            <li class="OwO-item" title="$[:饭:]" data="$[:饭:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/饭.gif"></li>
            <li class="OwO-item" title="$[:猪头:]" data="$[:猪头:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/猪头.gif"></li>
            <li class="OwO-item" title="$[:玫瑰:]" data="$[:玫瑰:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/玫瑰.gif"></li>
            <li class="OwO-item" title="$[:凋谢:]" data="$[:凋谢:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/凋谢.gif"></li>
            <li class="OwO-item" title="$[:心:]" data="$[:心:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/心.gif"></li>
            <li class="OwO-item" title="$[:心碎:]" data="$[:心碎:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/心碎.gif"></li>
            <li class="OwO-item" title="$[:蛋糕:]" data="$[:蛋糕:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/蛋糕.gif"></li>
            <li class="OwO-item" title="$[:闪电:]" data="$[:闪电:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/闪电.gif"></li>
            <li class="OwO-item" title="$[:炸弹:]" data="$[:炸弹:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/炸弹.gif"></li>
            <li class="OwO-item" title="$[:刀:]" data="$[:刀:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/刀.gif"></li>
            <li class="OwO-item" title="$[:足球:]" data="$[:足球:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/足球.gif"></li>
            <li class="OwO-item" title="$[:瓢虫:]" data="$[:瓢虫:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/瓢虫.gif"></li>
            <li class="OwO-item" title="$[:便便:]" data="$[:便便:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/便便.gif"></li>
            <li class="OwO-item" title="$[:夜晚:]" data="$[:夜晚:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/夜晚.gif"></li>
            <li class="OwO-item" title="$[:太阳:]" data="$[:太阳:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/太阳.gif"></li>
            <li class="OwO-item" title="$[:礼物:]" data="$[:礼物:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/礼物.gif"></li>
            <li class="OwO-item" title="$[:拥抱:]" data="$[:拥抱:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/拥抱.gif"></li>
            <li class="OwO-item" title="$[:强:]" data="$[:强:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/强.gif"></li>
            <li class="OwO-item" title="$[:弱:]" data="$[:弱:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/弱.gif"></li>
            <li class="OwO-item" title="$[:握手:]" data="$[:握手:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/握手.gif"></li>
            <li class="OwO-item" title="$[:胜利:]" data="$[:胜利:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/胜利.gif"></li>
            <li class="OwO-item" title="$[:抱拳:]" data="$[:抱拳:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/抱拳.gif"></li>
            <li class="OwO-item" title="$[:勾引:]" data="$[:勾引:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/勾引.gif"></li>
            <li class="OwO-item" title="$[:拳头:]" data="$[:拳头:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/拳头.gif"></li>
            <li class="OwO-item" title="$[:差劲:]" data="$[:差劲:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/差劲.gif"></li>
            <li class="OwO-item" title="$[:爱你:]" data="$[:爱你:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/爱你.gif"></li>
            <li class="OwO-item" title="$[:NO:]" data="$[:NO:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/NO.gif"></li>
            <li class="OwO-item" title="$[:OK:]" data="$[:OK:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/OK.gif"></li>
            <li class="OwO-item" title="$[:爱情:]" data="$[:爱情:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/爱情.gif"></li>
            <li class="OwO-item" title="$[:飞吻:]" data="$[:飞吻:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/飞吻.gif"></li>
            <li class="OwO-item" title="$[:发财:]" data="$[:发财:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/发财.gif"></li>
            <li class="OwO-item" title="$[:帅:]" data="$[:帅:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/帅.gif"></li>
            <li class="OwO-item" title="$[:雨伞:]" data="$[:雨伞:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/雨伞.gif"></li>
            <li class="OwO-item" title="$[:高铁左车头:]" data="$[:高铁左车头:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/高铁左车头.gif"></li>
            <li class="OwO-item" title="$[:车厢:]" data="$[:车厢:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/车厢.gif"></li>
            <li class="OwO-item" title="$[:高铁右车头:]" data="$[:高铁右车头:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/高铁右车头.gif"></li>
            <li class="OwO-item" title="$[:纸巾:]" data="$[:纸巾:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/纸巾.gif"></li>
            <li class="OwO-item" title="$[:右太极:]" data="$[:右太极:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/右太极.gif"></li>
            <li class="OwO-item" title="$[:左太极:]" data="$[:左太极:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/左太极.gif"></li>
            <li class="OwO-item" title="$[:献吻:]" data="$[:献吻:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/献吻.gif"></li>
            <li class="OwO-item" title="$[:街舞:]" data="$[:街舞:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/街舞.gif"></li>
            <li class="OwO-item" title="$[:激动:]" data="$[:激动:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/激动.gif"></li>
            <li class="OwO-item" title="$[:挥动:]" data="$[:挥动:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/挥动.gif"></li>
            <li class="OwO-item" title="$[:跳绳:]" data="$[:跳绳:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/跳绳.gif"></li>
            <li class="OwO-item" title="$[:回头:]" data="$[:回头:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/回头.gif"></li>
            <li class="OwO-item" title="$[:磕头:]" data="$[:磕头:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/磕头.gif"></li>
            <li class="OwO-item" title="$[:转圈:]" data="$[:转圈:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/转圈.gif"></li>
            <li class="OwO-item" title="$[:怄火:]" data="$[:怄火:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/怄火.gif"></li>
            <li class="OwO-item" title="$[:发抖:]" data="$[:发抖:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/发抖.gif"></li>
            <li class="OwO-item" title="$[:跳跳:]" data="$[:跳跳:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/跳跳.gif"></li>
            <li class="OwO-item" title="$[:爆筋:]" data="$[:爆筋:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/爆筋.gif"></li>
            <li class="OwO-item" title="$[:沙发:]" data="$[:沙发:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/沙发.gif"></li>
            <li class="OwO-item" title="$[:钞票:]" data="$[:钞票:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/钞票.gif"></li>
            <li class="OwO-item" title="$[:蜡烛:]" data="$[:蜡烛:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/蜡烛.gif"></li>
            <li class="OwO-item" title="$[:手枪:]" data="$[:手枪:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/手枪.gif"></li>
            <li class="OwO-item" title="$[:灯:]" data="$[:灯:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/灯.gif"></li>
            <li class="OwO-item" title="$[:香蕉:]" data="$[:香蕉:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/香蕉.gif"></li>
            <li class="OwO-item" title="$[:吻:]" data="$[:吻:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/吻.gif"></li>
            <li class="OwO-item" title="$[:下雨:]" data="$[:下雨:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/下雨.gif"></li>
            <li class="OwO-item" title="$[:闹钟:]" data="$[:闹钟:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/闹钟.gif"></li>
            <li class="OwO-item" title="$[:囍:]" data="$[:囍:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/囍.gif"></li>
            <li class="OwO-item" title="$[:棒棒糖:]" data="$[:棒棒糖:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/棒棒糖.gif"></li>
            <li class="OwO-item" title="$[:面条:]" data="$[:面条:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/面条.gif"></li>
            <li class="OwO-item" title="$[:车:]" data="$[:车:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/车.gif"></li>
            <li class="OwO-item" title="$[:邮件:]" data="$[:邮件:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/邮件.gif"></li>
            <li class="OwO-item" title="$[:风车:]" data="$[:风车:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/风车.gif"></li>
            <li class="OwO-item" title="$[:药丸:]" data="$[:药丸:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/药丸.gif"></li>
            <li class="OwO-item" title="$[:奶瓶:]" data="$[:奶瓶:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/奶瓶.gif"></li>
            <li class="OwO-item" title="$[:灯笼:]" data="$[:灯笼:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/灯笼.gif"></li>
            <li class="OwO-item" title="$[:青蛙:]" data="$[:青蛙:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/青蛙.gif"></li>
            <li class="OwO-item" title="$[:戒指:]" data="$[:戒指:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/戒指.gif"></li>
            <li class="OwO-item" title="$[:K歌:]" data="$[:K歌:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/K歌.gif"></li>
            <li class="OwO-item" title="$[:熊猫:]" data="$[:熊猫:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/熊猫.gif"></li>
            <li class="OwO-item" title="$[:喝彩:]" data="$[:喝彩:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/喝彩.gif"></li>
            <li class="OwO-item" title="$[:购物:]" data="$[:购物:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/购物.gif"></li>
            <li class="OwO-item" title="$[:多云:]" data="$[:多云:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/多云.gif"></li>
            <li class="OwO-item" title="$[:鞭炮:]" data="$[:鞭炮:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/鞭炮.gif"></li>
            <li class="OwO-item" title="$[:飞机:]" data="$[:飞机:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/飞机.gif"></li>
            <li class="OwO-item" title="$[:气球:]" data="$[:气球:]"><img
                    src="https://www.dreamwings.cn/wp-content/themes/kotha/images/brow/qq/气球.gif"></li>
        </ul>
        <div class="OwO-bar">
            <ul class="OwO-packages">
                <li class="OwO-package-active"><span><font style="vertical-align: inherit;"><font
                        style="vertical-align: inherit;">QQ2017</font></font></span></li>
            </ul>
        </div>
    </div>
</div>