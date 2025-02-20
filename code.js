figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = (message) => {
  if (message.type === 'drag-icon') {
    const svg = message.svg;

    // Create an SVG node in Figma
    const svgNode = figma.createNodeFromSvg(svg);

    // Optionally, you can position or resize the SVG
    svgNode.x = figma.viewport.center.x;
    svgNode.y = figma.viewport.center.y;

    figma.currentPage.appendChild(svgNode);
  }
};