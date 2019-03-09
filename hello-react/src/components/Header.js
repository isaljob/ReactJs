import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar makanan Nusantara",
      dataList: this.props.list
    }
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(){
    alert(this.state.daftar)
    // alert('Halaman Header')
  }

  render() {
    return (
      <div>
        <h2>Makanan khas Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        <a href="/" onClick={this.handlePesan}>
          Halaman Header
        </a>
      </div>
    )
  }
}

export default Header;
