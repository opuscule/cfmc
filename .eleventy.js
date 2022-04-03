const { DateTime } = require("luxon");

const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/i');
	eleventyConfig.addPassthroughCopy('./src/js');
	eleventyConfig.addPassthroughCopy('./src/css');
	eleventyConfig.addPassthroughCopy('./src/docs');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('./src/_redirects');
	eleventyConfig.addPlugin(lazyImagesPlugin);
	eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
	eleventyConfig.addFilter("postDate", (dateObj) => {
	  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
	return {
		dir: {
			input:"src",
			output:"public"
		},
		passthroughFileCopy: true
	};	
}