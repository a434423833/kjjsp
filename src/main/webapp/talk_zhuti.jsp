<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<div class="row" style="height:50px"></div>
<div class="row" style="color:black;">
	<div class="row">
		<div class="col-md-3"></div>
		<div class="col-md-5"
			style="border:0px solid; background-image: url(img/talk_1.png);border-radius:5px 5px 5px 5px;">
			<div class="row">
				<div class="col-md-2">
					<span id="span1" style="font-size:25px">${listObj.usname}</span>
				</div>
				<div class="col-md-5" style="padding-top:15px">
					<span id="span2">${listObj.time}</span>
				</div>
			</div>
			<div class="row" style="height:20px"></div>
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-5" id="span3">${listObj.infor}</div>
				<div class="col-md-6"></div>
			</div>
			<div class="row" style="height:20px"></div>
			<div class="row">
				<div class="col-md-9"></div>
				<div class="col-md-1">
				    <c:if var="result" test="${fw_id==session_.usid?true:false}">
					<button type="button" class="btn btn-warning" ><a href="servlet?task=delect_talk&tid=${listObj.usid}&uid=${session_.usid}" style="color:black;text-decoration:none">删除</a></button>
					</c:if>
				</div>
				<div class="col-md-1">
					<button type="button" class="btn btn-success" onclick="chlick3()" >点赞</button>
				</div>
				<div class="col-md-1">
					<button type="button" class="btn btn-info"  onclick="click2(${listObj.usid})" >评论</button>
				</div>
			</div>
			<div class="row" style="margin-top:10px">
				<div class="col-md-1"></div>
				<div class="col-md-10">
					<input type="text" name="" class="form-control" 
						id="a${listObj.usid}" placeholder="评论" style="display:none" >
				</div>
				<div class="col-md-1"><button type="button" class="btn btn-primary" id="aa${listObj.usid}" style="display:none" onclick="click4(${listObj.usid})">发布</button></div>
			</div>
			<div class="row" style="margin-top:10px">
			    
			</div>
		</div>
	</div>
</div>




