import './App.css';
import Title from './Components/Title';
import NewsBanner from './Components/NewsBanner';
import Content from './Components/Content';


function App() {


const uutiset = [
  <header>
    <h3>Rikosepäilyt</h3>
    <span>  | EIT-huikaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa</span>
  </header>,
  <header>
    <h3>HS Vantaa</h3>
    <span> | Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</span>
  </header>,
  <header>
    <h3>Päivittyvä seuranta</h3>
    <span> | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</span>
  </header>,
  <header>
    <h3>Nyt.fi</h3>
    <span> | Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle</span>
  </header>,
  <header>
    <h3>Rikosepäilyt</h3>
    <span> | Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"</span>
  </header>,
  <header>
    <h3>Helsinki</h3>
    <span> | Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille</span>
  </header>
]



  return (
    <div className="App">
      <Title />
      <NewsBanner />
      <Content topNews={uutiset} />
     
    </div>
  );
}

export default App;
