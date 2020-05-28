import axios from 'axios';
const API_URL: string = 'https://api.github.com';



export default function start(): void {
  axios.get(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
  .then((res: Object) => {
    console.log('최근 10개의 이슈:');
    let arrData: [] = res.data;
    arrData
      .map(issue => issue.title)
      .forEach((title: string) => console.log(title));
});
}