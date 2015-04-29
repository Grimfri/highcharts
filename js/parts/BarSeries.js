/**
 * Set the default options for bar
 */
defaultPlotOptions.bar = Highcharts.merge(defaultPlotOptions.column);
/**
 * The Bar series class
 */
var BarSeries = extendClass(ColumnSeries, {
	type: 'bar',
	inverted: true
});
Highcharts.seriesTypes.bar = BarSeries;

