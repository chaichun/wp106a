var add = function (a,b)
{
    return a + b
}
var sub = function(a,b)
  {
    return a - b
  } 
var apply = function (f, x, y)
    {
        var r =[]
        for (var i=0 ; i<x.length; i++)
            {
                var z =f(x[i] , y[i])
                r.push(z)
            }
            return r
    }
    console.log('add(3,2)=',add(3,2))
    console.log('sub(3,2)=',sub(3,2))
   var x =[1,2,3], y =[1,1,1]
   console.log('apply(add,x,y)=',apply(add,x,y))
   console.log('apply(sub,x,y)=',apply(sub,x,y)) 