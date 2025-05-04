import { useState } from 'react';
import './Applist.scss';

const Applist = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ['Test reackcji', 'Szybkość pisania', 'TicTac'];
  
    return (
        <>
        <button onClick={() => setIsOpen(!isOpen)} className='btn_slide'>Aplikacje</button>
        <div className="container">
        <menu className={`${isOpen ? "expanded" : ''}`}>
          {menuItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="item"
              style={{ animationDelay: `${i * 100}ms` }}>
              {item}
            </a>
          ))}
        </menu>
      </div>
      </>
    );
  };

export default Applist;
