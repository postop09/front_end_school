// 잘 사용하지 않음
function 로드다됨(e) {
  console.log(e.currentTarget.response);
}

var req = new XMLHttpRequest();
var 주소 = "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json";

req.addEventListener("load", 로드다됨);
req.open("GET", 주소);
req.send();


// node.js 에서 자주 사용 된다.
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
    <script>
        const url = 'https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json';
        axios.get(url).then((response) => {console.log(response)});
    </script>
</body>
</html>