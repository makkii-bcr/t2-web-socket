function loadFiles(dir){
   if (WebSite.isNW) return;
	dir.rel('res.json').obj({"images":[{"name":"$pat_base","url":"images/base.png","pwidth":32,"pheight":32,"type":"wh"},{"name":"$pat_neko","url":"images/neko.png","pwidth":32,"pheight":32},{"name":"$pat_mapchip","url":"images/mapchip.png","pwidth":32,"pheight":32}],"sounds":[]});
	dir.rel('options.json').obj({"compiler":{"namespace":"user","defaultSuperClass":"kernel.Actor","dependingProjects":[{"namespace":"kernel","url":"js/kernel.js"}]},"run":{"mainClass":"user.Main","bootClass":"kernel.Boot","globals":{"$defaultFPS":60,"$imageSmoothingDisabled":true,"$soundLoadAndDecode":false}},"plugins":{"jquery_ui":1},"kernelEditable":false,"language":"tonyu","version":1636275182233});
}