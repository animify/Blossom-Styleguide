import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Images extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Images">A button indicates a possible user action</Title>
        <div className="example images">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Top aligned image</h5>
            <p>Align content to the top when inline with an image</p>
          </div>
          <div className="module collapsed">
            <div className="image-tiny align-top">
              <img src="/images/365cons_placeholder.jpg" alt="" />
            </div>
            <span>Top aligned</span>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example images">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Middle aligned image</h5>
            <p>Align content to the middle when inline with an image</p>
          </div>
          <div className="module collapsed">
            <div className="image-tiny align-middle">
              <img src="/images/365cons_placeholder.jpg" alt="" />
            </div>
            <span>Middle aligned</span>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example images">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Bottom aligned image</h5>
            <p>Align content to the bottom when inline with an image</p>
          </div>
          <div className="module collapsed">
            <div className="image-tiny align-bottom">
              <img src="/images/365cons_placeholder.jpg" alt="" />
            </div>
            <span>Bottom aligned</span>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example images">
          <div className="explanation">
            <h5>Mini sized image</h5>
            <p>Forces inner images to be sized to <code>35px</code> using <code>.image-mini</code> on the parent class</p>
          </div>
          <div className="image-mini">
            <img src="/images/365cons_placeholder.jpg" alt="" />
          </div>
        </div>
        <div className="example images">
          <div className="explanation">
            <h5>Tiny sized image</h5>
            <p>Forces inner images to be sized to <code>70px</code> using <code>.image-tiny</code> on the parent class</p>
          </div>
          <div className="image-tiny">
            <img src="/images/365cons_placeholder.jpg" alt="" />
          </div>
        </div>
        <div className="example images">
          <div className="explanation">
            <h5>Small sized image</h5>
            <p>Forces inner images to be sized to <code>140px</code> using <code>.image-small</code> on the parent class</p>
          </div>
          <div className="image-small">
            <img src="/images/365cons_placeholder.jpg" alt="" />
          </div>
        </div>
        <div className="example images">
          <div className="explanation">
            <h5>Medium sized image</h5>
            <p>Forces inner images to be sized to <code>280px</code> using <code>.image-medium</code> on the parent class</p>
          </div>
          <div className="image-medium">
            <img src="/images/365cons_placeholder.jpg" alt="" />
          </div>
        </div>
        <div className="example images">
          <div className="explanation">
            <h5>Large sized image</h5>
            <p>Forces inner images to be sized to <code>400px</code> using <code>.image-large</code> on the parent class</p>
          </div>
          <div className="image-large">
            <img src="/images/365cons_placeholder.jpg" alt="" />
          </div>
        </div>
        <div className="example images">
          <div className="explanation">
            <h5>Big sized image</h5>
            <p>Forces inner images to be sized to <code>600px</code> using <code>.image-big</code> on the parent class</p>
          </div>
          <div className="image-big">
            <img src="/images/365cons_placeholder.jpg" alt="" />
          </div>
        </div>
        <div className="example images">
          <div className="explanation">
            <h5>Other sized images</h5>
            <p>Blossom also supports larger types of images, <code>Huge</code> and <code>Massive</code> are sized <code>840px</code> and <code>940px</code> respectively</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Images
