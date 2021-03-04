import React from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundary";
import CounterButton from "./CounterButton";
import "./MainPage.css";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    const{ robots, searchField} = this.props

    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const { isPending, onSearchChange } = this.props;

    return isPending ? (
      <h1 className="tc">Please Wait</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Rubofriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <CounterButton />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={this.filteredRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
