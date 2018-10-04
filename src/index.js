module.exports = function getZerosCount(number, base) {
  // your implementation
  
  var mnoz=[]; var i=2, j=0;
  
  while(base!=1){
  if(base%i==0) { 
      mnoz[j]=i; base= base/i; j++
  }
  else if(base%i!=0) i++;
  }
  
  var iskl=[]; var arrp=[];
  var j=0,l=0;
  var er=0;
  var povt=0;
  
  for (var i=0;i<mnoz.length;i++){ 
    for(var y=0;y<iskl.length;y++){
      if(iskl[y]==mnoz[i]) er++;
      }
      if(!er) {
      iskl[j]=mnoz[i];
      j++;
      }
      if (er>0) er=0;
    }
  
    for(var y=0;y<iskl.length;y++){
      for (var i=0;i<mnoz.length;i++){
        if(iskl[y]==mnoz[i]) povt++;
      } arrp[l]=povt; l++; povt=0;
    }

  var degree = [];
  for(var ii=0; ii<iskl.length; ii++){
    degree[ii]=0;
  }

  
  for(var ii=0; ii<iskl.length; ii++){
    for(var li = iskl[ii]; number / li >=1; li *= iskl[ii]){
      degree[ii] += Math.floor(number / li)
    }
  }

  mnoz=[];
  for(var ii=0; ii<iskl.length; ii++){
    mnoz[ii]=Math.trunc(degree[ii]/arrp[ii])
  }

  var min=mnoz[0];
  for(var ii=0; ii<mnoz.length; ii++){
    if(mnoz[ii]<min) min=mnoz[ii];
  }
  return (min);
  }