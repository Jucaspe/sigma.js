;(function(undefined) {
  'use strict';

  if (typeof sigma === 'undefined')
    throw 'sigma is not declared';

  // Initialize packages:
  sigma.utils.pkg('sigma.canvas.edgehovers.labels');

  /**
   * This label renderer will just display the label on the line of the edge when hovered (JCP)
   *
   * The label is rendered at half distance of the edge extremities, and is
   * always oriented from left to right on the top side of the line.
   *
   * @param  {object}                   edge         The edge object.
   * @param  {object}                   source node  The edge source node.
   * @param  {object}                   target node  The edge target node.
   * @param  {CanvasRenderingContext2D} context      The canvas context.
   * @param  {configurable}             settings     The settings function.
   */
  sigma.canvas.edgehovers.labels.def =
    function(edge, source, target, context, settings) {
      if (typeof edge.label !== 'string' || source == target)
        return;

      var th = settings('edgeLabelThreshold');
      settings('edgeLabelThreshold', 0);

      // Target Node:
      (
          sigma.canvas.edges.labels[target.type] ||
          sigma.canvas.edges.labels.def
      ) (
          edge, source, target, context, settings
      );

      settings('edgeLabelThreshold', th);


    }
}).call(this);
