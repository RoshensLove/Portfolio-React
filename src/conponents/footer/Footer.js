import React, { Component } from 'react'
import './footer.css'

import github from './../../img/icons/github.svg'
import instagram from './../../img/icons/instagram.svg'
import telegram from './../../img/icons/telegram.svg'
import linkedIn from './../../img/icons/linked-in.svg'

export class Footer extends Component {
  render() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a target="_blank" href="http://t.me/Alegat_or">
                            <img src={telegram} alt="telegram-img" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a target="_blank" href="https://github.com/RoshensLove">
                            <img src={github} alt="github-img"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a target="_blank" href="https://instagram.com/__ostroler_">
                            <img src={instagram} alt="instagram-img"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a target="_blank" href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-a5116924a/">
                            <img src={linkedIn} alt="linked-in"/>
                        </a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>© 2023 Oleg Ostrovsky</p>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}

export default Footer