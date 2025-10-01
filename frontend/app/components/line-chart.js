/* global Chart */
import Ember from "ember";

export default Ember.Component.extend({
  series: [],
  tagName: 'canvas',
  xAxisLabel: 'momentTaken',

  didUpdateAttrs() {
    var nativeCanvasElement = this.$().get(0);
    var context = nativeCanvasElement.getContext("2d");
    new Chart(context).Scatter(this._buildData(), {
      useUtc: false,
      bezierCurve: true,
      showTooltips: true,
      scaleType: "date",
      scaleDateTimeFormat: "dd/mm/yyyy HH:MM",
      scaleShowHorizontalLines: true
    });
  },

  _buildData(){
    return this._labels().map((label, index) => {
      return this._buildLabelData(label, index);
    });
  },
  
  _buildLabelData(label, index) {
    var color = this._color(index);
    var values = this._valuesForLabel(label);
    return { label: label, data: values, strokeColor: color, pointColor: color };
  },

  _valuesForLabel(label) {
    return this.get('series').map((serie) => {
      return { x: new Date(serie[this.get('xAxisLabel')]), y: serie[label] };
    });
  },

  _labels(){
    if(this.get('series').length === 0) { return []; }
    var allLabels = Object.keys(this.get('series')[0]);
    allLabels.splice(allLabels.indexOf(this.get('xAxisLabel')), 1);
    return allLabels;
  },

  _color(index){
    var colors = ['#d70206', '#f05b4f', '#f4c63d', '#d17905', '#453d3f', '#59922b', '#0544d3',
      '#6b0392', '#f05b4f', '#dda458', '#eacf7d', '#86797d', '#b2c326', '#6188e2', '#a748ca'];
    return colors[index%colors.length];
  }
});
