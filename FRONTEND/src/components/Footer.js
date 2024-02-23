import React from 'react'
import "./style.css";

export default function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="footer-1">
                <div className="logo">
                    <img src="../../images/eatout logo.jpg" alt=""/>
                </div>
                <div>
                    <address>
                        <p>Email:hirannishshanka@gmail.com</p>
                        <p>GitHub: <a herf="https://github.com/hirandilshan">hirandilshan</a></p>
                        <p>Mr.Hiran Nishshanka,<br/>Kegalle,<br/>SriLanka.</p>
                    </address>
                </div>
            </div>
            <div className="footer-2">
                <img src="../../images/download.jpeg" alt=""/>
                <h2>Powered by <em>HD Creations</em></h2>
            </div>
        </div>
    </div>
    
  )
}
