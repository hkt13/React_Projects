import { useState } from 'react';
import './App.css';
function App() {
const quotes= ["The thing I wished for destroyed my whole family. I brought all this suffering down on my family because I made a wish for my dad without knowing what he really wanted. — Kyoko Sakura",
  'The loneliest people are the kindest. The saddest people smile the brightest.The most damaged people are the wisest. All because they dont wish to see anyone else suffer the way they did. Jellal Fernandes',
  'Is it all right to not hold it in anymore? Sanae-san told me, places that I can cry are in a bathroom, or in daddys arms. — Ushio',
  'Death isnt kind. Its dark and black and as far as you… As far as you can see youre all alone. Theres no one else. — Mei Misaki',
  'They call certain methods of fighting good and others evil, acting as if there were some nobility to the battlefield. Such illusions, perpetrated by heroes throughout history, have led countless young men to their bloody deaths, all for the sake of this valor and glory. — Kiritsugu Emiya',
  'The two of us arent so different. My whole life Ive desired from others. I felt bitter to the people around me and I closed off my heart. And a heart that lets nothing in will become empty before you realize it. — Mei Aihara',
  'Was I able to live inside someones heart? Was I able to live inside your heart? Do you think youll remember me at least a little? Youd better not hit reset! Dont forget me, OK? Thats a promise, OK? Im glad its you, after all. Will I reach you? I hope I can reach you. — Kaori',
  'Im fine, except… its a terrible day for rain. — Roy Mustang',
  'Humans die. Animals die. Plants die. Even soul reapers die. Its the arch of the universe. Everything that comes to life eventually ceases to exist. — Baraggan Louisenbairn']

    const[quote,setquote] = useState(quotes[0])
  
  
  function clicked(){

    setquote(quotes[Math.floor(Math.random()*quotes.length)])

  }
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={clicked}>Click Me</button>
     <h2>{quote}</h2>
     </div>
  );
}

export default App;
