const fs = require('fs');
const jimp = require('jimp');


var inPath = './frames/';
var outPath = './badApple/';


const start = 0;
const end = 7550;


const xlim = 60;
const ylim = 30;

var cur = 0;

for(var i=start;i<end;i++){
	/*jimp.read(inPath+'frame'+i+'.jpg',(err,image)=>{
		image.resize(xlim,ylim);
		for(var y=0;y<ylim;y++){
			for(var x=0;x<xlim;x++){
				var hex = image.getPixelColor(x,y);
				var r = jimp.intToRGBA(hex);
				if(hex>1227595263){
					out+='█';
				}
				else{
					out+=' ';
				}
				//out+=hex+' ';
			}
			fs.writeFileSync(outPath+'frame'+i+'.txt',out);
			out+='\n';
		}
		//console.log(out);
	});*/
	jimp.read(inPath+'frame'+i+'.jpg')
	.then(image=>{
		var v = cur++;
		var out = '';
		//console.log(v);

		image.resize(xlim,ylim);
		for(var y=0;y<ylim;y++){
			for(var x=0;x<xlim;x++){
				var hex = image.getPixelColor(x,y);
				//var r = jimp.intToRGBA(hex);
				if(hex>1227595263){
					out+='█';
				}
				else{
					out+=' ';
				}
				//out+=hex+' ';
			}
			out+='\n';
		}
		fs.writeFile(outPath+'frame'+v+'.txt',out,err =>{
			if(err)
				console.log(err);
		});
		//console.log(out);
	});
}


