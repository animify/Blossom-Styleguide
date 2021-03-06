import React from 'react'
import Link from 'react-router/lib/Link'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Dividers extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    $('body').find('.dropdown').dropdown()
  }

  render() {
    return (
      <div>
        <Title title="Dropdown">A dropdown allows a user to select an option from a list of values</Title>
        <div className="opening-message">
          <div className="message info">
            <h6>Dropdown utility</h6>
            <p>
              Learn more about using Blossom JS to initialise manipulate dropdowns <Link to="/utility">here</Link>
            </p>
          </div>
        </div>
        <div className="example dropdowns">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Dropdown</h5>
            <p>Simple dropdown with a simple toggle</p>
          </div>
          <div className="module collapsed">
            <div className="dropdown">
              <a className="toggle">Format file <i className="ion-chevron-down"/></a>
              <ul className="menu">
                <li><a>New...</a></li>
                <li><a>Open</a></li>
                <li><a>Open project folder</a></li>
                <li><a>Save as...</a></li>
              </ul>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example dropdowns">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Dropdown features</h5>
            <p>Dropdowns can also have headers, dividers and icons within them</p>
          </div>
          <div className="module collapsed">
            <div className="dropdown">
              <a className="toggle">Format file <i className="ion-chevron-down"/></a>
              <ul className="menu">
                <li className="header">Select an option</li>
                <li><a>New...</a></li>
                <li><a>Open</a></li>
                <li><a>Open project folder</a></li>
                <li><a>Save as...</a></li>
                <li className="divider"></li>
                <li><a>Export file...</a></li>
                <li><a>Quick export</a></li>
              </ul>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example dropdowns">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Dropdown toggles</h5>
            <p>Toggles can come in any shape or form</p>
          </div>
          <div className="module collapsed">
            <div className="stack">
              <div className="dropdown floating">
                <a className="toggle button">Menu</a>
                <ul className="menu">
                  <li className="header">Choices</li>
                  <li><a>Choice 1</a></li>
                  <li><a>Choice 2</a></li>
                  <li><a>Choice 3</a></li>
                  <li><a>Choice 4</a></li>
                </ul>
              </div>
            </div>
            <div className="stack">
              <div className="dropdown floating">
                <div className="toggle button purple labeled">
                  <i className="ion-earth"></i>
                  Choose a planet
                </div>
                <ul className="menu">
                  <li className="header">Some planets</li>
                  <li><a>Jupiter</a></li>
                  <li><a>Shipping address</a></li>
                  <li><a>Billing address</a></li>
                </ul>
              </div>
            </div>
            <div className="stack">
              <div className="dropdown floating">
                <div className="toggle button outlined grey">
                  Invite friends
                </div>
                <ul className="menu">
                  <li className="header">Event members</li>
                  <li><a>Charles</a></li>
                  <li><a>Amy</a></li>
                  <li><a>Jessica</a></li>
                  <li><a>Dan</a></li>
                </ul>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example dropdowns">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Disabled</h5>
            <p>You can disable the dropdown altogether by targeting the toggle, or disable items in the menu individually</p>
          </div>
          <div className="module collapsed">
            <div className="stack">
              <div className="dropdown floating disabled">
                <a className="toggle button primary disabled labeled labeled-right">
                  Disabled menu
                  <i className="ion-chevron-down"/>
                </a>
                <ul className="menu">
                  <li className="header">Select an option</li>
                  <li><a>New...</a></li>
                  <li><a>Open</a></li>
                  <li><a>Open project folder</a></li>
                  <li><a>Save as...</a></li>
                  <li className="divider"></li>
                  <li><a>Export file...</a></li>
                  <li><a>Quick export</a></li>
                </ul>
              </div>
            </div>
            <div className="stack">
              <div className="dropdown floating">
                <a className="toggle button blue labeled labeled-right">
                  Just a menu
                  <i className="ion-chevron-down"/>
                </a>
                <ul className="menu">
                  <li className="header">Select an option</li>
                  <li><a>New...</a></li>
                  <li><a>Open</a></li>
                  <li><a>Open project folder</a></li>
                  <li><a>Save as...</a></li>
                  <li className="divider"></li>
                  <li className="disabled"><a>Export file...</a></li>
                  <li className="disabled"><a>Quick export</a></li>
                </ul>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example dropdowns">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Right aligned dropdown</h5>
            <p>Dropdown menus can also be pushed to be flush with the right side</p>
          </div>
          <div className="module collapsed">
            <div className="dropdown right">
              <a className="toggle">Format file <i className="ion-chevron-down"/></a>
              <ul className="menu">
                <li><a>New...</a></li>
                <li><a>Open</a></li>
                <li><a>Open project folder</a></li>
                <li><a>Save as...</a></li>
              </ul>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example dropdowns">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Upward dropdowns</h5>
            <p>Flip your dropdown to the top of the toggle using <code>.upward</code></p>
          </div>
          <div className="module collapsed">
            <div className="dropdown upward">
              <a className="toggle">Format file <i className="ion-chevron-down"/></a>
              <ul className="menu">
                <li className="header">Select an option</li>
                <li><a>New...</a></li>
                <li><a>Open</a></li>
                <li><a>Open project folder</a></li>
                <li><a>Save as...</a></li>
                <li className="divider"></li>
                <li><a>Export file...</a></li>
                <li><a>Quick export</a></li>
              </ul>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dividers
