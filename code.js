
figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = (message) => {
  if (message.type === 'drag-icon') {
    const svgContent = message.svg;
    const iconName = message.name; // Capture the icon name

    // Convert the SVG content to Figma nodes
    const svgNode = figma.createNodeFromSvg(svgContent);

    // Optional: Resize the SVG if necessary
    svgNode.resize(32, 32); // You can adjust the size as needed


          // Optionally, you can position or resize the SVG
    svgNode.x = figma.viewport.center.x;
    svgNode.y = figma.viewport.center.y;

    // Set the node's name to the icon's name
    svgNode.name = iconName;  // This will name the layer in Figma

    // Add the SVG node to the current page
    figma.currentPage.appendChild(svgNode);
  }
};