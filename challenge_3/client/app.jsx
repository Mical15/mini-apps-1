class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phonenumber: '',
      ccn: '',
      expiration: '',
      cvv: '',
      billingzipcode: '',
      form: 0
    };

    this.checkOut = this.checkOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm1 = this.changeForm1.bind(this);
    this.changeForm2 = this.changeForm2.bind(this);
    this.nextButton = this.nextButton.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('added!')
  }

  changeForm1() {
    this.setState(prevState => {
      return { form: prevState.form + 1 }
    })
  }

  changeForm2() {
    this.setState(prevState => {
      return { form: prevState.form + 1 }
    })
    axios({
      method: 'POST',
      url: '/',
      data:
      {
        'name': this.state.name,
        'email': this.state.email,
        'password': this.state.password,
        'address1': this.state.address1,
        'address2': this.state.address2,
        'city': this.state.city,
        'state': this.state.state,
        'zipcode': this.state.zipcode,
        'phonenumber': this.state.phonenumber,
        'ccn': this.state.cnn,
        'expiration': this.state.expiration,
        'cvv': this.state.cvv,
        'billingzipcode': this.state.billingzipcode
      }
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

  nextButton() {
    let form = this.state.form;
    if (form === 0) {
      return (
        <button onClick={this.changeForm1}>Next</button>
      )
    } 
    if (form > 0 && form < 4) {
      return (
        <button onClick={this.changeForm2}>Next</button>
      )
    } else {
      return null;
    }
  }

  checkOut() {
    console.log(this.state);
    axios({
      method: 'POST',
      url: '/',
      data:
      {
        'name': this.state.name,
        'email': this.state.email,
        'password': this.state.password,
        'address1': this.state.address1,
        'address2': this.state.address2,
        'city': this.state.city,
        'state': this.state.state,
        'zipcode': this.state.zipcode,
        'phonenumber': this.state.phonenumber,
        'ccn': this.state.cnn,
        'expiration': this.state.expiration,
        'cvv': this.state.cvv,
        'billingzipcode': this.state.billingzipcode
      }
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Give Me Metadata!</h1>

        <form onSubmit={this.handleSubmit}>
          <Form1
            currentForm={this.state.form}
            handleChange={this.handleChange}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
          />
          <Form2
            currentForm={this.state.form}
            handleChange={this.handleChange}
            address1={this.state.address1}
            address2={this.state.address2}
            city={this.state.city}
            state={this.state.state}
            zipcode={this.state.zipcode}
            phonenumber={this.state.phonenumber}
          />
          <Form3
            currentForm={this.state.form}
            handleChange={this.handleChange}
            ccn={this.state.ccn}
            cvv={this.state.cvv}
            billingzipcode={this.state.billingzipcode}
          />
          <FinalPage
            checkOut={this.checkOut}
            currentForm={this.state.form}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            address1={this.state.address1}
            address2={this.state.address2}
            city={this.state.city}
            state={this.state.state}
            zipcode={this.state.zipcode}
            phonenumber={this.state.phonenumber}
            ccn={this.state.ccn}
            cvv={this.state.cvv}
            billingzipcode={this.state.billingzipcode}
          />
          {this.nextButton()}
        </form>
      </React.Fragment>
    )
  }


}

function Form1(props) {
  if (props.currentForm !== 1) {
    return null;
  }
  return (
    <div>
      <label>Name:</label>
      <input name='name' type='text' onChange={props.handleChange}></input>
      <label>Email:</label>
      <input name='email' type='text' onChange={props.handleChange}></input>
      <label>Password:</label>
      <input name='password' type='text' onChange={props.handleChange}></input>
    </div>
  )
};


function Form2(props) {
  if (props.currentForm !== 2) {
    return null;
  }
  return (
    <div>
      <label>Address:</label>
      <input name='address1' type='text' placeholder=' ' onChange={props.handleChange}></input>
      <label>Address:</label>
      <input name='address2' type='text' placeholder=' ' onChange={props.handleChange}></input>
      <label>City:</label>
      <input name='city' type='text' onChange={props.handleChange}></input>
      <label>State:</label>
      <input name='state' type='text' onChange={props.handleChange}></input>
      <label>Zipcode:</label>
      <input name='zipcode' type='text' onChange={props.handleChange}></input>
      <label>Phone Number:</label>
      <input name='phonenumber' type='text' onChange={props.handleChange}></input>
    </div>
  )
};

function Form3(props) {
  if (props.currentForm !== 3) {
    return null;
  }
  return (
    <div>
      <label>Credit Card Number:</label>
      <input name='ccn' type='text' onChange={props.handleChange}></input>
      <label>Expiration Date:</label>
      <input name='expiration' type='text' onChange={props.handleChange}></input>
      <label>CVV:</label>
      <input name='cvv' type='text' onChange={props.handleChange}></input>
      <label>Billing Zipcode:</label>
      <input name='billingzipcode' type='text' onChange={props.handleChange}></input>
    </div>
  )
};

function FinalPage(props) {
  if (props.currentForm !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <h3>Confirmation</h3>
      <div>
        <ul>
          <li>Name: {props.name}</li>
          <li>Email: {props.email}</li>
          <li>Password: {props.password}</li>
          <li>Address: {props.address}</li>
          <li>City: {props.city}</li>
          <li>State: {props.state}</li>
          <li>Zipcode: {props.zipcode}</li>
          <li>Phone Number: {props.phonenumber}</li>
          <li>Credit Card Number: {props.ccn}</li>
          <li>Expiration Date: {props.expiration}</li>
          <li>CVV: {props.cvv}</li>
          <li>Billing Zipcode: {props.billingzipcode}</li>
        </ul>
      </div>
      <button onClick={props.checkOut}>Purchase</button>
    </React.Fragment>
  )
}



ReactDOM.render(<App />, document.getElementById('app'));
