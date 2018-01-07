/*
 * hash地址 获取特点参数方法    使用方法  var tel = getQueryString('act_id');
 * 
 * */
export const getQueryString = function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
		var url = window.location.href;
				
				var str=location.hash;
				var i=str.indexOf("?");
				var r = str.substr((i+1),str.length).match(reg);
				if (r!=null){
	    	console.log(unescape(r[2]))
	        return unescape(r[2]);
	    }else{
	        return null
	    };
	
	}
/*
 * 
 * 时间转换函数，传入时间戳，
 *
 */
export const formatDate = function(needTime){
			needTime = Number(needTime);
	       var time = new Date(needTime);  
	       var y = time.getFullYear();  
	       var m = time.getMonth()+1;  
	       var d = time.getDate();  
	       var h = time.getHours();  
	      var mm = time.getMinutes();  
	      var s = time.getSeconds();  
		return add0(y)+'/'+add0(m)+'/'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);  
}
/*
 * 
 * 实现深复制
 *
 */

export const cloneObj = function(obj){   //数据深复制
		    var str, newobj = obj.constructor === Array ? [] : {};
		    if(typeof obj !== 'object'){
		        return;
		    } else if(window.JSON){
		        str = JSON.stringify(obj), //系列化对象
		        newobj = JSON.parse(str); //还原
		    } else {
		        for(var i in obj){
		            newobj[i] = typeof obj[i] === 'object' ? 
		            cloneObj(obj[i]) : obj[i]; 
		        }
		    }
		    return newobj;
	},
				  