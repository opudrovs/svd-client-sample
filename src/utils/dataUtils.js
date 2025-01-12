/**
 * Data utility functions
 */

export const mapScreenshotToImageDataObject = (
  { previewLarge, previewSmall, tileSmall, alt },
  imageFolder,
  imageFormat
) => ({
  src: `${imageFolder}/${previewLarge}.${imageFormat}`,
  srcPreview: `${imageFolder}/${previewSmall}.${imageFormat}`,
  alt: alt,
  thumb: `${imageFolder}/${tileSmall}.${imageFormat}`,
  subHtml: alt,
});
