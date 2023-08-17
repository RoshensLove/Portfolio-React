import React, { Component } from 'react'

export class Contacts extends Component {
  render() {
    return (
      <div>

        <main className="main">
            <div className="container">
                <h2 className="main__title">Contacts</h2>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="content-list__title">Location</h2>
                        <p>Ukraine, Kyiv</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="content-list__title">Telegram</h2>
                        <p>+380674184586</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="content-list__title">Email</h2>
                        <p>ostrovskyol1@gmail.com</p>
                    </li>
                    
                </ul>
            </div>
        </main>

      </div>
    )
  }
}

export default Contacts