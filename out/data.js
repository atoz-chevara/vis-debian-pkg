function getData() {
var data = {};
data["packages"] = {};
data["packages"]["i386"] = google.visualization.arrayToDataTable([
  ["Release", "main", "contrib", "non-free"],
  ["hamm", 1524, 101, 227],
  ["slink", 2269, 97, 298],
  ["potato", 3889, 123, 293],
  ["woody", 8273, 203, 271],
  ["sarge", 15195, 227, 235],
  ["etch", 18043, 248, 310],
  ["lenny", 22264, 283, 379],
  ["squeeze", 28155, 185, 403],
  ["wheezy", 36024, 212, 452],
  ["jessie", 42270, 246, 454],
  ["stretch", 48386, 254, 415],
  ["sid", 51473, 286, 465],
]);
data["packages"]["amd64"] = google.visualization.arrayToDataTable([
  ["Release", "main", "contrib", "non-free"],
  ["hamm", 0, 0, 0],
  ["slink", 0, 0, 0],
  ["potato", 0, 0, 0],
  ["woody", 0, 0, 0],
  ["sarge", 0, 0, 0],
  ["etch", 17712, 194, 233],
  ["lenny", 21990, 265, 323],
  ["squeeze", 28059, 180, 384],
  ["wheezy", 35911, 210, 475],
  ["jessie", 42235, 250, 470],
  ["stretch", 48557, 265, 464],
  ["sid", 51671, 297, 515],
]);
data["sizes"] = {};
data["sizes"]["i386"] = google.visualization.arrayToDataTable([
  ["Release", "main", "contrib", "non-free"],
  ["hamm", 563951784, 95910764, 115587992],
  ["slink", 884002434, 94452632, 200869328],
  ["potato", 1595543370, 72079736, 218907600],
  ["woody", 4090338258, 110186346, 245065616],
  ["sarge", 8881423230, 131521036, 295194424],
  ["etch", 13619181860, 118358448, 613134748],
  ["lenny", 19290059908, 358360656, 1966059092],
  ["squeeze", 32756688008, 169404828, 2751891324],
  ["wheezy", 42986107150, 223037492, 3555763048],
  ["jessie", 57237841434, 240046890, 3777009218],
  ["stretch", 61288721296, 284528906, 3223171894],
  ["sid", 68188783048, 298076918, 3325752812],
]);
data["sizes"]["amd64"] = google.visualization.arrayToDataTable([
  ["Release", "main", "contrib", "non-free"],
  ["hamm", 0, 0, 0],
  ["slink", 0, 0, 0],
  ["potato", 0, 0, 0],
  ["woody", 0, 0, 0],
  ["sarge", 0, 0, 0],
  ["etch", 13498074770, 109987086, 589384034],
  ["lenny", 19436983384, 354749732, 1984193190],
  ["squeeze", 32918477740, 172094208, 2777815688],
  ["wheezy", 43924446714, 226240472, 3576406220],
  ["jessie", 58097407630, 252386206, 3788814408],
  ["stretch", 62535447110, 300275614, 4004610152],
  ["sid", 69332753314, 313894956, 4128797648],
]);
return data;
}
