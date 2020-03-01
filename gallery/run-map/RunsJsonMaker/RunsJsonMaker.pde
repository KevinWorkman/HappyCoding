// This sketch takes a routes.json file and removes
// extra stuff we don't care about.

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.TimeZone;

SimpleDateFormat fromDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssX");
SimpleDateFormat toEastDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm aa");
toEastDateFormat.setTimeZone(TimeZone.getTimeZone("America/New_York"));
SimpleDateFormat toWestDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm aa");
toWestDateFormat.setTimeZone(TimeZone.getTimeZone("America/Los_Angeles"));

DecimalFormat kmFormat = new DecimalFormat("0.###");

JSONArray inputRuns = loadJSONObject("routes.json")
  .getJSONObject("user")
  .getJSONArray("runs");

// Use an ArrayList so we can sort the runs by date.
ArrayList<JSONObject> runsToSort = new ArrayList<JSONObject>();

for (int i = 0; i < inputRuns.size(); i++) {
  JSONObject inputRun = inputRuns.getJSONObject(i);

  JSONObject metrics = inputRun.getJSONObject("metrics");
  String distance = kmFormat.format(metrics.getInt("distance") / 1000.0);
  int timeSeconds = metrics.getInt("duration");

  String inputStartTime = metrics.getString("start_time");
  String outputStartTime = "";
  try {
    if (inputStartTime.startsWith("2013") || inputStartTime.startsWith("2013") ||
      inputStartTime.startsWith("2013") || inputStartTime.startsWith("2013")) {
      outputStartTime = toEastDateFormat.format(fromDateFormat.parse(inputStartTime));
    } else {
      outputStartTime = toWestDateFormat.format(fromDateFormat.parse(inputStartTime));
    }
  } 
  catch(Exception e) {
    e.printStackTrace();
  }

  if (inputRun.isNull("route")) {
    continue;
  }

  JSONArray inputRouteGps = inputRun.getJSONObject("route").getJSONArray("gps");
  JSONArray outputRoute = new JSONArray();
  for (int gpsIndex = 0; gpsIndex < inputRouteGps.size(); gpsIndex++) {
    JSONObject inputCoordinate = inputRouteGps.getJSONObject(gpsIndex);
    JSONObject outputCoordinate = new JSONObject();
    outputCoordinate.setFloat("lat", inputCoordinate.getFloat("latitude"));
    outputCoordinate.setFloat("lng", inputCoordinate.getFloat("longitude"));
    outputRoute.append(outputCoordinate);
  }

  JSONObject outputRun = new JSONObject();
  outputRun.setString("startTime", outputStartTime);
  outputRun.setString("distance", distance);
  outputRun.setJSONArray("path", outputRoute);
  runsToSort.add(outputRun);
}

runsToSort.sort(new Comparator<JSONObject>() {
  public int compare(JSONObject one, JSONObject two) {
    return one.getString("startTime").compareTo(two.getString("startTime"));
  }
});

JSONArray outputRuns = new JSONArray();
for (JSONObject run : runsToSort) {
  outputRuns.append(run);
}
saveJSONArray(outputRuns, "runs.json", "compact");

println("Done.");
