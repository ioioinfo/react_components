var brokenLine = (function() {
  var canvasWidth;
  var canvasHeight;
  var brokenDatas = ['一', '二', '三', '四', '五', '六', '七'];
  // Y轴数据个数
  var yNumber = 10;
  // 存放数据x坐标
  var Heng = [];
  // var 坐标轴边距
  var zhouMargin = 40;
  var yZhouBeyondTop = 10;
  var yZhouBeyondBottom = 20;
  var xZhouBeyondRight = 10;
  var xZhouBeyondLeft = 20;
  // 横坐标展示数据线
  var xLineLength = 5;
  // 数据距离坐标轴距离
  var wordLength = 10;
  // var x轴坐标
  var xZhouStar = [zhouMargin, zhouMargin];

  var xZhouEnd,yLength,yLength_effective,xLength,xLength_effective,yzhouMaxNum,yZhouBiLi;

  var ctx;

  return {
    init: function(options) {
      canvasWidth = options.canvasWidth;
      canvasHeight = options.rightTopHeight;

      xZhouEnd = [zhouMargin, canvasHeight - zhouMargin];
      // y轴长队
      yLength = canvasHeight - 2* zhouMargin;
      // y轴数据显示有效长度
      yLength_effective = yLength  - yZhouBeyondTop -yZhouBeyondBottom;

      // x轴长度
      xLength = canvasWidth - 2* zhouMargin + xZhouBeyondLeft;
      // x轴数据显示的有效长度
      xLength_effective = xLength - xZhouBeyondLeft - xZhouBeyondRight;

      // y轴数据最大值
      yzhouMaxNum = options.yzhouMaxNum;
      // y轴数据的比例
      yZhouBiLi = yLength_effective / yzhouMaxNum;

      var canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');

      canvas.width= canvasWidth;
      canvas.height = canvasHeight;
    },

    // 坐标轴
    drawBorder: function() {
      ctx.save();
      // ctx.strokeStyle='#fff';
      ctx.beginPath();
      ctx.moveTo(xZhouStar[0], xZhouStar[1]);
      ctx.lineTo(xZhouEnd[0], xZhouEnd[1]);
      ctx.moveTo(zhouMargin - xZhouBeyondLeft, yLength +zhouMargin -yZhouBeyondBottom);
      ctx.lineTo(canvasWidth - zhouMargin, yLength +zhouMargin -yZhouBeyondBottom);
      ctx.closePath();
      ctx.stroke();
    },

    // 纵坐标数据
    zongBroken: function(){
      ctx.save();
      var zongX = zhouMargin - xLineLength;
      var zongY = yLength +zhouMargin -yZhouBeyondBottom;
      var numY = 0;
      ctx.textAlign = 'end';
      // ctx.fillStyle = '#fff';
      for (var i = 0; i < yNumber +1; i++) {
        zongY = yLength +zhouMargin -yZhouBeyondBottom - i* yLength_effective/yNumber;
        numY = i* yNumber;
        // 横坐标展示数据线
        ctx.moveTo(zhouMargin - xLineLength, zongY)
        ctx.lineTo(zhouMargin, zongY)
        ctx.fillText(numY, zongX - wordLength, zongY);
        ctx.stroke();
        ctx.fill();
      }
      ctx.restore();

    },

    // 横坐标数据
    hengBroken:function(){
      ctx.save();

      var hengY = yLength + yZhouBeyondBottom + wordLength +zhouMargin -yZhouBeyondBottom;
      for (var i = 0; i < brokenDatas.length; i++) {
        var monthNum = brokenDatas[i];
        var textWidth = ctx.measureText(monthNum).width/2;

        var hengX = zhouMargin + (i +1 )* xLength_effective/brokenDatas.length;

        var lastHengX = hengX - textWidth;
        Heng.push(hengX)
        ctx.moveTo(hengX, canvasHeight - zhouMargin - yZhouBeyondBottom);
        ctx.lineTo(hengX, canvasHeight - zhouMargin - yZhouBeyondBottom + xLineLength);
        // ctx.fillStyle = '#fff';
        ctx.fillText(monthNum, lastHengX, hengY);
        ctx.stroke();
        ctx.fill();
      }
    },
    // 折线图点坐标
    dot:function(prointDatas, color){
      ctx.save();
      for (var i = 0; i < prointDatas.length; i++) {
        var dotX =  Heng[i];
        var prointData = prointDatas[i];
        var dotY = canvasHeight - zhouMargin - yZhouBeyondBottom - yZhouBiLi*prointDatas[i];
        var dotX1 =  Heng[i+1];
        var dotY1 = canvasHeight - zhouMargin - yZhouBeyondBottom - yZhouBiLi*prointDatas[i+1];
        ctx.beginPath();
        ctx.fillStyle = '#E2A226';
        ctx.strokeStyle=color;
        ctx.lineWidth = 4;
        ctx.moveTo(dotX, dotY);
        ctx.lineTo(dotX1, dotY1);
        ctx.fillText(prointData, dotX + 10, dotY + 10);
        ctx.stroke();
        ctx.fill();
      }
    },

    drowBroken_line:function(options){
      this.drawBorder();
      this.zongBroken();
      this.hengBroken();

      for (var i = 0; i < options.data.length; i++) {
        var d = options.data[i];
        this.dot(d.prointDatas, d.color);
      }
    }
  }
})();
