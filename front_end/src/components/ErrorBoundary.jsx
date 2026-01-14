import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("GuardNet UI Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, color: "#f87171" }}>
          <h3>Something went wrong.</h3>
          <p>Please refresh or contact system admin.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
