import axios from "axios";
import React,{ Component } from "react";
import "../sass/window.scss";

export default class Card extends Component {
  state = {
    airlines: [],
    isLoading: true,
    errors: null
  };

  headers = {
    "Access-Control-Allow-Origin": "*",
  };

  getUsers() {
    axios
      .get(
        "https://www.kayak.com/h/mobileapis/directory/airlines/", this.headers
      )
      .then((response) =>
        response.data.results.map((dataInfo) => ({
          alliance: `${dataInfo.alliance}`,
          name: `${dataInfo.name}`,
          phone: `${dataInfo.phone}`,
          site: `${dataInfo.site}`,
          image: `${dataInfo.logoUrl}`
        }))
      )
      .then((airlines) => {
        this.setState({
          airlines,
          isLoading: false
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, airlines } = this.state;
    return (
      <React.Fragment>
        <div className="window">
          {!isLoading ? (
            airlines.map((dataInfo) => {
              const { alliance, name, phone, site, image } = dataInfo;
              return (
                <div key={alliance}>
                  <p>{name}</p>
                  <p>{phone}</p>
                  <p>{site}</p>
                  <img src={image} alt={name} />
                </div>
              );
            })
          ) : (
            <p> Loading... </p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
