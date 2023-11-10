
const Jimp = require('jimp');

const imagePath = './source.jpg';
const watermarkPath = './watermark.png';

// 读取原始图片和水印图片
Jimp.read(imagePath)
  .then(image => {
    return Jimp.read(watermarkPath)
      .then(watermark => {
        // 调整水印的尺寸适应原始图片
        watermark.scaleToFit(image.getWidth() / 4, image.getHeight() / 4);

        // 将水印居中放置在原始图片上
        const posX = (image.getWidth() - watermark.getWidth()) / 2;
        const posY = (image.getHeight() - watermark.getHeight()) / 2;

        // 将水印图片合并到原始图片上
        image.composite(watermark, posX, posY, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacitySource: 0.5
        });

        // 保存添加水印后的图片
        const outputImagePath = 'path/to/output.jpg';
        image.write(outputImagePath);

        console.log('水印添加成功，保存为', outputImagePath);
      });
  })
  .catch(error => {
    console.error('发生错误:', error);
  });