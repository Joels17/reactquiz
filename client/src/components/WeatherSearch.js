import React from 'react';

export default class WeatherSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: '',
        temp: {
          current: '',
          max: '',
          min: ''
        },
        error: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({location: event.target.value});
    }

    async handleSubmit(event) {
      event.preventDefault();

      const response = await fetch(`/api/temps?location=${this.state.location}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json();
      if(myJson.cod === '404'){
        this.setState({error: myJson.message});
      }else{
        this.setState({error: ''});
        console.log(myJson.main.temp);
        this.setState({
          temp: {                   
            current: myJson.main.temp,
            max: myJson.main.temp_max,
            min: myJson.main.temp_min    
          }
        });
      }

    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              City:
              <input type="text" value={this.state.location} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>{this.state.error ? this.state.error : ''}</p>
          <p>{this.state.temp.current ? `The temperature is ${this.state.temp.current} degrees celcius` : ''}</p>
          <p>{this.state.temp.max ? `High: ${this.state.temp.max} | Low: ${this.state.temp.min}` : ''}</p>
        </div>
      );
    }
  }