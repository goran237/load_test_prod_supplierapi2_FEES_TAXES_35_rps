/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1195.0, "minX": 0.0, "maxY": 59053.0, "series": [{"data": [[0.0, 1195.0], [0.1, 1195.0], [0.2, 1195.0], [0.3, 1195.0], [0.4, 1195.0], [0.5, 1454.0], [0.6, 1454.0], [0.7, 1454.0], [0.8, 1454.0], [0.9, 1454.0], [1.0, 1607.0], [1.1, 1607.0], [1.2, 1607.0], [1.3, 1607.0], [1.4, 1607.0], [1.5, 1633.0], [1.6, 1633.0], [1.7, 1633.0], [1.8, 1633.0], [1.9, 1633.0], [2.0, 1794.0], [2.1, 1794.0], [2.2, 1794.0], [2.3, 1794.0], [2.4, 1834.0], [2.5, 1834.0], [2.6, 1834.0], [2.7, 1834.0], [2.8, 1834.0], [2.9, 1835.0], [3.0, 1835.0], [3.1, 1835.0], [3.2, 1835.0], [3.3, 1835.0], [3.4, 1847.0], [3.5, 1847.0], [3.6, 1847.0], [3.7, 1847.0], [3.8, 1847.0], [3.9, 2012.0], [4.0, 2012.0], [4.1, 2012.0], [4.2, 2012.0], [4.3, 2012.0], [4.4, 2146.0], [4.5, 2146.0], [4.6, 2146.0], [4.7, 2146.0], [4.8, 2205.0], [4.9, 2205.0], [5.0, 2205.0], [5.1, 2205.0], [5.2, 2205.0], [5.3, 2276.0], [5.4, 2276.0], [5.5, 2276.0], [5.6, 2276.0], [5.7, 2276.0], [5.8, 2402.0], [5.9, 2402.0], [6.0, 2402.0], [6.1, 2402.0], [6.2, 2402.0], [6.3, 2461.0], [6.4, 2461.0], [6.5, 2461.0], [6.6, 2461.0], [6.7, 2643.0], [6.8, 2643.0], [6.9, 2643.0], [7.0, 2643.0], [7.1, 2643.0], [7.2, 2694.0], [7.3, 2694.0], [7.4, 2694.0], [7.5, 2694.0], [7.6, 2694.0], [7.7, 3157.0], [7.8, 3157.0], [7.9, 3157.0], [8.0, 3157.0], [8.1, 3157.0], [8.2, 3207.0], [8.3, 3207.0], [8.4, 3207.0], [8.5, 3207.0], [8.6, 3207.0], [8.7, 3266.0], [8.8, 3266.0], [8.9, 3266.0], [9.0, 3266.0], [9.1, 3771.0], [9.2, 3771.0], [9.3, 3771.0], [9.4, 3771.0], [9.5, 3771.0], [9.6, 3847.0], [9.7, 3847.0], [9.8, 3847.0], [9.9, 3847.0], [10.0, 3847.0], [10.1, 4257.0], [10.2, 4257.0], [10.3, 4257.0], [10.4, 4257.0], [10.5, 4257.0], [10.6, 4366.0], [10.7, 4366.0], [10.8, 4366.0], [10.9, 4366.0], [11.0, 4366.0], [11.1, 5037.0], [11.2, 5037.0], [11.3, 5037.0], [11.4, 5037.0], [11.5, 5453.0], [11.6, 5453.0], [11.7, 5453.0], [11.8, 5453.0], [11.9, 5453.0], [12.0, 5467.0], [12.1, 5467.0], [12.2, 5467.0], [12.3, 5467.0], [12.4, 5467.0], [12.5, 5820.0], [12.6, 5820.0], [12.7, 5820.0], [12.8, 5820.0], [12.9, 5820.0], [13.0, 6359.0], [13.1, 6359.0], [13.2, 6359.0], [13.3, 6359.0], [13.4, 6482.0], [13.5, 6482.0], [13.6, 6482.0], [13.7, 6482.0], [13.8, 6482.0], [13.9, 6973.0], [14.0, 6973.0], [14.1, 6973.0], [14.2, 6973.0], [14.3, 6973.0], [14.4, 7278.0], [14.5, 7278.0], [14.6, 7278.0], [14.7, 7278.0], [14.8, 7278.0], [14.9, 7706.0], [15.0, 7706.0], [15.1, 7706.0], [15.2, 7706.0], [15.3, 7706.0], [15.4, 8196.0], [15.5, 8196.0], [15.6, 8196.0], [15.7, 8196.0], [15.8, 8718.0], [15.9, 8718.0], [16.0, 8718.0], [16.1, 8718.0], [16.2, 8718.0], [16.3, 51413.0], [16.4, 51413.0], [16.5, 51413.0], [16.6, 51413.0], [16.7, 51413.0], [16.8, 51482.0], [16.9, 51482.0], [17.0, 51482.0], [17.1, 51482.0], [17.2, 51482.0], [17.3, 53461.0], [17.4, 53461.0], [17.5, 53461.0], [17.6, 53461.0], [17.7, 53461.0], [17.8, 54117.0], [17.9, 54117.0], [18.0, 54117.0], [18.1, 54117.0], [18.2, 54300.0], [18.3, 54300.0], [18.4, 54300.0], [18.5, 54300.0], [18.6, 54300.0], [18.7, 54372.0], [18.8, 54372.0], [18.9, 54372.0], [19.0, 54372.0], [19.1, 54372.0], [19.2, 54691.0], [19.3, 54691.0], [19.4, 54691.0], [19.5, 54691.0], [19.6, 54691.0], [19.7, 54812.0], [19.8, 54812.0], [19.9, 54812.0], [20.0, 54812.0], [20.1, 54821.0], [20.2, 54821.0], [20.3, 54821.0], [20.4, 54821.0], [20.5, 54821.0], [20.6, 54923.0], [20.7, 54923.0], [20.8, 54923.0], [20.9, 54923.0], [21.0, 54923.0], [21.1, 55114.0], [21.2, 55114.0], [21.3, 55114.0], [21.4, 55114.0], [21.5, 55114.0], [21.6, 55517.0], [21.7, 55517.0], [21.8, 55517.0], [21.9, 55517.0], [22.0, 55517.0], [22.1, 55556.0], [22.2, 55556.0], [22.3, 55556.0], [22.4, 55556.0], [22.5, 55776.0], [22.6, 55776.0], [22.7, 55776.0], [22.8, 55776.0], [22.9, 55776.0], [23.0, 55808.0], [23.1, 55808.0], [23.2, 55808.0], [23.3, 55808.0], [23.4, 55808.0], [23.5, 55846.0], [23.6, 55846.0], [23.7, 55846.0], [23.8, 55846.0], [23.9, 55846.0], [24.0, 55873.0], [24.1, 55873.0], [24.2, 55873.0], [24.3, 55873.0], [24.4, 55873.0], [24.5, 55873.0], [24.6, 55873.0], [24.7, 55873.0], [24.8, 55873.0], [24.9, 55971.0], [25.0, 55971.0], [25.1, 55971.0], [25.2, 55971.0], [25.3, 55971.0], [25.4, 55995.0], [25.5, 55995.0], [25.6, 55995.0], [25.7, 55995.0], [25.8, 55995.0], [25.9, 56041.0], [26.0, 56041.0], [26.1, 56041.0], [26.2, 56041.0], [26.3, 56041.0], [26.4, 56107.0], [26.5, 56107.0], [26.6, 56107.0], [26.7, 56107.0], [26.8, 56144.0], [26.9, 56144.0], [27.0, 56144.0], [27.1, 56144.0], [27.2, 56144.0], [27.3, 56156.0], [27.4, 56156.0], [27.5, 56156.0], [27.6, 56156.0], [27.7, 56156.0], [27.8, 56197.0], [27.9, 56197.0], [28.0, 56197.0], [28.1, 56197.0], [28.2, 56197.0], [28.3, 56200.0], [28.4, 56200.0], [28.5, 56200.0], [28.6, 56200.0], [28.7, 56200.0], [28.8, 56208.0], [28.9, 56208.0], [29.0, 56208.0], [29.1, 56208.0], [29.2, 56234.0], [29.3, 56234.0], [29.4, 56234.0], [29.5, 56234.0], [29.6, 56234.0], [29.7, 56238.0], [29.8, 56238.0], [29.9, 56238.0], [30.0, 56238.0], [30.1, 56238.0], [30.2, 56277.0], [30.3, 56277.0], [30.4, 56277.0], [30.5, 56277.0], [30.6, 56277.0], [30.7, 56290.0], [30.8, 56290.0], [30.9, 56290.0], [31.0, 56290.0], [31.1, 56290.0], [31.2, 56321.0], [31.3, 56321.0], [31.4, 56321.0], [31.5, 56321.0], [31.6, 58556.0], [31.7, 58556.0], [31.8, 58556.0], [31.9, 58556.0], [32.0, 58556.0], [32.1, 58616.0], [32.2, 58616.0], [32.3, 58616.0], [32.4, 58616.0], [32.5, 58616.0], [32.6, 58619.0], [32.7, 58619.0], [32.8, 58619.0], [32.9, 58619.0], [33.0, 58619.0], [33.1, 58633.0], [33.2, 58633.0], [33.3, 58633.0], [33.4, 58633.0], [33.5, 58633.0], [33.6, 58633.0], [33.7, 58633.0], [33.8, 58633.0], [33.9, 58633.0], [34.0, 58636.0], [34.1, 58636.0], [34.2, 58636.0], [34.3, 58636.0], [34.4, 58636.0], [34.5, 58637.0], [34.6, 58637.0], [34.7, 58637.0], [34.8, 58637.0], [34.9, 58637.0], [35.0, 58637.0], [35.1, 58637.0], [35.2, 58637.0], [35.3, 58637.0], [35.4, 58637.0], [35.5, 58637.0], [35.6, 58637.0], [35.7, 58637.0], [35.8, 58637.0], [35.9, 58638.0], [36.0, 58638.0], [36.1, 58638.0], [36.2, 58638.0], [36.3, 58638.0], [36.4, 58638.0], [36.5, 58638.0], [36.6, 58638.0], [36.7, 58638.0], [36.8, 58638.0], [36.9, 58638.0], [37.0, 58638.0], [37.1, 58638.0], [37.2, 58638.0], [37.3, 58638.0], [37.4, 58638.0], [37.5, 58638.0], [37.6, 58638.0], [37.7, 58638.0], [37.8, 58638.0], [37.9, 58638.0], [38.0, 58638.0], [38.1, 58638.0], [38.2, 58638.0], [38.3, 58638.0], [38.4, 58638.0], [38.5, 58638.0], [38.6, 58638.0], [38.7, 58638.0], [38.8, 58638.0], [38.9, 58638.0], [39.0, 58638.0], [39.1, 58638.0], [39.2, 58638.0], [39.3, 58639.0], [39.4, 58639.0], [39.5, 58639.0], [39.6, 58639.0], [39.7, 58639.0], [39.8, 58639.0], [39.9, 58639.0], [40.0, 58639.0], [40.1, 58639.0], [40.2, 58639.0], [40.3, 58639.0], [40.4, 58639.0], [40.5, 58639.0], [40.6, 58639.0], [40.7, 58639.0], [40.8, 58639.0], [40.9, 58639.0], [41.0, 58639.0], [41.1, 58639.0], [41.2, 58639.0], [41.3, 58639.0], [41.4, 58639.0], [41.5, 58639.0], [41.6, 58639.0], [41.7, 58639.0], [41.8, 58639.0], [41.9, 58639.0], [42.0, 58639.0], [42.1, 58639.0], [42.2, 58639.0], [42.3, 58639.0], [42.4, 58639.0], [42.5, 58639.0], [42.6, 58640.0], [42.7, 58640.0], [42.8, 58640.0], [42.9, 58640.0], [43.0, 58640.0], [43.1, 58640.0], [43.2, 58640.0], [43.3, 58640.0], [43.4, 58640.0], [43.5, 58640.0], [43.6, 58640.0], [43.7, 58640.0], [43.8, 58640.0], [43.9, 58640.0], [44.0, 58640.0], [44.1, 58641.0], [44.2, 58641.0], [44.3, 58641.0], [44.4, 58641.0], [44.5, 58641.0], [44.6, 58641.0], [44.7, 58641.0], [44.8, 58641.0], [44.9, 58641.0], [45.0, 58641.0], [45.1, 58641.0], [45.2, 58641.0], [45.3, 58641.0], [45.4, 58641.0], [45.5, 58642.0], [45.6, 58642.0], [45.7, 58642.0], [45.8, 58642.0], [45.9, 58642.0], [46.0, 58642.0], [46.1, 58642.0], [46.2, 58642.0], [46.3, 58642.0], [46.4, 58642.0], [46.5, 58642.0], [46.6, 58642.0], [46.7, 58642.0], [46.8, 58642.0], [46.9, 58642.0], [47.0, 58642.0], [47.1, 58642.0], [47.2, 58642.0], [47.3, 58642.0], [47.4, 58642.0], [47.5, 58642.0], [47.6, 58642.0], [47.7, 58642.0], [47.8, 58642.0], [47.9, 58642.0], [48.0, 58642.0], [48.1, 58642.0], [48.2, 58642.0], [48.3, 58642.0], [48.4, 58643.0], [48.5, 58643.0], [48.6, 58643.0], [48.7, 58643.0], [48.8, 58643.0], [48.9, 58643.0], [49.0, 58643.0], [49.1, 58643.0], [49.2, 58643.0], [49.3, 58643.0], [49.4, 58643.0], [49.5, 58643.0], [49.6, 58643.0], [49.7, 58643.0], [49.8, 58643.0], [49.9, 58643.0], [50.0, 58643.0], [50.1, 58643.0], [50.2, 58643.0], [50.3, 58643.0], [50.4, 58643.0], [50.5, 58643.0], [50.6, 58643.0], [50.7, 58643.0], [50.8, 58643.0], [50.9, 58643.0], [51.0, 58643.0], [51.1, 58643.0], [51.2, 58643.0], [51.3, 58643.0], [51.4, 58643.0], [51.5, 58643.0], [51.6, 58643.0], [51.7, 58643.0], [51.8, 58643.0], [51.9, 58643.0], [52.0, 58643.0], [52.1, 58643.0], [52.2, 58644.0], [52.3, 58644.0], [52.4, 58644.0], [52.5, 58644.0], [52.6, 58644.0], [52.7, 58644.0], [52.8, 58644.0], [52.9, 58644.0], [53.0, 58644.0], [53.1, 58644.0], [53.2, 58644.0], [53.3, 58644.0], [53.4, 58644.0], [53.5, 58644.0], [53.6, 58644.0], [53.7, 58644.0], [53.8, 58644.0], [53.9, 58644.0], [54.0, 58644.0], [54.1, 58644.0], [54.2, 58644.0], [54.3, 58644.0], [54.4, 58644.0], [54.5, 58644.0], [54.6, 58644.0], [54.7, 58644.0], [54.8, 58644.0], [54.9, 58644.0], [55.0, 58644.0], [55.1, 58644.0], [55.2, 58644.0], [55.3, 58644.0], [55.4, 58644.0], [55.5, 58644.0], [55.6, 58644.0], [55.7, 58644.0], [55.8, 58644.0], [55.9, 58644.0], [56.0, 58645.0], [56.1, 58645.0], [56.2, 58645.0], [56.3, 58645.0], [56.4, 58645.0], [56.5, 58645.0], [56.6, 58645.0], [56.7, 58645.0], [56.8, 58645.0], [56.9, 58645.0], [57.0, 58645.0], [57.1, 58645.0], [57.2, 58645.0], [57.3, 58645.0], [57.4, 58645.0], [57.5, 58645.0], [57.6, 58645.0], [57.7, 58645.0], [57.8, 58645.0], [57.9, 58645.0], [58.0, 58645.0], [58.1, 58645.0], [58.2, 58645.0], [58.3, 58645.0], [58.4, 58645.0], [58.5, 58645.0], [58.6, 58645.0], [58.7, 58645.0], [58.8, 58645.0], [58.9, 58645.0], [59.0, 58645.0], [59.1, 58645.0], [59.2, 58645.0], [59.3, 58645.0], [59.4, 58645.0], [59.5, 58645.0], [59.6, 58645.0], [59.7, 58645.0], [59.8, 58645.0], [59.9, 58645.0], [60.0, 58645.0], [60.1, 58645.0], [60.2, 58645.0], [60.3, 58645.0], [60.4, 58645.0], [60.5, 58645.0], [60.6, 58645.0], [60.7, 58645.0], [60.8, 58645.0], [60.9, 58645.0], [61.0, 58645.0], [61.1, 58645.0], [61.2, 58645.0], [61.3, 58645.0], [61.4, 58645.0], [61.5, 58645.0], [61.6, 58645.0], [61.7, 58645.0], [61.8, 58645.0], [61.9, 58645.0], [62.0, 58645.0], [62.1, 58645.0], [62.2, 58645.0], [62.3, 58646.0], [62.4, 58646.0], [62.5, 58646.0], [62.6, 58646.0], [62.7, 58646.0], [62.8, 58646.0], [62.9, 58646.0], [63.0, 58646.0], [63.1, 58646.0], [63.2, 58646.0], [63.3, 58646.0], [63.4, 58646.0], [63.5, 58646.0], [63.6, 58646.0], [63.7, 58647.0], [63.8, 58647.0], [63.9, 58647.0], [64.0, 58647.0], [64.1, 58647.0], [64.2, 58647.0], [64.3, 58647.0], [64.4, 58647.0], [64.5, 58647.0], [64.6, 58648.0], [64.7, 58648.0], [64.8, 58648.0], [64.9, 58648.0], [65.0, 58648.0], [65.1, 58648.0], [65.2, 58648.0], [65.3, 58648.0], [65.4, 58648.0], [65.5, 58648.0], [65.6, 58648.0], [65.7, 58648.0], [65.8, 58648.0], [65.9, 58648.0], [66.0, 58648.0], [66.1, 58648.0], [66.2, 58648.0], [66.3, 58648.0], [66.4, 58648.0], [66.5, 58648.0], [66.6, 58648.0], [66.7, 58648.0], [66.8, 58648.0], [66.9, 58648.0], [67.0, 58648.0], [67.1, 58648.0], [67.2, 58648.0], [67.3, 58648.0], [67.4, 58648.0], [67.5, 58649.0], [67.6, 58649.0], [67.7, 58649.0], [67.8, 58649.0], [67.9, 58649.0], [68.0, 58649.0], [68.1, 58649.0], [68.2, 58649.0], [68.3, 58649.0], [68.4, 58649.0], [68.5, 58649.0], [68.6, 58649.0], [68.7, 58649.0], [68.8, 58649.0], [68.9, 58649.0], [69.0, 58649.0], [69.1, 58649.0], [69.2, 58649.0], [69.3, 58649.0], [69.4, 58649.0], [69.5, 58649.0], [69.6, 58649.0], [69.7, 58649.0], [69.8, 58649.0], [69.9, 58649.0], [70.0, 58649.0], [70.1, 58649.0], [70.2, 58649.0], [70.3, 58649.0], [70.4, 58650.0], [70.5, 58650.0], [70.6, 58650.0], [70.7, 58650.0], [70.8, 58650.0], [70.9, 58650.0], [71.0, 58650.0], [71.1, 58650.0], [71.2, 58650.0], [71.3, 58650.0], [71.4, 58650.0], [71.5, 58650.0], [71.6, 58650.0], [71.7, 58650.0], [71.8, 58650.0], [71.9, 58650.0], [72.0, 58650.0], [72.1, 58650.0], [72.2, 58650.0], [72.3, 58650.0], [72.4, 58650.0], [72.5, 58650.0], [72.6, 58650.0], [72.7, 58650.0], [72.8, 58651.0], [72.9, 58651.0], [73.0, 58651.0], [73.1, 58651.0], [73.2, 58651.0], [73.3, 58651.0], [73.4, 58651.0], [73.5, 58651.0], [73.6, 58651.0], [73.7, 58651.0], [73.8, 58651.0], [73.9, 58651.0], [74.0, 58651.0], [74.1, 58651.0], [74.2, 58651.0], [74.3, 58651.0], [74.4, 58651.0], [74.5, 58651.0], [74.6, 58651.0], [74.7, 58652.0], [74.8, 58652.0], [74.9, 58652.0], [75.0, 58652.0], [75.1, 58652.0], [75.2, 58652.0], [75.3, 58652.0], [75.4, 58652.0], [75.5, 58652.0], [75.6, 58652.0], [75.7, 58652.0], [75.8, 58652.0], [75.9, 58652.0], [76.0, 58652.0], [76.1, 58652.0], [76.2, 58652.0], [76.3, 58652.0], [76.4, 58652.0], [76.5, 58652.0], [76.6, 58652.0], [76.7, 58652.0], [76.8, 58652.0], [76.9, 58652.0], [77.0, 58652.0], [77.1, 58653.0], [77.2, 58653.0], [77.3, 58653.0], [77.4, 58653.0], [77.5, 58653.0], [77.6, 58653.0], [77.7, 58653.0], [77.8, 58653.0], [77.9, 58653.0], [78.0, 58653.0], [78.1, 58653.0], [78.2, 58653.0], [78.3, 58653.0], [78.4, 58653.0], [78.5, 58653.0], [78.6, 58653.0], [78.7, 58653.0], [78.8, 58653.0], [78.9, 58653.0], [79.0, 58654.0], [79.1, 58654.0], [79.2, 58654.0], [79.3, 58654.0], [79.4, 58654.0], [79.5, 58654.0], [79.6, 58654.0], [79.7, 58654.0], [79.8, 58654.0], [79.9, 58654.0], [80.0, 58654.0], [80.1, 58654.0], [80.2, 58654.0], [80.3, 58654.0], [80.4, 58654.0], [80.5, 58654.0], [80.6, 58654.0], [80.7, 58654.0], [80.8, 58654.0], [80.9, 58654.0], [81.0, 58654.0], [81.1, 58654.0], [81.2, 58654.0], [81.3, 58654.0], [81.4, 58654.0], [81.5, 58654.0], [81.6, 58654.0], [81.7, 58654.0], [81.8, 58654.0], [81.9, 58654.0], [82.0, 58654.0], [82.1, 58654.0], [82.2, 58654.0], [82.3, 58654.0], [82.4, 58654.0], [82.5, 58654.0], [82.6, 58654.0], [82.7, 58654.0], [82.8, 58655.0], [82.9, 58655.0], [83.0, 58655.0], [83.1, 58655.0], [83.2, 58655.0], [83.3, 58655.0], [83.4, 58655.0], [83.5, 58655.0], [83.6, 58655.0], [83.7, 58655.0], [83.8, 58656.0], [83.9, 58656.0], [84.0, 58656.0], [84.1, 58656.0], [84.2, 58656.0], [84.3, 58656.0], [84.4, 58656.0], [84.5, 58656.0], [84.6, 58656.0], [84.7, 58656.0], [84.8, 58656.0], [84.9, 58656.0], [85.0, 58656.0], [85.1, 58656.0], [85.2, 58657.0], [85.3, 58657.0], [85.4, 58657.0], [85.5, 58657.0], [85.6, 58657.0], [85.7, 58657.0], [85.8, 58657.0], [85.9, 58657.0], [86.0, 58657.0], [86.1, 58657.0], [86.2, 58657.0], [86.3, 58657.0], [86.4, 58657.0], [86.5, 58657.0], [86.6, 58657.0], [86.7, 58658.0], [86.8, 58658.0], [86.9, 58658.0], [87.0, 58658.0], [87.1, 58658.0], [87.2, 58658.0], [87.3, 58658.0], [87.4, 58658.0], [87.5, 58658.0], [87.6, 58658.0], [87.7, 58658.0], [87.8, 58658.0], [87.9, 58658.0], [88.0, 58658.0], [88.1, 58659.0], [88.2, 58659.0], [88.3, 58659.0], [88.4, 58659.0], [88.5, 58659.0], [88.6, 58659.0], [88.7, 58659.0], [88.8, 58659.0], [88.9, 58659.0], [89.0, 58660.0], [89.1, 58660.0], [89.2, 58660.0], [89.3, 58660.0], [89.4, 58660.0], [89.5, 58660.0], [89.6, 58660.0], [89.7, 58660.0], [89.8, 58660.0], [89.9, 58660.0], [90.0, 58660.0], [90.1, 58660.0], [90.2, 58660.0], [90.3, 58660.0], [90.4, 58660.0], [90.5, 58661.0], [90.6, 58661.0], [90.7, 58661.0], [90.8, 58661.0], [90.9, 58661.0], [91.0, 58661.0], [91.1, 58661.0], [91.2, 58661.0], [91.3, 58661.0], [91.4, 58662.0], [91.5, 58662.0], [91.6, 58662.0], [91.7, 58662.0], [91.8, 58662.0], [91.9, 58663.0], [92.0, 58663.0], [92.1, 58663.0], [92.2, 58663.0], [92.3, 58663.0], [92.4, 58663.0], [92.5, 58663.0], [92.6, 58663.0], [92.7, 58663.0], [92.8, 58663.0], [92.9, 58665.0], [93.0, 58665.0], [93.1, 58665.0], [93.2, 58665.0], [93.3, 58665.0], [93.4, 58667.0], [93.5, 58667.0], [93.6, 58667.0], [93.7, 58667.0], [93.8, 58667.0], [93.9, 58667.0], [94.0, 58667.0], [94.1, 58667.0], [94.2, 58667.0], [94.3, 58669.0], [94.4, 58669.0], [94.5, 58669.0], [94.6, 58669.0], [94.7, 58669.0], [94.8, 58670.0], [94.9, 58670.0], [95.0, 58670.0], [95.1, 58670.0], [95.2, 58670.0], [95.3, 58671.0], [95.4, 58671.0], [95.5, 58671.0], [95.6, 58671.0], [95.7, 58672.0], [95.8, 58672.0], [95.9, 58672.0], [96.0, 58672.0], [96.1, 58672.0], [96.2, 58675.0], [96.3, 58675.0], [96.4, 58675.0], [96.5, 58675.0], [96.6, 58675.0], [96.7, 58675.0], [96.8, 58675.0], [96.9, 58675.0], [97.0, 58675.0], [97.1, 58675.0], [97.2, 58675.0], [97.3, 58675.0], [97.4, 58675.0], [97.5, 58675.0], [97.6, 58675.0], [97.7, 58676.0], [97.8, 58676.0], [97.9, 58676.0], [98.0, 58676.0], [98.1, 58681.0], [98.2, 58681.0], [98.3, 58681.0], [98.4, 58681.0], [98.5, 58681.0], [98.6, 58682.0], [98.7, 58682.0], [98.8, 58682.0], [98.9, 58682.0], [99.0, 58682.0], [99.1, 58690.0], [99.2, 58690.0], [99.3, 58690.0], [99.4, 58690.0], [99.5, 58690.0], [99.6, 59053.0], [99.7, 59053.0], [99.8, 59053.0], [99.9, 59053.0]], "isOverall": false, "label": "CreateFeesAndTaxes", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 141.0, "series": [{"data": [[8700.0, 1.0], [1100.0, 1.0], [1400.0, 1.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 3.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2400.0, 2.0], [2600.0, 2.0], [3100.0, 1.0], [51400.0, 2.0], [3200.0, 2.0], [53400.0, 1.0], [54100.0, 1.0], [54300.0, 2.0], [54600.0, 1.0], [54800.0, 2.0], [54900.0, 1.0], [55100.0, 1.0], [55500.0, 2.0], [55700.0, 1.0], [55800.0, 4.0], [56000.0, 1.0], [55900.0, 2.0], [56100.0, 4.0], [56200.0, 6.0], [56300.0, 1.0], [58500.0, 1.0], [58600.0, 141.0], [3700.0, 1.0], [59000.0, 1.0], [3800.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [5000.0, 1.0], [5400.0, 2.0], [5800.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6900.0, 1.0], [7200.0, 1.0], [7700.0, 1.0], [8100.0, 1.0]], "isOverall": false, "label": "CreateFeesAndTaxes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 59000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 140.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 67.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 140.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.576159626E12, "maxY": 35.0, "series": [{"data": [[1.576159861E12, 35.0], [1.576159859E12, 35.0], [1.57615986E12, 35.0], [1.576159687E12, 35.0], [1.576159686E12, 35.0], [1.576159685E12, 35.0], [1.576159683E12, 35.0], [1.576159854E12, 35.0], [1.576159684E12, 35.0], [1.576159682E12, 35.0], [1.576159681E12, 35.0], [1.576159743E12, 35.0], [1.576159744E12, 35.0], [1.576159742E12, 35.0], [1.576159913E12, 35.0], [1.576159741E12, 35.0], [1.576159737E12, 35.0], [1.576159863E12, 35.0], [1.576159862E12, 35.0], [1.576159626E12, 35.0], [1.576159796E12, 35.0], [1.576159922E12, 1.0], [1.576159921E12, 4.5], [1.576159919E12, 19.5], [1.57615992E12, 11.5], [1.576159918E12, 28.5], [1.576159746E12, 35.0], [1.576159917E12, 34.0], [1.576159745E12, 35.0], [1.576159679E12, 35.0], [1.57615968E12, 35.0], [1.576159678E12, 35.0], [1.576159803E12, 35.0], [1.576159804E12, 35.0], [1.576159802E12, 35.0], [1.576159801E12, 35.0], [1.5761598E12, 35.0], [1.576159627E12, 35.0]], "isOverall": false, "label": "CreateFeesAndTaxesThreadGroup", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.576159922E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 47395.49714285717, "minX": 1.0, "maxY": 59053.0, "series": [{"data": [[33.0, 58649.0], [32.0, 58652.0], [2.0, 58661.0], [35.0, 47395.49714285717], [34.0, 58644.0], [3.0, 58654.0], [4.0, 58662.0], [5.0, 58670.0], [6.0, 58658.0], [7.0, 58654.0], [8.0, 58663.0], [9.0, 58657.0], [10.0, 58654.0], [11.0, 58653.0], [12.0, 58638.0], [13.0, 58653.0], [14.0, 58654.0], [15.0, 58659.0], [16.0, 58645.0], [1.0, 58650.0], [17.0, 58651.0], [18.0, 58646.0], [19.0, 58642.0], [20.0, 58641.0], [21.0, 58657.0], [22.0, 58645.0], [23.0, 58647.0], [24.0, 58649.0], [25.0, 58660.0], [26.0, 58636.0], [27.0, 59053.0], [28.0, 58643.0], [29.0, 58642.0], [30.0, 58644.0], [31.0, 58644.0]], "isOverall": false, "label": "CreateFeesAndTaxes", "isController": false}, {"data": [[32.1531100478469, 49228.430622009604]], "isOverall": false, "label": "CreateFeesAndTaxes-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 35.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 390.0, "minX": 1.576159626E12, "maxY": 278917.0, "series": [{"data": [[1.576159861E12, 1560.0], [1.576159859E12, 1950.0], [1.57615986E12, 5460.0], [1.576159687E12, 38770.0], [1.576159686E12, 67850.0], [1.576159685E12, 48466.0], [1.576159683E12, 48468.0], [1.576159854E12, 390.0], [1.576159684E12, 126001.0], [1.576159682E12, 87229.0], [1.576159681E12, 96937.0], [1.576159743E12, 3120.0], [1.576159744E12, 3120.0], [1.576159742E12, 3900.0], [1.576159913E12, 390.0], [1.576159741E12, 390.0], [1.576159737E12, 390.0], [1.576159863E12, 1560.0], [1.576159862E12, 2730.0], [1.576159626E12, 9692.0], [1.576159796E12, 390.0], [1.576159922E12, 390.0], [1.576159921E12, 2340.0], [1.576159919E12, 3120.0], [1.57615992E12, 3120.0], [1.576159918E12, 3900.0], [1.576159746E12, 780.0], [1.576159917E12, 390.0], [1.576159745E12, 1950.0], [1.576159679E12, 38765.0], [1.57615968E12, 48473.0], [1.576159678E12, 19391.0], [1.576159803E12, 2340.0], [1.576159804E12, 2340.0], [1.576159802E12, 2340.0], [1.576159801E12, 5460.0], [1.5761598E12, 780.0], [1.576159627E12, 38771.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.576159861E12, 79694.0], [1.576159859E12, 99612.0], [1.57615986E12, 278911.0], [1.576159687E12, 79680.0], [1.576159686E12, 139451.0], [1.576159685E12, 99614.0], [1.576159683E12, 99619.0], [1.576159854E12, 19917.0], [1.576159684E12, 258993.0], [1.576159682E12, 179314.0], [1.576159681E12, 199244.0], [1.576159743E12, 159381.0], [1.576159744E12, 159357.0], [1.576159742E12, 199204.0], [1.576159913E12, 19926.0], [1.576159741E12, 19925.0], [1.576159737E12, 19921.0], [1.576159863E12, 79679.0], [1.576159862E12, 139435.0], [1.576159626E12, 19927.0], [1.576159796E12, 19919.0], [1.576159922E12, 19925.0], [1.576159921E12, 119527.0], [1.576159919E12, 159394.0], [1.57615992E12, 159382.0], [1.576159918E12, 199216.0], [1.576159746E12, 39838.0], [1.576159917E12, 19922.0], [1.576159745E12, 99606.0], [1.576159679E12, 79667.0], [1.57615968E12, 99596.0], [1.576159678E12, 39842.0], [1.576159803E12, 119516.0], [1.576159804E12, 119536.0], [1.576159802E12, 119523.0], [1.576159801E12, 278917.0], [1.5761598E12, 39848.0], [1.576159627E12, 79694.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.576159922E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1454.0, "minX": 1.576159626E12, "maxY": 58687.2, "series": [{"data": [[1.576159861E12, 58648.75], [1.576159859E12, 58655.2], [1.57615986E12, 58650.07142857143], [1.576159687E12, 7974.5], [1.576159686E12, 5941.571428571428], [1.576159685E12, 3889.6], [1.576159683E12, 57610.8], [1.576159854E12, 58659.0], [1.576159684E12, 2227.6153846153848], [1.576159682E12, 56234.333333333336], [1.576159681E12, 55825.59999999999], [1.576159743E12, 58666.375], [1.576159744E12, 58649.875], [1.576159742E12, 58663.9], [1.576159913E12, 58650.0], [1.576159741E12, 58643.0], [1.576159737E12, 58643.0], [1.576159863E12, 58653.75], [1.576159862E12, 58642.57142857143], [1.576159626E12, 1454.0], [1.576159796E12, 58638.0], [1.576159922E12, 58650.0], [1.576159921E12, 58659.83333333333], [1.576159919E12, 58646.75], [1.57615992E12, 58653.875], [1.576159918E12, 58687.2], [1.576159746E12, 58639.5], [1.576159917E12, 58644.0], [1.576159745E12, 58648.8], [1.576159679E12, 53550.5], [1.57615968E12, 54872.2], [1.576159678E12, 52471.5], [1.576159803E12, 58647.833333333336], [1.576159804E12, 58647.33333333333], [1.576159802E12, 58643.33333333333], [1.576159801E12, 58638.78571428571], [1.5761598E12, 58652.5], [1.576159627E12, 2012.0]], "isOverall": false, "label": "CreateFeesAndTaxes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.576159922E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1454.0, "minX": 1.576159626E12, "maxY": 58687.2, "series": [{"data": [[1.576159861E12, 58648.75], [1.576159859E12, 58655.2], [1.57615986E12, 58650.07142857143], [1.576159687E12, 7974.5], [1.576159686E12, 5941.571428571428], [1.576159685E12, 3889.6], [1.576159683E12, 57610.8], [1.576159854E12, 58659.0], [1.576159684E12, 2227.6153846153848], [1.576159682E12, 56234.333333333336], [1.576159681E12, 55825.59999999999], [1.576159743E12, 58666.375], [1.576159744E12, 58649.875], [1.576159742E12, 58663.9], [1.576159913E12, 58650.0], [1.576159741E12, 58643.0], [1.576159737E12, 58643.0], [1.576159863E12, 58653.75], [1.576159862E12, 58642.57142857143], [1.576159626E12, 1454.0], [1.576159796E12, 58638.0], [1.576159922E12, 58650.0], [1.576159921E12, 58659.83333333333], [1.576159919E12, 58646.75], [1.57615992E12, 58653.875], [1.576159918E12, 58687.2], [1.576159746E12, 58639.5], [1.576159917E12, 58644.0], [1.576159745E12, 58648.8], [1.576159679E12, 53550.5], [1.57615968E12, 54872.2], [1.576159678E12, 52471.5], [1.576159803E12, 58647.833333333336], [1.576159804E12, 58647.33333333333], [1.576159802E12, 58643.33333333333], [1.576159801E12, 58638.71428571428], [1.5761598E12, 58652.5], [1.576159627E12, 2012.0]], "isOverall": false, "label": "CreateFeesAndTaxes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.576159922E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 381.0, "minX": 1.576159626E12, "maxY": 445.75, "series": [{"data": [[1.576159861E12, 391.75], [1.576159859E12, 395.8], [1.57615986E12, 392.21428571428567], [1.576159687E12, 387.75], [1.576159686E12, 386.42857142857144], [1.576159685E12, 394.2], [1.576159683E12, 406.8], [1.576159854E12, 398.0], [1.576159684E12, 385.69230769230774], [1.576159682E12, 389.22222222222223], [1.576159681E12, 407.1], [1.576159743E12, 409.75], [1.576159744E12, 391.75], [1.576159742E12, 390.90000000000003], [1.576159913E12, 393.0], [1.576159741E12, 383.0], [1.576159737E12, 385.0], [1.576159863E12, 396.25], [1.576159862E12, 385.42857142857144], [1.576159626E12, 430.0], [1.576159796E12, 382.0], [1.576159922E12, 393.0], [1.576159921E12, 400.83333333333337], [1.576159919E12, 389.875], [1.57615992E12, 393.875], [1.576159918E12, 428.7], [1.576159746E12, 384.5], [1.576159917E12, 381.0], [1.576159745E12, 390.6], [1.576159679E12, 426.75], [1.57615968E12, 437.6], [1.576159678E12, 407.0], [1.576159803E12, 390.5], [1.576159804E12, 390.1666666666667], [1.576159802E12, 387.5], [1.576159801E12, 382.7857142857142], [1.5761598E12, 390.0], [1.576159627E12, 445.75]], "isOverall": false, "label": "CreateFeesAndTaxes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.576159922E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1195.0, "minX": 1.576159626E12, "maxY": 58619.0, "series": [{"data": [[1.576159679E12, 54372.0], [1.576159626E12, 1454.0], [1.57615968E12, 55114.0], [1.576159678E12, 53461.0], [1.576159687E12, 8718.0], [1.576159686E12, 6973.0], [1.576159685E12, 4366.0], [1.576159683E12, 58619.0], [1.576159684E12, 3266.0], [1.576159682E12, 56321.0], [1.576159627E12, 2402.0], [1.576159681E12, 56041.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.576159679E12, 51413.0], [1.576159626E12, 1454.0], [1.57615968E12, 54691.0], [1.576159678E12, 51482.0], [1.576159687E12, 7278.0], [1.576159686E12, 5037.0], [1.576159685E12, 3207.0], [1.576159683E12, 56107.0], [1.576159684E12, 1195.0], [1.576159682E12, 56144.0], [1.576159627E12, 1607.0], [1.576159681E12, 55517.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.576159679E12, 54357.6], [1.576159626E12, 1454.0], [1.57615968E12, 54980.3], [1.576159678E12, 53461.0], [1.576159687E12, 56238.0], [1.576159686E12, 56253.6], [1.576159685E12, 56278.3], [1.576159683E12, 56317.9], [1.576159684E12, 56284.8], [1.576159682E12, 56253.6], [1.576159627E12, 2402.0], [1.576159681E12, 55978.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.576159679E12, 54372.0], [1.576159626E12, 1454.0], [1.57615968E12, 55114.0], [1.576159678E12, 53461.0], [1.576159687E12, 58619.0], [1.576159686E12, 58619.0], [1.576159685E12, 58619.0], [1.576159683E12, 58619.0], [1.576159684E12, 58619.0], [1.576159682E12, 56321.0], [1.576159627E12, 2402.0], [1.576159681E12, 56041.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.576159679E12, 54372.0], [1.576159626E12, 1454.0], [1.57615968E12, 55114.0], [1.576159678E12, 53461.0], [1.576159687E12, 57438.5], [1.576159686E12, 57885.49999999999], [1.576159685E12, 58559.0], [1.576159683E12, 58613.0], [1.576159684E12, 58574.0], [1.576159682E12, 56296.2], [1.576159627E12, 2402.0], [1.576159681E12, 56024.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.576159687E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 51413.0, "minX": 1000.0, "maxY": 58648.0, "series": [{"data": [[1000.0, 51413.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 58648.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 51413.0, "minX": 1000.0, "maxY": 58648.0, "series": [{"data": [[1000.0, 51413.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 58648.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.576159625E12, "maxY": 28.0, "series": [{"data": [[1.576159861E12, 4.0], [1.576159859E12, 5.0], [1.57615986E12, 14.0], [1.576159687E12, 4.0], [1.576159686E12, 7.0], [1.576159685E12, 5.0], [1.576159683E12, 5.0], [1.576159854E12, 1.0], [1.576159684E12, 13.0], [1.576159682E12, 9.0], [1.576159681E12, 10.0], [1.576159743E12, 8.0], [1.576159744E12, 8.0], [1.576159742E12, 10.0], [1.576159741E12, 1.0], [1.576159737E12, 1.0], [1.576159863E12, 4.0], [1.576159862E12, 7.0], [1.576159626E12, 8.0], [1.576159625E12, 28.0], [1.576159796E12, 1.0], [1.576159746E12, 2.0], [1.576159745E12, 5.0], [1.576159679E12, 4.0], [1.57615968E12, 5.0], [1.576159678E12, 2.0], [1.576159803E12, 6.0], [1.576159804E12, 6.0], [1.576159802E12, 6.0], [1.576159801E12, 14.0], [1.5761598E12, 2.0], [1.576159627E12, 4.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.576159863E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.576159626E12, "maxY": 14.0, "series": [{"data": [[1.576159679E12, 4.0], [1.576159626E12, 1.0], [1.57615968E12, 5.0], [1.576159678E12, 2.0], [1.576159687E12, 4.0], [1.576159686E12, 7.0], [1.576159685E12, 5.0], [1.576159683E12, 5.0], [1.576159684E12, 13.0], [1.576159682E12, 9.0], [1.576159627E12, 4.0], [1.576159681E12, 10.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.576159861E12, 4.0], [1.576159859E12, 5.0], [1.57615986E12, 14.0], [1.576159854E12, 1.0], [1.576159743E12, 8.0], [1.576159744E12, 8.0], [1.576159742E12, 10.0], [1.576159913E12, 1.0], [1.576159741E12, 1.0], [1.576159737E12, 1.0], [1.576159863E12, 4.0], [1.576159862E12, 7.0], [1.576159796E12, 1.0], [1.576159922E12, 1.0], [1.576159921E12, 6.0], [1.576159919E12, 8.0], [1.57615992E12, 8.0], [1.576159918E12, 10.0], [1.576159746E12, 2.0], [1.576159917E12, 1.0], [1.576159745E12, 5.0], [1.576159803E12, 6.0], [1.576159804E12, 6.0], [1.576159802E12, 6.0], [1.576159801E12, 14.0], [1.5761598E12, 2.0]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.576159922E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.576159626E12, "maxY": 14.0, "series": [{"data": [[1.576159679E12, 4.0], [1.576159626E12, 1.0], [1.57615968E12, 5.0], [1.576159678E12, 2.0], [1.576159687E12, 4.0], [1.576159686E12, 7.0], [1.576159685E12, 5.0], [1.576159683E12, 5.0], [1.576159684E12, 13.0], [1.576159682E12, 9.0], [1.576159627E12, 4.0], [1.576159681E12, 10.0]], "isOverall": false, "label": "CreateFeesAndTaxes-success", "isController": false}, {"data": [[1.576159861E12, 4.0], [1.576159859E12, 5.0], [1.57615986E12, 14.0], [1.576159854E12, 1.0], [1.576159743E12, 8.0], [1.576159744E12, 8.0], [1.576159742E12, 10.0], [1.576159913E12, 1.0], [1.576159741E12, 1.0], [1.576159737E12, 1.0], [1.576159863E12, 4.0], [1.576159862E12, 7.0], [1.576159796E12, 1.0], [1.576159922E12, 1.0], [1.576159921E12, 6.0], [1.576159919E12, 8.0], [1.57615992E12, 8.0], [1.576159918E12, 10.0], [1.576159746E12, 2.0], [1.576159917E12, 1.0], [1.576159745E12, 5.0], [1.576159803E12, 6.0], [1.576159804E12, 6.0], [1.576159802E12, 6.0], [1.576159801E12, 14.0], [1.5761598E12, 2.0]], "isOverall": false, "label": "CreateFeesAndTaxes-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.576159922E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.576159626E12, "maxY": 14.0, "series": [{"data": [[1.576159679E12, 4.0], [1.576159626E12, 1.0], [1.57615968E12, 5.0], [1.576159678E12, 2.0], [1.576159687E12, 4.0], [1.576159686E12, 7.0], [1.576159685E12, 5.0], [1.576159683E12, 5.0], [1.576159684E12, 13.0], [1.576159682E12, 9.0], [1.576159627E12, 4.0], [1.576159681E12, 10.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.576159861E12, 4.0], [1.576159859E12, 5.0], [1.57615986E12, 14.0], [1.576159854E12, 1.0], [1.576159743E12, 8.0], [1.576159744E12, 8.0], [1.576159742E12, 10.0], [1.576159913E12, 1.0], [1.576159741E12, 1.0], [1.576159737E12, 1.0], [1.576159863E12, 4.0], [1.576159862E12, 7.0], [1.576159796E12, 1.0], [1.576159922E12, 1.0], [1.576159921E12, 6.0], [1.576159919E12, 8.0], [1.57615992E12, 8.0], [1.576159918E12, 10.0], [1.576159746E12, 2.0], [1.576159917E12, 1.0], [1.576159745E12, 5.0], [1.576159803E12, 6.0], [1.576159804E12, 6.0], [1.576159802E12, 6.0], [1.576159801E12, 14.0], [1.5761598E12, 2.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.576159922E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

