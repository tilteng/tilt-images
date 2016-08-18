import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('ItemRemove', {
  className: 'tilt-icon-item-remove',

  render() {
    return <svg className={this.getClassNames()} viewBox="0 0 16 16">
      <title>ItemRemove</title>
      <path d="M7.99977667,0 C9.44741911,0 10.7847352,0.357332291 12.013065,1.07199687 C13.2413947,1.78666146 14.2128919,2.75815862 14.9275565,3.98648837 C15.642221,5.21481812 16,6.55258089 16,7.99977667 C16,9.44697245 15.642221,10.7847352 14.9275565,12.013065 C14.2128919,13.2413947 13.2413947,14.2128919 12.013065,14.9275565 C10.7847352,15.642221 9.44741911,15.9995533 7.99977667,15.9995533 C6.55258089,15.9995533 5.21481812,15.642221 3.98693504,14.9275565 C2.75815862,14.2128919 1.78666146,13.2413947 1.07244354,12.013065 C0.357332291,10.7847352 0,9.44697245 0,7.99977667 C0,6.55258089 0.357332291,5.21481812 1.07244354,3.98648837 C1.78666146,2.75815862 2.75815862,1.78666146 3.98693504,1.07199687 C5.21481812,0.357332291 6.55258089,0 7.99977667,0 Z M4,9 L12,9 L12,7 L4,7 L4,7 L4,9 L4,9 Z" />
    </svg>;
  },
});
