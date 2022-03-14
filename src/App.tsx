import React from "react";
import "./styles.css";

interface Props {}

interface State {
  message: string;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: "No data received from IFrame, yet."
    };
  }

  render() {
    return (
      <div>
        <div>
          <h4>{this.state.message}</h4>
        </div>
        <iframe
          className="iframe"
          title="TMS WebCore IFrame"
          src="/tms-webcore-iframe.html"
        />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener(
      "message",
      (ev: MessageEvent<{ type: object; message: object }>) => {
        console.log(ev);
        if (typeof ev.data !== "object") return;
        if (!ev.data.type) return;
        if (ev.data.type !== "button-click") return;
        if (!ev.data.message) return;
        this.setState({
          message: ev.data.message
        });
      }
    );
  }
}
