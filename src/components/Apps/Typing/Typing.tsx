import { useState, useEffect, useRef } from "react"
import data from "./data.json"
import "./Typing.scss"

export default function Typing() {
    const [template, setTemplate] = useState<string>(data[0])
    const [input, setInput] = useState('');
    const [time, setTime] = useState<Date | null>(null);
    const [finished, setFinished] = useState(false);
    const [wpm, setWpm] = useState(0);
    const inputRef = useRef<HTMLTextAreaElement>(null);
  
    useEffect(() => {
      if (input.length === 1 && !time) {
        setTime(new Date());
      }

      if (!time) {
        return;
      }
      const timeDiff = (new Date().getTime() - time.getTime()) / 1000 / 60;
      const words = input.trim().split(' ').length;
      setWpm(Math.round(words / timeDiff));

      if (input == template) {
        setFinished(true);
      }
    }, [input]);
  
    const reset = () => {
      setInput('');
      setTemplate(data[Math.floor(Math.random() * data.length)])
      setTime(null);
      setFinished(false);
      setWpm(0);
      inputRef.current?.focus();
    };

    return (
    <div className="app_typing">
        <h3>Test Szybkości pisania</h3>
        <div className="score_box">
            <p>Wpm: {wpm}</p>
            <button onClick={() => reset()}>Reset</button>
        </div>
        <p>Przepisz poniższy tekst, bezbłędnie z jak największą prędkością</p>
        <div className="template">
          {template.split('').map((char, index) => {
            const x = input[index];
            const className =
              x == null
                ? '' : x === char ? "correct" : "incorrect"
            return (
              <span key={index} className={className}>
                {char}
              </span>
            );
          })}
        </div>
        <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={finished}
            placeholder="Start typing here..."
        />
    </div>
  )
}
