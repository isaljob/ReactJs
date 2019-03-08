import React, {Component} from 'react';

class Images extends Component {
  render() {
    return (
      <img
        src   = 'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg'
        alt   = 'Gambar-makanan'
        width = '500'
      />
    )
  }
}

export default Images;
