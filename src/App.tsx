import React from 'react';

type Props = {};

type State = {
  pressedKey: string | null;
};

export class App extends React.PureComponent<Props, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey === null ? (
          <p className="App__message">{this.state.pressedKey}</p>
        ) : (
          <p className="App__message">{this.state.pressedKey}</p>
        )}
      </div>
    );
  }
}
