/**
 * {
  "name": "Josh",
  "education": {
    "university": "University of Waterloo",
    "major": "Micro Economics",
    "year": "Freshman",
    "graduationYear": 2026
  },
  "careerGoals": {
    "targetCompanyType": "Government",
    "targetRole": "Economic Development"
  }
}
 * @param {*} str 
 * @returns 
 */
export function extractJSON(str) {
  console.log(str);
  var firstOpen, firstClose, candidate;
  firstOpen = str.indexOf('{', firstOpen + 1);
  do {
    firstClose = str.lastIndexOf('}');
    console.log('firstOpen: ' + firstOpen, 'firstClose: ' + firstClose);
    if (firstClose <= firstOpen) {
      return null;
    }
    do {
      candidate = str.substring(firstOpen, firstClose + 1);
      console.log('candidate: ' + candidate);
      try {
        var res = JSON.parse(candidate);
        console.log('...found');
        return [res, firstOpen, firstClose + 1];
      } catch (e) {
        console.log('...failed');
      }
      firstClose = str.substr(0, firstClose).lastIndexOf('}');
    } while (firstClose > firstOpen);
    firstOpen = str.indexOf('{', firstOpen + 1);
  } while (firstOpen != -1);
}
