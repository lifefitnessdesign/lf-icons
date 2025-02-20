figma.showUI(__html__);

figma.ui.onmessage = (message) => {
  if (message.type === 'insert-icon') {
	const imageUrl = message.icon;

	fetch(imageUrl)
	  .then(res => res.arrayBuffer())
	  .then(buffer => {
		const image = figma.createImage(new Uint8Array(buffer));
		const rect = figma.createRectangle();
		rect.resize(100, 100); // Adjust as needed
		rect.fills = [{ type: 'IMAGE', imageHash: image.hash, scaleMode: 'FIT' }];
		figma.currentPage.appendChild(rect);
	  })
	  .catch(err => console.error('Failed to load icon:', err));
  }
};
