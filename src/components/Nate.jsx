import React, { Component } from 'react';
import Swal from 'sweetalert2'

class nate extends Component {
  constructor(props) {
    super(props);
    
  }
  
  will = () => {
    Swal.fire({
      icon: "warning",
      title: 'Ur Gai'
    })
  }
  render() {
    return (
      <div>
        <button onClick = {() => this.will()}>Hey Will</button>
      </div>
    );
  }
}

export default nate;